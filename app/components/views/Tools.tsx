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
import EyeDropper from "../tools/EyeDropper";
import GradientGenerator from "../tools/GradientGenerator";
import PasswordGenerator from "../tools/PasswordGenerator";
import PasswordStrengthChecker from "../tools/PasswordStrengthChecker";
import QRGenerator from "../tools/QRGenerator";

const Tools: React.FC = () => {
    const TOOLS = [
        { id: "base64-decoder", component: <Base64Decoder /> },
        { id: "clicks-tracker", component: <ClicksTracker /> },
        { id: "clipboard", component: <Clipboard /> },
        { id: "color-converter", component: <ColorConverter /> },
        { id: "color-palette-generator", component: <ColorPaletteGenerator /> },
        { id: "epoch-converter", component: <EpochConverter /> },
        { id: "exact-time", component: <ExactTime /> },
        { id: "eye-dropper", component: <EyeDropper /> },
        { id: "gradient-generator", component: <GradientGenerator /> },
        { id: "hash-generator", component: <HashGenerator /> },
        { id: "javascript-obfuscator", component: <JavascriptObfuscator /> },
        { id: "json-formatter", component: <JsonFormatter /> },
        { id: "keypress-tracker", component: <KeypressTracker /> },
        { id: "page-word-counter", component: <PageWordCounter /> },
        { id: "password-generator", component: <PasswordGenerator /> },
        {
            id: "password-strength-checker",
            component: <PasswordStrengthChecker />,
        },
        { id: "qr-generator", component: <QRGenerator /> },
        { id: "text-manipulator", component: <TextManipulator /> },
        { id: "url-decoder", component: <URLDecoder /> },
    ];

    return (
        <div className="cards w-full flex items-center justify-center flex-wrap gap-16">
            {TOOLS.map((tool) => (
                <FadeInSection key={tool.id}>{tool.component}</FadeInSection>
            ))}
        </div>
    );
};

export default Tools;
