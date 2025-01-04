import NavigationHeader from "@/components/NavigationHeader";
import Link from "next/link";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Online Games - Star Code"
}

const GamesPage = () => {
    return (
        <div className="min-h-screen">
            <NavigationHeader />

            <main className="max-w-6xl mx-auto p-10 ">
                <h1 className="text-4xl font-bold text-white text-center mb-8">Our Games</h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">

                    <div className="bg-gray-800 rounded-lg">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-white">Tic Tac Toe</h2>
                            <p className="text-gray-400 mt-2">
                                Classic Tic Tac Toe game. Play and challenge yourself!
                            </p>
                            <Link
                                href="/games/tic-tac-toe"
                                className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                            >
                                Play Now
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg">
                        <div className="p-6 items-center justify-center">
                            <h2 className="text-2xl font-semibold text-white">Stack Game</h2>
                            <p className="text-gray-400 mt-2">
                                Test your precision by stacking blocks and challenging your skills!
                            </p>
                            <Link
                                href="/games/stack"
                                className="mt-4 mx-auto inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                            >
                                Play Now
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg">
                        <div className="p-6 items-center justify-center">
                            <h2 className="text-2xl font-semibold text-white">Game Name</h2>
                            <p className="text-gray-400 mt-2">
                                A short description about this game comes here.
                            </p>
                            <Link
                                href="/games/stack"
                                className="mt-4 mx-auto inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                            >
                                Play Now
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-lg">
                        <div className="p-6 items-center justify-center">
                            <h2 className="text-2xl font-semibold text-white">Game Name</h2>
                            <p className="text-gray-400 mt-2">
                                A short description about this game comes here.
                            </p>
                            <Link
                                href="/games/stack"
                                className="mt-4 mx-auto inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                            >
                                Play Now
                            </Link>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default GamesPage;
