import os
import asyncio
import logging
from datetime import datetime, timezone
from typing import Optional

import resend
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Environment variables
MONGO_URL = os.environ.get("MONGO_URL", "mongodb://localhost:27017")
DB_NAME = os.environ.get("DB_NAME", "portfolio_db")
RESEND_API_KEY = os.environ.get("RESEND_API_KEY")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
RECIPIENT_EMAIL = os.environ.get("RECIPIENT_EMAIL", "mahammadmomin7@gmail.com")

# Initialize Resend
if RESEND_API_KEY:
    resend.api_key = RESEND_API_KEY

# Initialize FastAPI
app = FastAPI(title="Mohammad Portfolio API", version="1.0.0")

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB client
client: Optional[AsyncIOMotorClient] = None
db = None


@app.on_event("startup")
async def startup_db_client():
    global client, db
    try:
        client = AsyncIOMotorClient(MONGO_URL)
        db = client[DB_NAME]
        logger.info("Connected to MongoDB successfully")
    except Exception as e:
        logger.error(f"Failed to connect to MongoDB: {e}")


@app.on_event("shutdown")
async def shutdown_db_client():
    global client
    if client:
        client.close()
        logger.info("MongoDB connection closed")


# Pydantic Models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    status: str
    message: str
    message_id: Optional[str] = None


# Health check endpoint
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


# Contact form endpoint
@app.post("/api/contact", response_model=ContactResponse)
async def submit_contact(contact: ContactMessage):
    try:
        # Store message in MongoDB
        message_doc = {
            "name": contact.name,
            "email": contact.email,
            "message": contact.message,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "email_sent": False
        }
        
        if db is not None:
            result = await db.contact_messages.insert_one(message_doc)
            logger.info(f"Message stored with ID: {result.inserted_id}")

        # Send email via Resend
        if RESEND_API_KEY and RESEND_API_KEY != "re_your_api_key_here":
            html_content = f"""
            <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #0a0a0a; color: #ededed;">
                <h2 style="color: #a855f7; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Portfolio Contact Message</h2>
                <div style="background: #171717; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong style="color: #6366f1;">From:</strong> {contact.name}</p>
                    <p><strong style="color: #6366f1;">Email:</strong> {contact.email}</p>
                    <p><strong style="color: #6366f1;">Message:</strong></p>
                    <p style="background: #262626; padding: 15px; border-radius: 6px; white-space: pre-wrap;">{contact.message}</p>
                </div>
                <p style="color: #52525b; font-size: 12px; margin-top: 20px;">Sent from Mohammad Hasan Suthar Portfolio</p>
            </div>
            """
            
            params = {
                "from": SENDER_EMAIL,
                "to": [RECIPIENT_EMAIL],
                "subject": f"Portfolio Contact: {contact.name}",
                "html": html_content,
                "reply_to": contact.email
            }
            
            try:
                email_result = await asyncio.to_thread(resend.Emails.send, params)
                
                # Update message status in DB
                if db is not None and 'id' in email_result:
                    await db.contact_messages.update_one(
                        {"email": contact.email, "created_at": message_doc["created_at"]},
                        {"$set": {"email_sent": True, "email_id": email_result.get("id")}}
                    )
                
                return ContactResponse(
                    status="success",
                    message="Message sent successfully! I'll get back to you soon.",
                    message_id=email_result.get("id")
                )
            except Exception as email_error:
                logger.error(f"Email send failed: {email_error}")
                return ContactResponse(
                    status="success",
                    message="Message received! I'll get back to you soon.",
                    message_id=None
                )
        else:
            # No Resend API key configured - just store the message
            return ContactResponse(
                status="success",
                message="Message received! I'll get back to you soon.",
                message_id=None
            )
            
    except Exception as e:
        logger.error(f"Contact submission failed: {e}")
        raise HTTPException(status_code=500, detail=f"Failed to submit message: {str(e)}")


# Get all messages (admin endpoint - for testing)
@app.get("/api/messages")
async def get_messages():
    if db is None:
        return {"messages": []}
    
    messages = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(100)
    return {"messages": messages}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
