import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";

function LoginButton() {
    return (
        <SignInButton mode="modal">
            <button
                className="flex top-0 items-center justify-center lg:gap-2 gap-1 lg:px-4 px-2.5 lg:py-2.5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl
             transition-all duration-200 font-medium shadow-lg shadow-blue-500/20"
            >
                <LogIn className="size-4 hidden md:block transition-transform" />
                <span className="lg:text-[15px] text-[13px]">Sign In</span>
            </button>
        </SignInButton>
    );
}
export default LoginButton;