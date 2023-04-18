import React from 'react'
import VickyGold from "../assests/porfolio/Vickygold.png";
import kailashgold from "../assests/porfolio/kailashgold.png";
import keralabullion from "../assests/porfolio/keralabullion.png";
import keralagold from "../assests/porfolio/keralagold.png";
import gigsLive from "../assests/porfolio/gigsLive.jpg";
import peardrop from "../assests/porfolio/peardrop.jpg";
import metime from "../assests/porfolio/metime.png";
import Navotar from "../assests/porfolio/Navotar.png";

const Portfolio = () => {
    const portfolio = [
        {
            id: 1,
            src: VickyGold,
            androidStore: 'https://play.google.com/store/apps/details?id=com.VijayAssayCenter'
        },
        {
            id: 2,
            src: keralabullion,
            androidStore: 'https://play.google.com/store/apps/details?id=com.keralabullion'
        },
        {
            id: 3,
            src: keralagold,
            androidStore: ' https://play.google.com/store/apps/details?id=com.keralagold '
        },
        {
            id: 4,
            src: kailashgold,
            androidStore: ' https://play.google.com/store/apps/details?id=com.kailasgold'
        },
        {
            id: 5,
            src: gigsLive,
            androidStore: 'https://play.google.com/store/apps/details?id=live.gigs.app'
        },
        {
            id: 6,
            src: peardrop,
            androidStore: 'https://play.google.com/store/apps/details?id=com.drisana.ezrealtortest'
        },
        {
            id: 7,
            src: metime,
            androidStore: ' https://play.google.com/store/apps/details?id=com.metime.application'
        },
        {
            id: 8,
            src: Navotar,
            androidStore: 'https://navotar.com/'
        },
    ];
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white justify-center items-center md:h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Checkout some of my work here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolio.map(({ id, src }) =>
                        (<div key={id} className='shadow-md shadow-gray-500 '>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 resize-x' />
                            <div className='flex justify-center items-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Android</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>IOS</button>
                            </div>
                        </div>)
                        )
                    }

                </div>

            </div>
        </div>
    )
}

export default Portfolio