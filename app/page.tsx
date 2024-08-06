import Header from "@/app/components/Header";
import ToolsSimulator from "@/app/components/ToolsSimulator";

export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen w-screen">
            <Header />
            <ToolsSimulator />
            <div className="h-24"></div>
            <footer className="h-20 w-full bg-[#181818] flex items-center justify-center text-[#F0F0F0]">
                <a className="text-lg hover:font-bold transition-all duration-300" href="https://x.com/MechashadowX">
                    MechashadowX
                </a>
            </footer>
        </div>
    );
}
