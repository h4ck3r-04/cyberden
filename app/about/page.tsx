import DynamicGrid from "@/components/dynamic-grid";

const About = () => {
    const objectives = [
        "Empowering Hackers",
        "Fostering Innovation",
        "Ethical Cybersecurity",
        "Collaboration & Learning",
    ];

    return (
        <div className="my-20 font-[family-name:var(--font-geist-sans)] text-gray-50/70 tracking-widest px-4 lg:px-6">
            <div className="grid gap-6 md:gap-4">
                <p className="w-2/3 md:w-full text-[10px] md:text-xs font-thin uppercase text-white">Get to Know About Us</p>
                <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#ededed]">About Us</h1>
                <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white row-span-3 lg:row-span-2">At CyberDen, we unite the passion and skill of hackers worldwide to create a thriving community. Our mission is to foster innovation, empower individuals, and advance cybersecurity practices by equipping hackers with state-of-the-art tools and resources.</p>
            </div>
            <DynamicGrid items={objectives} />
        </div>
    );
};

export default About;
