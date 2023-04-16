import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    let navBarData = [
        {
            id: 1,
            name: "Home",
        },
        {
            id: 2,
            name: "About",
        },
        {
            id: 3,
            name: "Portfolio",
        },
        {
            id: 4,
            name: "Experience",
        },
        {
            id: 5,
            name: "Contact",
        },
    ];

    return (
        <div className="flex justify-between items-center bg-black p-4 w-full h-35 text-white fixed">
            <div className="bord">
                <h1 className="text-5xl font-signature font-bold ml-2">Mohammad</h1>
            </div>
            <ul className="hidden md:flex">
                {navBarData.map(({ id, name }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                    >
                        {name}
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 duration-200 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul
                    className="flex flex-col justify-center items-center 
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
                >
                    {navBarData.map(({ id, name }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize 
                    py-6 text-4xl "
                        >
                            {name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;

