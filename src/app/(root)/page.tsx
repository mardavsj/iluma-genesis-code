import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home(){
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-gray-900 relative">
            <div className="absolute inset-0 bg-[url('/bg_pattern.png')] bg-cover opacity-10 pointer-events-none"/>
            <div className="max-w-[1800px] mx-auto relative z-10">
                <Header/>

                <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-0.5">
                    <EditorPanel/>
                    <OutputPanel/>
                </div>
            </div>
        </div>
    )
}