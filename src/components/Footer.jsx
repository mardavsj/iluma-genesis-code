import { Blocks } from "lucide-react";
import Link from "next/link";

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

                    <div className="flex items-center justify-center text-center sm:gap-6 gap-2 sm:text-[15px] text-[14px]">
                    <Link href="/faq" className="text-gray-400 hover:text-gray-300 transition-colors">
                            FAQs
                        </Link>
                        <Link href="/about" className="text-gray-400 hover:text-gray-300 transition-colors">
                            About
                        </Link>
                        <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Terms
                        </Link>
                        <Link href="/contact" className="text-gray-400 hover:text-gray-300 transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;