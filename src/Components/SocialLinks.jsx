import React from "react";
import {
    BsGithub,
    BsLinkedin,
    BsFillPersonLinesFill,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <BsLinkedin size={35} />
                </>
            ),
            href: "https://www.linkedin.com/in/mahammad-momin-339b4b146",
            style: "rounded-tr-md",
        },
        {
            id: 2,
            child: (
                <>
                    Github <BsGithub size={35} />
                </>
            ),
            href: "https://github.com/mahammad72",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={35} />
                </>
            ),
            href: "mailto:foo@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={35} />
                </>
            ),
            href: "/MahammadSuthar.pdf",
            style: "rounded-br-md",
            download: true,
        },
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li
                        className={
                            "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
                            " " +
                            style
                        }
                    >
                        <a
                            href={href}
                            className="flex justify-between items-center w-full text-white"
                            download={download}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
