"use client";

import { useState } from "react";
import React from "react";
import Base from "./Base";

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
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={title} hovered={hovered}>
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
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-gray-700 ${
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
            </Base>
        </div>
    );
};

export default TextChange;
