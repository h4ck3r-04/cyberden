"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import navigation from "@/data/navigation";

const Header = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>("Company");
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    const toggleMenu = (): void => {
        setOpen((prev) => !prev);
    };

    const closeMenu = (): void => {
        setOpen(false);
    };

    const handleClickOutside = (event: MouseEvent): void => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node) &&
            !headerRef.current?.contains(event.target as Node)
        ) {
            closeMenu();
        }
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
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
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Header */}
            <div
                ref={headerRef}
                className="w-full bg-black bg-opacity-95 bg-blur-lg shadow-lg backdrop-blur-lg"
            >
                <div className="w-full px-4 py-2 flex justify-end items-center">
                    <button
                        className="relative z-50 text-xs text-gray-50/70 flex items-center gap-2 p-2 "
                        onClick={toggleMenu}
                        aria-expanded={open}
                    >
                        {open ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-50"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6 text-gray-50"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div
                ref={dropdownRef}
                className={`absolute top-full left-0 right-0 bg-black bg-blur-lg bg-opacity-95 backdrop-blur-lg transform transition-all duration-300 ease-in-out shadow-xl ${open
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-4 pointer-events-none'
                    }`}
            >
                <div className="px-8 py-6 max-h-[80vh] overflow-y-auto">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex min-h-[250px] gap-6">
                        <div className="w-1/5">
                            <ul className="font-thin text-sm list-none">
                                {navigation.map((section) => (
                                    <li
                                        key={section.title}
                                        className={`my-2 uppercase tracking-[0.2em] cursor-pointer transition-colors hover:text-gray-300 ${activeSection === section.title
                                            ? "text-gray-300"
                                            : "text-gray-50/70"
                                            }`}
                                        onClick={() => setActiveSection(section.title)}
                                    >
                                        {section.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-4/5">
                            {navigation
                                .find((section) => section.title === activeSection)
                                ?.links.map((link, index: number) => (
                                    <li
                                        key={index}
                                        className="my-4 list-none"
                                    >
                                        <Link
                                            href={link.href}
                                            className="block transition-colors hover:text-gray-300"
                                            onClick={closeMenu}
                                        >
                                            <p className="uppercase tracking-[0.2em] text-gray-50">
                                                {link.title}
                                            </p>
                                            {link.description && (
                                                <p className="text-gray-50/70 text-xs mt-1 tracking-widest">
                                                    {link.description}
                                                </p>
                                            )}
                                        </Link>
                                    </li>
                                ))}
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="grid md:hidden grid-cols-2 gap-6">
                        {navigation.map((section, index: number) => (
                            <div key={index} className="mb-4">
                                <h1 className="text-[10px] text-gray-50/70 font-thin mb-4 uppercase tracking-[0.4em]">
                                    {section.title}
                                </h1>
                                <ul className="font-thin text-sm list-none">
                                    {section.links.map((link, linkIndex: number) => (
                                        <li
                                            key={linkIndex}
                                            className="my-3"
                                        >
                                            <Link
                                                href={link.href}
                                                className="block uppercase tracking-[0.2em] text-gray-50 hover:text-gray-300 transition-colors"
                                                onClick={closeMenu}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;