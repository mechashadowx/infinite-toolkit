import Header from "@/app/components/Header";
import ToolsSimulator from "@/app/components/ToolsSimulator";

export default function Home() {
    return (
        <div className="flex flex-col items-center min-h-screen w-screen">
            <Header />
            <ToolsSimulator />
        </div>
    );
}
