import React from "react";

const About = () => {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
                </div>
                <p className="text-xl mt-20">
                    Meet Mohammad momin, a highly skilled and experienced React Native and
                    React JS developer with over 5 years of expertise in creating
                    exceptional user interfaces and responsive web applications.
                    Throughout Mohammad momin's career, they have demonstrated a strong
                    ability to design and develop complex projects using cutting-edge
                    technologies, including Redux, Node.js, and GraphQL.
                </p>

                <br />

                <p className="text-xl mt-5">
                    Mohammad momin has an extensive portfolio of successful projects,
                    including mobile apps and web applications that are both intuitive and
                    visually stunning. Their ability to collaborate with cross-functional
                    teams, including designers and project managers, has enabled them to
                    deliver high-quality work that exceeds client expectations.
                </p>

                {/* <br />

                <p className="text-xl mt-5">
                    In addition to their technical expertise, Mohammad momin is also known
                    for their strong communication skills and commitment to delivering
                    projects on time and within budget. They are a problem-solver,
                    critical thinker, and self-starter, who always strives to stay
                    up-to-date with the latest industry trends and technologies.
                </p>

                <br />

                <p className="text-xl mt-5">
                    Overall, Mohammad momin is an exceptional developer who combines
                    technical expertise with creativity, innovation, and a passion for
                    delivering top-quality work. Their commitment to excellence and
                    dedication to their craft make them an asset to any development team.
                </p> */}
            </div>
        </div>
    );
};

export default About;
