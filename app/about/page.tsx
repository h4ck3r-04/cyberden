"use client"

import { useState } from "react";
import Link from "next/link";
import navigation from "@/data/navigation";

const About = () => {
    const objectives = [
        "Empowering Hackers",
        "Fostering Innovation",
        "Ethical Cybersecurity",
        "Collaboration & Learning",
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <div className="my-20 font-[family-name:var(--font-geist-sans)] text-gray-50/70 tracking-widest px-4 lg:px-6">
            <div className="grid gap-6 md:gap-4">
                <p className="w-2/3 md:w-full text-[10px] md:text-xs font-thin uppercase text-white">Get to Know About Us</p>
                <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#ededed]">About Us</h1>
                <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white row-span-3 lg:row-span-2">At CyberDen, we unite the passion and skill of hackers worldwide to create a thriving community. Our mission is to foster innovation, empower individuals, and advance cybersecurity practices by equipping hackers with state-of-the-art tools and resources.</p>
            </div>
            <div className="my-4 hidden lg:grid lg:grid-cols-8 gap-2 h-[400px]">
                {objectives.map((objective, index) => (
                    <div
                        key={index}
                        className={`bg-[#ededed] text-[#090909] flex items-center justify-center transition-all duration-300 ease-in-out ${hoveredIndex === index ? "col-span-5 " : "col-span-1"
                            }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(0)}
                    >
                        {hoveredIndex === index ? (
                            <p className="text-center text-sm font-medium px-4">{objective}</p>
                        ) : (
                            <p className="text-7xl text-opacity-40">{index + 1}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="my-4 lg:hidden grid grid-rows-8 gap-2 h-screen">
                {objectives.map((objective, index) => (
                    <div
                        key={index}
                        className="bg-[#ededed] text-[#090909] flex items-center justify-center row-span-2"
                    >
                        <p className="text-center text-sm font-medium px-4">{objective}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
