import EditorPanel from "./_components/EditorPanel";
import Header from "./_components/Header";
import OutputPanel from "./_components/OutputPanel";

export default function Home(){
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500">
            <div className="max-w-[1800px] mx-auto">
                <Header/>

                <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-0.5">
                    <EditorPanel/>
                    <OutputPanel/>
                </div>
            </div>
        </div>
    )
}