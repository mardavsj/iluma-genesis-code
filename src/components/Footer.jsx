import { Blocks } from "lucide-react";
import Link from "next/link";

function Footer() {
    return (
        <footer className="relative border-t bg-[#0a0a0f]/80 mt-auto">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-blue-500 via-blue-800 to-gray-900" />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Blocks className="size-5" />
                        <span>For the developers, by the developers!</span>
                    </div>
                    <div className="flex items-center gap-6">
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