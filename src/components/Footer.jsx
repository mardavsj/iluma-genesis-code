import Link from "next/link"
import { Blocks, Gamepad2 } from "lucide-react";

function Footer() {
    return (
        <footer className="relative border-t bg-[#0a0a0f]/80 mt-auto">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-blue-600 via-blue-800 to-gray-900" />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Blocks className="lg:size-5 size-4" />
                        <span className="lg:text-[17px] text-[14px]">For the developers, by the developers!</span>
                    </div>

                    <Link href={"https://iluma-stack-game.vercel.app"} className="relative group flex items-center lg:gap-2 gap-1 px-3 py-2 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 shadow-lg overflow-hidden" target="_blank">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Gamepad2 className="lg:size-4 size-3.5 relative z-10 group-hover:rotate-3 transition-transform" />
                        <span className="lg:text-[15px] text-[13px] font-medium relative z-10 group-hover:text-white transition-colors">
                            Stack Game
                        </span>
                    </Link>                  
                </div>
            </div>
        </footer>
    );
}
export default Footer;