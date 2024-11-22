import Link from "next/link";
import navigation from "@/data/navigation";
import { GithubIcon, XIcon } from "./icons";

const FooterSection = ({ title, links }: { title: string; links: { title: string, href: string }[] }) => (
    <div className="mb-8 md:mb-6 lg:mb-2">
        <h1 className="text-[10px] text-gray-50/70 font-thin mb-4 uppercase tracking-[0.4em]">
            {title}
        </h1>
        <ul className="font-thin text-sm list-none">
            {links.map((link, index) => (
                <li key={index} className="my-2">
                    <Link
                        href={link.href}
                        className="uppercase tracking-[0.2em] hover:text-gray-300"
                    >
                        {link.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="flex flex-col px-8 py-16 w-full">
            <div className="grid min-h-[300px] grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
                <div className="mb-8 md:mb-6 lg:mb-2 col-span-2">
                    <h1 className="text-lg text-gray-50/70 font-thin mb-4 uppercase tracking-[0.4em]">
                        CyberDen
                    </h1>
                    <ul className="flex flex-row text-gray-50/70 space-x-2">
                        <li><GithubIcon /></li>
                        <li><XIcon /></li>
                    </ul>
                </div>
                {navigation.map((section, index) => (
                    <FooterSection key={index} title={section.title} links={section.links} />
                ))}
            </div>
            <div className="text-center text-sm text-gray-50/70 tracking-wide">
                Built for Hackers, by <a href="https://github.com/h4ck3r-04" className="underline">h4ck3r-04</a>.
            </div>
        </footer>
    );
};

export default Footer;
