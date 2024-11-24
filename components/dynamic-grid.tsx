"use client";

import { useState } from "react";

interface DynamicGridProps {
    items: string[];
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <div>
            <div className="my-4 hidden lg:grid lg:grid-cols-8 gap-2 h-[400px]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-[#ededed] text-[#090909] flex items-center justify-center transition-all duration-300 ease-in-out ${hoveredIndex === index ? "col-span-5" : "col-span-1"
                            }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(0)}
                    >
                        {hoveredIndex === index ? (
                            <p className="text-center text-sm font-medium px-4">{item}</p>
                        ) : (
                            <p className="text-7xl text-opacity-40">{index + 1}</p>
                        )}
                    </div>
                ))}
            </div>
            <div className="my-4 lg:hidden grid grid-rows-8 gap-2 h-screen">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#ededed] text-[#090909] flex items-center justify-center row-span-2"
                    >
                        <p className="text-center text-sm font-medium px-4">{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicGrid;
