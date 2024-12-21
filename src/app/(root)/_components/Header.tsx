import { currentUser } from "@clerk/nextjs/server"
import { ConvexHttpClient } from "convex/browser"
import { api } from "../../../../convex/_generated/api"
import Link from "next/link"
import { Blocks, Code2 } from "lucide-react"
import ThemeSelector from "./ThemeSelector"
import LanguageSelector from "./LanguageSelector"
import RunButton from "./RunButton"
import HeaderProfileBtn from "./HeaderProfileBtn"

async function Header() {

    const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
    const user = await currentUser()

    const convexUser = await convex.query(api.users.getUser, {
        userId: user?.id || ""
    })

    console.log({convexUser})

  return (
      <div className="relative z-10">
          <div className="flex items-center md:justify-between justify-center p-6 mb-0.5 bg-[#0a0a0f]/95">
            <div className="hidden md:flex items-center lg:gap-8 gap-4">
                <Link href="/" className="flex items-center lg:gap-3 gap-1.5 group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"/>

                    <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] p-2 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20 transition-all">
                        <Blocks className="lg:size-6 size-5 text-blue-400 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                    </div>

                    <div className="flex flex-col">
                        <span className="block lg:text-[20px] font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                            Genesis Code
                        </span>
                        <span className="block text-xs text-blue-400/60 font-medium">
                            Interactive Code Editor
                        </span>
                    </div>
                </Link>

                <nav className="flex items-center space-x-1">
                    <Link href="/snippets" className="relative group flex items-center lg:gap-2 gap-1 px-3 py-2 rounded-lg text-gray-300 bg-gray-800/50 hover:bg-blue-500/10 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg overflow-hidden">

                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"/>

                        <Code2 className="size-4 relative z-10 group-hover:rotate-3 transition-transform" />

                        <span className="text-sm font-medium relative z-10 group-hover:text-white transition-colors">
                            Snippets
                        </span>
                    </Link>
                </nav>

            </div>

            <div className="flex items-center lg:gap-4 gap-1.5">
                <div className="flex items-center lg:gap-3 gap-1.5">
                    <ThemeSelector/>
                    <LanguageSelector/>
                </div>

                    <RunButton/>

                <div className=" pl-3 border-l border-gray-800">
                    <HeaderProfileBtn/>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header