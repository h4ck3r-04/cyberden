"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import DynamicGrid from "@/components/dynamic-grid";

const MasterPlan = () => {
    const planItems = [
        "Innovating for the Future",
        "Global Community Building",
        "Revolutionizing Cybersecurity",
        "Driving Technological Excellence",
    ];

    const masterPlanSections = [
        {
            id: "1",
            title: "Shaping the Future of Cybersecurity Education",
            content:
                "CyberDen envisions a future where cybersecurity education is both comprehensive and accessible to anyone, anywhere. Our platform will provide a wide range of learning materials, from beginner to advanced levels, focusing on real-world cybersecurity challenges. By incorporating interactive labs, real-time scenarios, and gamified learning, we aim to immerse users in practical experiences that mirror the complexities of the cybersecurity landscape. Our mission is to equip users with the skills necessary to tackle emerging cyber threats while staying ahead of the constantly evolving security challenges. From ethical hacking to advanced incident response strategies, CyberDen will be the go-to platform for hands-on cybersecurity education.",
        },
        {
            id: "2",
            title: "Empowering Users with Open-Source Cybersecurity Tools",
            content:
                "CyberDen is committed to providing users with access to cutting-edge open-source cybersecurity tools to enhance their practical skills. By offering a curated repository of trusted tools, users can experiment, analyze, and test these tools in realistic environments. Whether it’s penetration testing, vulnerability scanning, or digital forensics, CyberDen will provide tools for every aspect of cybersecurity. We will not only supply these tools but also teach users how to leverage them effectively, from setting up security environments to conducting audits and responding to incidents. The platform will also encourage contributions to the open-source community by enabling users to share and improve tools that help secure digital infrastructures. Through CyberDen, users will gain firsthand experience with the tools that professionals use in the field.",
        },
        {
            id: "3",
            title: "Interactive Labs and Real-World Simulations",
            content:
                "To truly learn cybersecurity, theory must be paired with hands-on experience. CyberDen’s platform will feature interactive labs and real-world simulations that will provide users with a safe, controlled environment to practice their skills. These simulations will cover a wide range of topics such as network penetration, incident response, malware analysis, and cryptography. Users can engage in simulated cyberattacks and defenses, allowing them to learn how to react to and mitigate real-time threats. With a focus on practical experience, CyberDen will provide a unique platform for users to practice and refine their cybersecurity skills without the risk of compromising real-world systems. These labs will be constantly updated to reflect the latest vulnerabilities and attack techniques.",
        },
        {
            id: "4",
            title: "Building a Collaborative Cybersecurity Community",
            content:
                "CyberDen will not only focus on individual learning but also on fostering collaboration within the cybersecurity community. By creating forums, discussion boards, and collaborative projects, we aim to bring together security enthusiasts, professionals, and learners from around the globe. This will create a dynamic learning environment where users can share knowledge, discuss the latest security trends, and collaborate on real-world cybersecurity projects. Our platform will feature mentorship opportunities, allowing seasoned professionals to guide newcomers. Additionally, CyberDen will offer competitive environments where users can participate in Capture The Flag (CTF) challenges, bug bounty programs, and other cybersecurity contests, promoting a spirit of teamwork and community development.",
        },
        {
            id: "5",
            title: "Mastering Ethical Hacking and Penetration Testing",
            content:
                "Ethical hacking is one of the most sought-after skills in the cybersecurity industry. CyberDen’s Master Plan includes a comprehensive curriculum focused on ethical hacking and penetration testing, providing users with in-depth training on how to ethically test and secure systems. The curriculum will cover everything from network hacking, web application security, and vulnerability assessment, to advanced exploitation techniques and post-exploitation tactics. Users will gain access to exclusive virtual machines, networks, and environments to practice penetration testing in a controlled and legal manner. Through step-by-step guides, challenges, and real-world scenarios, CyberDen will enable users to develop and hone their penetration testing skills, turning them into cybersecurity experts ready to face the toughest security challenges.",
        },
        {
            id: "6",
            title: "Threat Intelligence and Incident Response Training",
            content:
                "As cyber threats grow in sophistication and scale, understanding threat intelligence and developing effective incident response strategies are essential skills. CyberDen’s platform will offer users specialized training in these areas, helping them identify emerging threats, track cybercriminal activities, and understand attack vectors. Users will be trained to analyze cyber incidents, mitigate risks, and create response plans that align with industry best practices. By simulating real-world attacks and using threat intelligence data feeds, learners will gain the expertise needed to lead incident response efforts and handle crisis situations effectively. CyberDen will equip its users to make informed decisions in high-pressure scenarios and defend against advanced persistent threats (APTs).",
        },
        {
            id: "7",
            title: "Developing a Secure DevOps and Cloud Security Framework",
            content:
                "With the rise of cloud computing and DevOps, securing modern infrastructures has become a critical challenge. CyberDen will focus on educating users about securing cloud environments, DevOps pipelines, and infrastructure as code (IaC) frameworks. The platform will provide in-depth training on securing cloud platforms such as AWS, Azure, and Google Cloud, including network configurations, encryption, identity management, and access control. Additionally, CyberDen will teach secure DevOps practices, such as automated security testing, continuous integration/continuous deployment (CI/CD) security, and container security. Through these specialized tracks, users will learn how to integrate security into every stage of the software development lifecycle, ensuring that security is built into the very fabric of modern systems.",
        },
        {
            id: "8",
            title: "AI and Machine Learning for Cybersecurity Defense",
            content:
                "CyberDen is at the forefront of integrating artificial intelligence and machine learning into cybersecurity defense strategies. As cyber threats become more complex, AI and ML technologies will play a crucial role in identifying patterns, detecting anomalies, and automating responses to security incidents. Our platform will offer training on using AI and ML algorithms to detect malicious activities, predict potential attacks, and enhance threat intelligence capabilities. Users will learn how to integrate AI-driven tools into their cybersecurity defense systems, improving their ability to protect against emerging threats. With hands-on labs and real-world use cases, CyberDen will provide a comprehensive education on how AI is transforming the cybersecurity landscape.",
        },
        {
            id: "9",
            title: "Privacy and Data Protection in the Digital Age",
            content:
                "As data privacy concerns grow, understanding the principles and practices surrounding data protection has become increasingly important. CyberDen will provide users with a thorough understanding of privacy laws, such as GDPR and CCPA, as well as best practices for protecting personal and sensitive data. We will teach users about encryption, secure data storage, and data breach prevention methods, all while emphasizing the ethical responsibility of cybersecurity professionals. Users will engage with practical scenarios where they’ll need to secure data, ensure privacy, and comply with regulations. CyberDen’s privacy and data protection training will empower users to protect their organizations and personal information in a rapidly evolving digital world.",
        },
        {
            id: "10",
            title: "Building a Global Cybersecurity Workforce",
            content:
                "CyberDen’s long-term vision includes not only educating individuals but also contributing to building a global cybersecurity workforce. As the demand for cybersecurity professionals continues to grow, CyberDen aims to bridge the gap between education and employment by partnering with organizations to provide job placement, internships, and real-world project opportunities. Our platform will include a career development track, helping users build portfolios, prepare for certifications, and connect with potential employers. By providing these opportunities, CyberDen will contribute to the global effort to combat cybercrime and strengthen digital security across industries, empowering users to launch successful careers in the cybersecurity field.",
        },
    ];

    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            masterPlanSections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= 100 && bottom >= 100) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="my-20 font-[family-name:var(--font-geist-sans)] text-gray-50/70 tracking-widest px-4 lg:px-6">
                <div className="grid gap-6 md:gap-4">
                    <p className="w-2/3 md:w-full text-[10px] md:text-xs font-thin uppercase text-white">
                        Explore Our Vision
                    </p>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#ededed]">Master Plan</h1>
                    <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white row-span-3 lg:row-span-2">
                        At CyberDen, our master plan is centered on shaping a secure, innovative, and interconnected world. We envision a future where technology empowers individuals, fosters collaboration, and enhances global security through cutting-edge advancements and robust communities.
                    </p>
                </div>
                <DynamicGrid items={planItems} />
            </div>
            <div className="container px-4 lg:px-8 py-8 w-full">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-3/4 pr-8">
                        {masterPlanSections.map((section) => (
                            <div key={section.id} id={section.id} className="mb-8 tracking-wider">
                                <h2 className="text-md font-light mb-1 uppercase text-[#ededed]">{section.title}</h2>
                                <p className="text-xs font-thin text-gray-50/70">{section.content}</p>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/4 hidden lg:block">
                        <div className="sticky top-8 w-full">
                            <ul className="space-y-2 w-full">
                                {masterPlanSections.map((section) => (
                                    <li key={section.id} className="mb-2 w-full">
                                        <Link
                                            href={`#${section.id}`}
                                            onClick={(e) => scrollToSection(e, section.id)}
                                            className={`text-xs font-light py-2 block w-full uppercase tracking-wider ${activeSection === section.id
                                                ? "text-[#ededed] border-b-[1px]"
                                                : "text-gray-100/70 border-b border-gray-300"
                                                }`}
                                        >
                                            {section.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MasterPlan;