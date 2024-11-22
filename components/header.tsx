"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import navigation from "@/data/navigation";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Company");
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = () => {
        setOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            closeMenu();
        }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className="w-full px-4 py-2 flex justify-end items-center">
                <button
                    className="text-xs text-gray-50/70 flex items-center gap-2"
                    onClick={toggleMenu}
                    aria-expanded={open}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-50"
                    >
                        {open ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        )}
                    </svg>
                </button>
            </div>
            {open && (
                <div
                    ref={dropdownRef}
                    className={`fixed inset-0 bg-transparent bg-opacity-80 backdrop-blur-lg z-50 transition-all duration-300 ${open ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="absolute top-0 left-0 right-0 bottom-0 px-8 py-6 flex flex-col">
                        {/* Big Screen Layout */}
                        <div className="hidden md:flex min-h-[250px] gap-6 fade-in">
                            <div className="w-1/4">
                                <ul className="font-thin text-sm list-none">
                                    {navigation.map((section) => (
                                        <li
                                            key={section.title}
                                            className={`my-2 uppercase tracking-[0.2em] cursor-pointer hover:text-gray-300 ${activeSection === section.title
                                                ? "text-gray-300"
                                                : "text-gray-50/70"
                                                }`}
                                            onClick={() =>
                                                setActiveSection(section.title)
                                            }
                                        >
                                            {section.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-3/4">
                                {navigation
                                    .find(
                                        (section) =>
                                            section.title === activeSection
                                    )
                                    ?.links.map((link, index) => (
                                        <li
                                            key={index}
                                            className="my-2 list-none fade-in"
                                        >
                                            <Link
                                                href={link.href}
                                                className="uppercase tracking-[0.2em] hover:text-gray-300 text-gray-50"
                                            >
                                                <p>{link.title}</p>
                                                <p className="text-gray-50/70 text-[10px]">
                                                    {link.description}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                            </div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="grid md:hidden h-fit grid-cols-2 gap-6 fade-in">
                            {navigation.map((section, index) => (
                                <div key={index} className="mb-2">
                                    <h1 className="text-[10px] text-gray-50/70 font-thin mb-4 uppercase tracking-[0.4em]">
                                        {section.title}
                                    </h1>
                                    <ul className="font-thin text-sm list-none">
                                        {section.links.map(
                                            (link, linkIndex) => (
                                                <li
                                                    key={linkIndex}
                                                    className="my-2 fade-in"
                                                >
                                                    <Link
                                                        href={link.href}
                                                        className="uppercase tracking-[0.2em] hover:text-gray-300"
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
