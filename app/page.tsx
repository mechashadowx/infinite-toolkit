import ToolsMarquee from "./components/views/ToolsMarquee";
import Title from "./components/views/Title";
import Options from "./components/views/Options";
import Tools from "./components/views/Tools";
import Navbar from "./components/views/Navbar";

export default function Home() {
    return (
        <div
            id="home"
            className="mx-6 max-w-[1080px] mt-4 sm:mt-6 flex flex-col space-y-16 items-center justify-center text-center"
        >
            <Navbar />
            <Title />
            <Options />
            <div></div>
            <ToolsMarquee />
            <div></div>
            <Tools />
            <div></div>
            <div></div>
        </div>
    );
}
