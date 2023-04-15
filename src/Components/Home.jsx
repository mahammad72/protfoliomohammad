import React from 'react'
import HeroImage from '../assests/MSToon_anim.jpg'
import { BsChevronRight } from 'react-icons/bs'

const Home = () => {
    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b 
        from-black via-black to-gray-800 justify-center items-center">
            <div className='max-w-screen-lg mx-auto flex flex-col
             items-center justify-center h-full px-4 md:flex-row'>
                <div className="flex flex-col h-full justify-center">
                    <h2 className="text-4xl sm:text-7xl font-bold 
                    text-white"> I'm a React Native Developer</h2>

                    <p className="text-gray-500 py-4 max-w-md">
                        Meet Mohammad Momin, a highly skilled and experienced React Native and React JS developer with over 5 years of expertise in creating exceptional user interfaces and responsive web applications. Throughout Mohammad Momin's career, they have demonstrated a strong ability to design and develop complex projects using cutting-edge technologies, including Redux, Node.js, and GraphQL.
                    </p>
                    <div>

                        <button className="text-white w-fit px-6 py-3 my-2 
                        flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                            Portfolio
                            <span className="mx-1 hover:rotate-90 duration-300 ">
                                <BsChevronRight />
                            </span>
                        </button>
                    </div>

                </div>
                <div>
                    <img src={HeroImage} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>

        </div>
    )
}

export default Home