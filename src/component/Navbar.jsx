import { useState, useEffect } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${isScrolled ? "bg-[#021713] shadow-2xl" : "bg-transparent shadow-md"}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-2 rtl:space-x-reverse">
                    <img src="/assets/images/logowithtext.png" className="h-15" alt="Al Amin Logo" />
                </a>
                <button
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isNavOpen ? "block" : "hidden"} w-full xl:block xl:w-auto`}>
                    <ul className="flex flex-col font-medium p-4 xl:p-0 mt-4 border border-[#125a50] rounded-lg bg-[#125a50] xl:bg-transparent xl:space-x-8 xl:flex-row xl:mt-0 xl:border-0">
                        <li><a href="#" className="block py-2 px-3 lg:bg-transparent lg:text-yellow-400">Beranda</a></li>
                        <li><a href="#" className="block py-2 px-3 text-white rounded-sm hover:text-yellow-400">Tentang Kami</a></li>
                        <li className="relative">
                            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:text-yellow-400 lg:w-auto">
                                Jenjang Pendidikan
                                <svg className="w-2.5 h-2.5 ml-2.5" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-lg">
                                    <ul className="py-2 text-sm text-gray-700">
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a></li>
                                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a></li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li><a href="#" className="block py-2 px-3 text-white rounded-sm hover:text-yellow-400">Sustainable Kurikulum</a></li>
                    </ul>
                </div>
                <div className="hidden xl:block">
                    <a href="#" className="bg-yellow-400 flex gap-2 py-2 px-6 rounded-lg font-semibold items-center text-slate-800">
                        <i className="fa-solid fa-arrow-right-to-bracket"></i>
                        Daftar Sekarang
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;