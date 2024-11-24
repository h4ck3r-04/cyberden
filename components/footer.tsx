import Link from "next/link";
import navigation from "@/data/navigation";
import { GithubIcon, LinkedInIcon, XIcon, DiscordIcon } from "./icons";

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
                        className="tracking-widest hover:text-gray-300"
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
                    <h1 className="text-lg text-gray-50/70 font-thin mb-1 uppercase tracking-[0.4em]">
                        CyberDen
                    </h1>
                    <p className="uppercase tracking-widest mb-2 text-[10px] text-gray-50/70">Subscribe to our Newsletter.</p>
                    <form className="grid grid-cols-4 mb-2 border-[0.2px] rounded-md text-xs h-[40px] tracking-wide md:tracking-widest">
                        <input type="text" name="email" placeholder="Email" className="col-span-3 bg-transparent px-2 outline-none"></input>
                        <button type="submit" className="col-span-1 bg-white text-black">Subscribe</button>
                    </form>
                    <ul className="flex flex-row text-gray-50/70 space-x-2">
                        <li><GithubIcon /></li>
                        <li><XIcon /></li>
                        <li><DiscordIcon /></li>
                        <li><LinkedInIcon /></li>
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
