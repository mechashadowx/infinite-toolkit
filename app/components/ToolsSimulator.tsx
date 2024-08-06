"use client";

import Image from "next/image";
import { useState } from "react";

export default function ToolsSimulator() {
    const tools = [
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

    const images: { [key: string]: JSX.Element } = tools.reduce((acc, tool) => {
        acc[tool] = (
            <Image
                key={tool}
                src={`/infinite-toolkit/tools/${tool}.png`}
                alt={`${tool} image`}
                width={1000}
                height={1000}
                priority
            />
        );
        return acc;
    }, {} as { [key: string]: JSX.Element });

    const [selectedTool, setSelectedTool] = useState("Base64 Decoder");

    return (
        <>
            <div className="w-full overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 p-4">
                    {tools.map((tool, index) =>
                        tool === selectedTool ? (
                            <div
                                key={index}
                                className="min-w-max px-4 py-2 bg-gradient-to-r from-[#D92A1C] to-[#FF4D40] text-[#F0F0F0] font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
                                onClick={() => setSelectedTool(tool)}
                            >
                                <a href={`#${tool}`}>{tool}</a>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="min-w-max px-4 py-2 bg-gradient-to-r from-[#181818] to-[#484848] text-[#F0F0F0] font-bold rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
                                onClick={() => setSelectedTool(tool)}
                            >
                                <a href={`#${tool}`}>{tool}</a>
                            </div>
                        )
                    )}
                </div>
            </div>
            {images[selectedTool]}
            <div className="h-96"></div>
        </>
    );
}
