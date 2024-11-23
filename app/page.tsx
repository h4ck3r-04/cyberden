import Link from "next/link";
import navigation from "@/data/navigation";

export default function Home() {
  return (
    <div className="my-20 font-[family-name:var(--font-geist-sans)] text-gray-50/70 tracking-widest px-4 lg:px-6">
      <div className="grid grid-rows-12 gap-6 h-screen">
        <p className="w-2/3 md:w-full text-[10px] md:text-xs font-thin uppercase text-white">Engineered by Hackers, Tailored for Hackers</p>
        <div className="row-span-1 md:row-span-2">
          <h1 className="text-5xl md:text-8xl lg:text-9xl text-[#ededed]">CyberDen</h1>
        </div>
        <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white row-span-3 lg:row-span-2">We proudly engineer innovative tools and resources specifically tailored for hackers, crafted by experienced professionals who understand the unique challenges of the community, empowering you to enhance your skills and push the boundaries of what&apos;s possible in the world of hacking.</p>
        <div className="row-span-7 md:row-span-8 grid grid-cols-4 md:grid-cols-8 gap-2">
          {navigation
            .find((section) => section.title === "Company")
            ?.links.map((link, index: number) => {
              return (
                <Link key={index} href={link.href} className="col-span-2 bg-[#ededed] text-[#090909] px-2 py-3 flex flex-col justify-between">
                  <p>{link.title}</p>
                  <h1 className="text-right text-5xl md:text-7xl lg:text-9xl">0{index + 1}</h1>
                </Link>
              )
            })}
        </div>
      </div>
      <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white my-4">
        Explore step-by-step instructions, comprehensive guides, powerful tools, and resources to boost your productivity.
        Learn how to create custom solutions tailored to your needs and enhance your knowledge with educational content
        from our Academy.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 min-h-[600px] my-4 md:my-6 lg:my-8 gap-2 ">
        <div className="col-span-2 py-3 px-2">Resources</div>
        {navigation
          .find((section) => section.title === "Resources")
          ?.links.map((link, index: number) => {
            return (
              <Link key={index} href={link.href} className="col-span-2 bg-[#ededed] text-[#090909] px-2 py-3 flex flex-col justify-between">
                <p>{link.title}</p>
                <h1 className="text-right text-5xl md:text-7xl lg:text-9xl">0{index + 1}</h1>
              </Link>
            )
          })}
      </div>
      <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white">
        Engage with a vibrant community where you can share your knowledge, join meaningful discussions, and participate in exciting events.
        Discover opportunities to connect with like-minded individuals, contribute to impactful projects, and be part of initiatives that
        shape the future of our community.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 min-h-[400px] my-4 md:my-6 lg:my-8 gap-2 ">
        <div className="col-span-2 py-3 px-2">Community</div>
        {navigation
          .find((section) => section.title === "Community")
          ?.links.map((link, index: number) => {
            return (
              <Link key={index} href={link.href} className="col-span-2 bg-[#ededed] text-[#090909] px-2 py-3 flex flex-col justify-between">
                <p>{link.title}</p>
                <h1 className="text-right text-5xl md:text-7xl lg:text-9xl">0{index + 1}</h1>
              </Link>
            )
          })}
      </div>
      <p className="lg:py-4 w-3/4 md:w-2/3 lg:1/2 text-[10px] md:text-sm lg:text-md font-light uppercase text-white">
        Stay up-to-date with the latest happenings through our blog, where we share insights, articles, and updates from industry experts.
        Explore detailed release notes to keep track of our latest features and improvements, and stay informed with news, announcements,
        and events shaping our journey forward.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 min-h-[400px] my-4 md:my-6 lg:my-8 gap-2 ">
        <div className="col-span-1 py-3 px-2">News</div>
        {navigation
          .find((section) => section.title === "News")
          ?.links.map((link, index: number) => {
            return (
              <Link key={index} href={link.href} className="col-span-1 bg-[#ededed] text-[#090909] px-2 py-3 flex flex-col justify-between">
                <p>{link.title}</p>
                <h1 className="text-right text-5xl md:text-7xl lg:text-9xl">0{index + 1}</h1>
              </Link>
            )
          })}
      </div>
    </div>
  );
}
