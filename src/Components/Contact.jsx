import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className="w-full h-scren bg-gradient-to-b from-black to-gray-800 p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p className="py-6">Submit the form below to get touch with me.</p>
                </div>
                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/e026474a-7723-494e-aa5e-9b1e2c1902f4" method='POST' className=" flex flex-col w-full md:w-1/2 ">
                        <input
                            type=""
                            name="Name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type=""
                            name="Email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />

                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Enter message"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-5 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
                            Let's talk
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact