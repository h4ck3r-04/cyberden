import DynamicGrid from "@/components/dynamic-grid";

const Culture = () => {
    const values = [
        "Inclusivity & Diversity",
        "Continuous Growth",
        "Innovation & Creativity",
        "Community Empowerment",
    ];

    return (
        <div className="my-20 font-[family-name:var(--font-geist-sans)] text-gray-50/70 tracking-widest px-4 lg:px-6">
            <div className="grid gap-6 md:gap-4">
                <p className="w-2/3 md:w-full text-[10px] md:text-xs font-thin uppercase text-white">Discover Our Culture</p>
                <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#ededed]">Our Culture</h1>
                <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white row-span-3 lg:row-span-2">
                    At CyberDen, our culture is built on a foundation of trust, respect, and collaboration. We celebrate diversity and strive to create an environment where everyone feels empowered to innovate and thrive. Our commitment to inclusivity, creativity, and shared learning fosters a vibrant and supportive community.
                </p>
            </div>
            <DynamicGrid items={values} />
        </div>
    );
};

export default Culture;
