import React from "react";

const TOOLS = [
    "Base64 Decoder",
    "Clicks Tracker",
    "Clipboard",
    "Color Converter",
    "Color Palette Generator",
    "Epoch Converter",
    "Exact Time",
    "Eye Dropper",
    "Gradient Generator",
    "Hash Generator",
    "Javascript Obfuscator",
    "Json Formatter",
    "Keypress Tracker",
    "Page Word Counter",
    "Password Generator",
    "Password Strength Checker",
    "QR Generator",
    "Quick Note",
    "RegEx Tester",
    "Text Manipulator",
    "URL Decoder",
    "UUID Generator",
];

const ToolsMarquee: React.FC = () => {
    return (
        <div className="w-screen overflow-hidden">
            <div className="w-screen h-full flex items-center justify-around animate-marquee">
                {TOOLS.map((tool, index) => (
                    <span
                        key={index}
                        className="mx-8 text-2xl whitespace-nowrap font-bold"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ToolsMarquee;
