'use client';

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white p-5 shadow-md transition-shadow duration-300">
            <div className="container mx-auto flex justify-between items-center">
                <h2 className="text-xl font-bold">
                {"</"}JOAO{"/>"}
                </h2>

                {/* Menu Desktop */}
                <ul className="hidden lg:flex items-center gap-x-7 font-semibold">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                        <li key={item} className="group">
                            <button aria-label={`Go to ${item} section`}>
                                {item}
                            </button>
                            <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"></span>
                        </li>
                    ))}
                </ul>

                <a
                    href="#"
                    className="hidden relative lg:inline-block px-4 py-2 font-medium group border-2 border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white flex items-center gap-x-3">
                        RESUME
                    </span>
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden focus:outline-none"
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>
            </div>

            {isOpen && (
                <ul className="lg:hidden flex flex-col items-center gap-y-5 mt-4 bg-white shadow-md p-5 rounded-md">
                    {["About", "Projects", "Contact"].map((item) => (
                        <li key={item} className="group">
                            <button aria-label={`Go to ${item} section`} onClick={() => setIsOpen(false)}>
                                {item}
                            </button>
                            <span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-black flex"></span>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
