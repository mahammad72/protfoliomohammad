#!/usr/bin/env python3
"""
Backend API Testing Script for Mohammad Portfolio
Tests all API endpoints and functionality
"""

import requests
import json
import sys
from datetime import datetime
from typing import Dict, Any, Tuple

class PortfolioAPITester:
    def __init__(self, base_url: str = "https://aee8799a-5e8f-4e52-ae3e-dc8015f56105.preview.emergentagent.com"):
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        self.session.headers.update({
            'Content-Type': 'application/json',
            'User-Agent': 'PortfolioTestAgent/1.0'
        })
        self.tests_run = 0
        self.tests_passed = 0
        self.results = []
    
    def log_result(self, test_name: str, passed: bool, details: str = "", response_data: Any = None):
        """Log test result"""
        self.tests_run += 1
        if passed:
            self.tests_passed += 1
            
        result = {
            "test": test_name,
            "passed": passed,
            "details": details,
            "timestamp": datetime.now().isoformat()
        }
        
        if response_data:
            result["response"] = response_data
            
        self.results.append(result)
        
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{status} | {test_name}")
        if details:
            print(f"      {details}")
        print()

    def test_health_endpoint(self) -> bool:
        """Test the health check endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/api/health", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                # Check required fields
                if "status" in data and "timestamp" in data:
                    if data["status"] == "healthy":
                        self.log_result(
                            "Health Check", 
                            True, 
                            f"Status: {data['status']}, Response time: {response.elapsed.total_seconds():.2f}s",
                            data
                        )
                        return True
                    else:
                        self.log_result("Health Check", False, f"Unhealthy status: {data['status']}")
                        return False
                else:
                    self.log_result("Health Check", False, "Missing required fields in response")
                    return False
            else:
                self.log_result("Health Check", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.RequestException as e:
            self.log_result("Health Check", False, f"Request failed: {str(e)}")
            return False

    def test_contact_submission(self) -> bool:
        """Test contact form submission"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": "test.user@example.com",
            "message": "This is a test message from the automated testing suite."
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/api/contact",
                json=test_data,
                timeout=15
            )
            
            if response.status_code == 200:
                data = response.json()
                
                # Check response structure
                if "status" in data and "message" in data:
                    if data["status"] == "success":
                        self.log_result(
                            "Contact Form Submission",
                            True,
                            f"Message: {data['message']}, Response time: {response.elapsed.total_seconds():.2f}s",
                            data
                        )
                        return True
                    else:
                        self.log_result("Contact Form Submission", False, f"Non-success status: {data}")
                        return False
                else:
                    self.log_result("Contact Form Submission", False, f"Invalid response structure: {data}")
                    return False
            else:
                try:
                    error_data = response.json()
                    self.log_result("Contact Form Submission", False, f"HTTP {response.status_code}: {error_data}")
                except:
                    self.log_result("Contact Form Submission", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.RequestException as e:
            self.log_result("Contact Form Submission", False, f"Request failed: {str(e)}")
            return False

    def test_contact_form_validation(self) -> bool:
        """Test contact form validation with invalid data"""
        invalid_test_cases = [
            {
                "name": "Invalid Email Test",
                "data": {"name": "Test", "email": "invalid-email", "message": "Test"},
                "expected_status": 422
            },
            {
                "name": "Missing Name Test", 
                "data": {"email": "test@example.com", "message": "Test"},
                "expected_status": 422
            },
            {
                "name": "Missing Email Test",
                "data": {"name": "Test", "message": "Test"},
                "expected_status": 422
            },
            {
                "name": "Missing Message Test",
                "data": {"name": "Test", "email": "test@example.com"},
                "expected_status": 422
            }
        ]
        
        all_passed = True
        for test_case in invalid_test_cases:
            try:
                response = self.session.post(
                    f"{self.base_url}/api/contact",
                    json=test_case["data"],
                    timeout=10
                )
                
                if response.status_code == test_case["expected_status"]:
                    self.log_result(
                        f"Validation - {test_case['name']}", 
                        True, 
                        f"Correctly rejected with HTTP {response.status_code}"
                    )
                else:
                    self.log_result(
                        f"Validation - {test_case['name']}", 
                        False, 
                        f"Expected {test_case['expected_status']}, got {response.status_code}"
                    )
                    all_passed = False
                    
            except requests.RequestException as e:
                self.log_result(f"Validation - {test_case['name']}", False, f"Request failed: {str(e)}")
                all_passed = False
                
        return all_passed

    def test_messages_endpoint(self) -> bool:
        """Test the messages retrieval endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/api/messages", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                
                if "messages" in data and isinstance(data["messages"], list):
                    self.log_result(
                        "Messages Retrieval",
                        True,
                        f"Retrieved {len(data['messages'])} messages, Response time: {response.elapsed.total_seconds():.2f}s",
                        {"message_count": len(data["messages"])}
                    )
                    return True
                else:
                    self.log_result("Messages Retrieval", False, "Invalid response structure")
                    return False
            else:
                self.log_result("Messages Retrieval", False, f"HTTP {response.status_code}: {response.text}")
                return False
                
        except requests.RequestException as e:
            self.log_result("Messages Retrieval", False, f"Request failed: {str(e)}")
            return False

    def test_cors_headers(self) -> bool:
        """Test CORS headers are properly configured"""
        try:
            # OPTIONS request to check CORS
            response = self.session.options(f"{self.base_url}/api/health", timeout=10)
            
            if response.status_code in [200, 204]:
                cors_headers = {
                    "Access-Control-Allow-Origin": response.headers.get("Access-Control-Allow-Origin"),
                    "Access-Control-Allow-Methods": response.headers.get("Access-Control-Allow-Methods"),
                    "Access-Control-Allow-Headers": response.headers.get("Access-Control-Allow-Headers")
                }
                
                self.log_result(
                    "CORS Configuration",
                    True,
                    f"CORS headers present: {list(cors_headers.keys())}",
                    cors_headers
                )
                return True
            else:
                self.log_result("CORS Configuration", False, f"OPTIONS request failed: HTTP {response.status_code}")
                return False
                
        except requests.RequestException as e:
            self.log_result("CORS Configuration", False, f"CORS test failed: {str(e)}")
            return False

    def test_api_performance(self) -> bool:
        """Test API response times"""
        endpoints = [
            ("/api/health", "GET"),
            ("/api/messages", "GET")
        ]
        
        all_passed = True
        for endpoint, method in endpoints:
            try:
                if method == "GET":
                    response = self.session.get(f"{self.base_url}{endpoint}", timeout=10)
                
                response_time = response.elapsed.total_seconds()
                
                if response_time < 5.0:  # Should respond within 5 seconds
                    self.log_result(
                        f"Performance - {endpoint}",
                        True,
                        f"Response time: {response_time:.2f}s (< 5s threshold)"
                    )
                else:
                    self.log_result(
                        f"Performance - {endpoint}",
                        False,
                        f"Slow response: {response_time:.2f}s (> 5s threshold)"
                    )
                    all_passed = False
                    
            except requests.RequestException as e:
                self.log_result(f"Performance - {endpoint}", False, f"Request failed: {str(e)}")
                all_passed = False
                
        return all_passed

    def run_all_tests(self) -> Dict[str, Any]:
        """Run all backend tests"""
        print("🚀 Starting Portfolio Backend API Tests")
        print("=" * 50)
        
        # Run individual tests
        test_methods = [
            self.test_health_endpoint,
            self.test_contact_submission,
            self.test_contact_form_validation,
            self.test_messages_endpoint,
            self.test_cors_headers,
            self.test_api_performance
        ]
        
        for test_method in test_methods:
            try:
                test_method()
            except Exception as e:
                self.log_result(f"CRITICAL ERROR in {test_method.__name__}", False, str(e))
        
        # Print summary
        print("=" * 50)
        print(f"📊 TEST SUMMARY")
        print(f"Total Tests: {self.tests_run}")
        print(f"Passed: {self.tests_passed}")
        print(f"Failed: {self.tests_run - self.tests_passed}")
        print(f"Success Rate: {(self.tests_passed/self.tests_run*100):.1f}%")
        
        return {
            "total_tests": self.tests_run,
            "passed_tests": self.tests_passed,
            "failed_tests": self.tests_run - self.tests_passed,
            "success_rate": round((self.tests_passed/self.tests_run*100), 1) if self.tests_run > 0 else 0,
            "results": self.results
        }


def main():
    """Main test execution"""
    tester = PortfolioAPITester()
    results = tester.run_all_tests()
    
    # Save results to file
    with open("/tmp/backend_test_results.json", "w") as f:
        json.dump(results, f, indent=2)
    
    # Return exit code based on success
    if results["failed_tests"] > 0:
        print(f"\n❌ {results['failed_tests']} tests failed!")
        return 1
    else:
        print(f"\n✅ All {results['passed_tests']} tests passed!")
        return 0


if __name__ == "__main__":
    sys.exit(main())