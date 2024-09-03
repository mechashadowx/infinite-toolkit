import ToolsMarquee from "./components/views/ToolsMarquee";
import Title from "./components/views/Title";
import Options from "./components/views/Options";
import Tools from "./components/views/Tools";

export default function Home() {
    return (
        <div
            id="home"
            className="mx-6 max-w-[1080px] mt-8 sm:mt-16 flex flex-col space-y-16 items-center justify-center text-center"
        >
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
