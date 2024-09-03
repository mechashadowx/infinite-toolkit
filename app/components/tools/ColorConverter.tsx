"use client";

import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const ColorConverter: React.FC = () => {
    const LIGHT_COLOR = [
        "#DBDCE2",
        "RGB(219, 220, 226)",
        "HSL(231, 11, 87)",
        "CMYK(3, 3, 0, 12)",
    ];
    const DARK_COLOR = [
        "#374151",
        "RGB(55, 65, 81)",
        "HSL(217, 19, 27)",
        "CMYK(32, 20, 0, 68)",
    ];

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Color Converter"} hovered={hovered}>
                <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                    {LIGHT_COLOR.map((_, index) => (
                        <span
                            key={index}
                            className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-lg ${
                                hovered
                                    ? "text-gray-700 " +
                                      (index % 2 == 0
                                          ? "move-left-right"
                                          : "move-right-left")
                                    : ""
                            }`}
                        >
                            {hovered ? LIGHT_COLOR[index] : DARK_COLOR[index]}
                        </span>
                    ))}
                </div>
            </Base>
        </div>
    );
};

export default ColorConverter;
