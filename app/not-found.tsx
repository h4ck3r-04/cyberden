import Link from "next/link";
import { ArrowMoveUpRightIcon } from "@/components/icons";

const NotFound = () => {
    return (
        <div className="h-screen flex w-full items-center justify-center px-8 text-gray-50/70">
            <div className="w-full grid h-[150px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-2">
                <div className="col-span-1 md:col-span-2 flex flex-col text-center md:text-right md:px-4 lg:px-8 md:border-r-[0.2px]">
                    <h1 className="text-8xl md:text-9xl">404</h1>
                    <p className="uppercase tracking-[0.2em] font-thin">not found</p>
                </div>
                <Link
                    href="/"
                    className="col-span-1 md:col-span-2 flex flex-col justify-center uppercase text-lg md:text-4xl tracking-widest font-thin text-center md:text-left"
                >
                    <h1 className="flex flex-row items-center justify-center md:justify-start">
                        Home
                        <span>
                            <ArrowMoveUpRightIcon />
                        </span>
                    </h1>
                    <p className="text-[9px]">Oops! Looks like you&apos;re lost.</p>
                </Link>
            </div>
        </div>
    )
}

export default NotFound;