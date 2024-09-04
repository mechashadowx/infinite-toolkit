import Base64Decoder from "../tools/Base64Decoder";
import Clipboard from "../tools/Clipboard";
import ColorConverter from "../tools/ColorConverter";
import ColorPaletteGenerator from "../tools/ColorPaletteGenerator";
import EpochConverter from "../tools/EpochConverter";
import ExactTime from "../tools/ExactTime";
import HashGenerator from "../tools/HashGenerator";
import JavascriptObfuscator from "../tools/JavascriptObfuscator";
import JsonFormatter from "../tools/JsonFormatter";
import TextManipulator from "../tools/TextManipulator";
import URLDecoder from "../tools/URLDecoder";
import ClicksTracker from "../tools/ClicksTracker";
import KeypressTracker from "../tools/KeypressTracker";
import PageWordCounter from "../tools/PageWordCounter";
import React from "react";
import FadeInSection from "../motion/FadeInSection";

const Tools: React.FC = () => {
    const TOOLS = [
        <Base64Decoder />,
        <ClicksTracker />,
        <Clipboard />,
        <ColorConverter />,
        <ColorPaletteGenerator />,
        <EpochConverter />,
        <ExactTime />,
        <HashGenerator />,
        <JavascriptObfuscator />,
        <JsonFormatter />,
        <KeypressTracker />,
        <PageWordCounter />,
        <TextManipulator />,
        <URLDecoder />,
    ];

    return (
        <div className="cards w-full flex items-center justify-center flex-wrap gap-16">
            {TOOLS.map((tool: React.JSX.Element, index: number) => {
                return <FadeInSection key={index}>{tool}</FadeInSection>;
            })}
        </div>
    );
};

export default Tools;
