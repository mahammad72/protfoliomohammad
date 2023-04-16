import React from 'react'

import android from "../assests/android.png";
import react from "../assests/react.png";
import Reactnative from "../assests/Reactnative.png";
import js from "../assests/js.png";
import redux from "../assests/redux.png";
import restapi from "../assests/restapi.png";

const Expriance = () => {
    const experience = [
        {
            id: 1,
            src: Reactnative,
            name: 'React Native',
            style: "shadow-cyan-500"
        },
        {
            id: 2,
            src: react,
            name: 'React JS',
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: android,
            name: 'Android',
            style: "shadow-green-500"
        },
        {
            id: 4,
            src: js,
            name: 'JavaScript',
            style: "shadow-yellow-500"
        },
        {
            id: 5,
            src: restapi,
            name: 'Rest API',
            style: "shadow-blue-500"
        },
        {
            id: 6,
            src: redux,
            name: 'Redux',
            style: "shadow-blue-500"
        },

    ];
    return (
        <div className="bg-gradient-to-b from-gray-800 to-black w-full text-white h-screen md:h-screen" >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are technologies i've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        experience.map(({ id, src, name, style }) =>
                        (<div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-40 mx-auto' />
                            <p className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>{name}</p>
                        </div>)
                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default Expriance