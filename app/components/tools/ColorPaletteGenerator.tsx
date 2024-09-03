"use client";

import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const ColorPaletteGenerator: React.FC = () => {
    const COLORS = ["#B7FF00", "#00FFC8", "#4800FF", "#FF0037"];

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Color Palette Generator"} hovered={hovered}>
                <div
                    className={`h-auto w-auto grid grid-cols-2 grid-rows-2 justify-center items-center gap-6 transition-all duration-500 transform ${
                        hovered ? "rotate-[315deg]" : "rotate-0"
                    }`}
                >
                    {COLORS.map((color, index) => (
                        <div
                            key={index}
                            className="h-16 w-16 shadow-2xl rounded-full border border-gray-700 transition-all duration-200"
                            style={{
                                backgroundColor: hovered ? color : "#555555",
                            }}
                        ></div>
                    ))}
                </div>
            </Base>
        </div>
    );
};

export default ColorPaletteGenerator;
