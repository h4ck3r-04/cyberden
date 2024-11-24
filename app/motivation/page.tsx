import DynamicGrid from "@/components/dynamic-grid";

const Motivation = () => {
    const motivations = [
        "Driving Positive Change",
        "Inspiring Innovation",
        "Building Resilience",
        "Shaping the Future",
    ];

    return (
        <div className="my-20 font-[family-name:var(--font-geist-sans)] text-gray-50/70 tracking-widest px-4 lg:px-6">
            <div className="grid gap-6 md:gap-4">
                <p className="w-2/3 md:w-full text-[10px] md:text-xs font-thin uppercase text-white">Discover Our Motivation</p>
                <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#ededed]">Motivation</h1>
                <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white row-span-3 lg:row-span-2">
                    At CyberDen, we are driven by a purpose to inspire individuals and organizations to excel in their pursuits. Our mission is rooted in fostering a culture of resilience, creativity, and forward-thinking to tackle the challenges of tomorrow.
                </p>
            </div>
            <DynamicGrid items={motivations} />
        </div>
    );
};

export default Motivation;
