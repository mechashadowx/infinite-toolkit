"use client";

import { useState } from "react";
import React from "react";

interface TextChangeProps {
    text: string;
    hoveredText: string;
    title: string;
}

const TextChange: React.FC<TextChangeProps> = ({
    text,
    hoveredText,
    title,
}) => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            id="base64decoder"
            className={`flex flex-col items-center justify-center gap-6 transition-all duration-200 transform ${
                hovered ? "scale-105 rotate-2" : "scale-100"
            }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="p-4 bg-dark-gradient flex items-center justify-center h-[400px] w-[300px] rounded-3xl shadow-2xl text-center">
                <span className="inline-grid text-lg items-center justify-center">
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 ${
                            hovered ? "opacity-0" : "opacity-100"
                        }`}
                        style={{
                            wordWrap: "break-word",
                            wordBreak: "break-word",
                        }}
                    >
                        {text}
                    </span>
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 ${
                            hovered ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            wordWrap: "break-word",
                            wordBreak: "break-word",
                        }}
                    >
                        {hoveredText}
                    </span>
                </span>
            </div>
            <h1
                className={`text-xl transition-all duration-200 transform ${
                    hovered ? "scale-105 font-bold" : "scale-100 font-light"
                }`}
            >
                {title}
            </h1>
        </div>
    );
};

export default TextChange;
