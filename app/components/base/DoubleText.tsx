"use client";

import { useState } from "react";
import React from "react";
import Base from "./Base";

interface DoubleTextProps {
    mainText: string;
    secondaryText: string;
    title: string;
}

const DoubleText: React.FC<DoubleTextProps> = ({
    mainText: mainText,
    secondaryText: secondaryText,
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
                <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-5xl font-black ${
                            hovered ? "text-gray-700 move-up-down" : ""
                        }`}
                    >
                        {mainText}
                    </span>
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-gray-700 ${
                            hovered ? "move-down-up" : ""
                        }`}
                    >
                        {secondaryText}
                    </span>
                </div>
            </Base>
        </div>
    );
};

export default DoubleText;
