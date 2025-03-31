import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0b3a34]">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-4">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                {section.title}
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {section.links.map((link, i) => (
                                    <li key={i} className="mb-4">
                                        <a href="#" className="hover:underline">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-4 py-4 bg-[#072420] lg:flex lg:items-center lg:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                    © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center lg:mt-0 space-x-5 rtl:space-x-reverse">
                    {socialIcons.map((icon, index) => (
                        <a key={index} href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <icon.svg className="w-4 h-4" aria-hidden="true" />
                            <span className="sr-only">{icon.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

const sections = [
    {
        title: "Company",
        links: ["About", "Careers", "Brand Center", "Blog"],
    },
    {
        title: "Help center",
        links: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
    },
    {
        title: "Legal",
        links: ["Privacy Policy", "Licensing", "Terms & Conditions"],
    },
    {
        title: "Download",
        links: ["iOS", "Android", "Windows", "MacOS"],
    },
];

const socialIcons = [
    { name: "Facebook", svg: (props) => <svg {...props} viewBox="0 0 8 19"><path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" /></svg> },
    { name: "Twitter", svg: (props) => <svg {...props} viewBox="0 0 20 17"><path d="M20 1.892a8.178 8.178 0 0 1-2.355.635A4.074 4.074 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" /></svg> },
];

export default Footer;