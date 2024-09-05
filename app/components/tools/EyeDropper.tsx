"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeDropper } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const EyeDropper: React.FC = () => {
    const COLORS = [
        {
            hex: "#B7FF00",
        },
        {
            hex: "#00FFC8",
        },
        {
            hex: "#4800FF",
        },
        {
            hex: "#FF0037",
        },
    ];

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Eye Dropper"} hovered={hovered}>
                <span className="inline-grid text-lg items-center justify-center">
                    <div
                        className={`relative col-start-1 row-start-1 h-auto w-auto grid grid-cols-2 grid-rows-2 justify-center items-center gap-12 transition-all duration-500 transform ${
                            hovered ? "rotate-[315deg]" : "rotate-0"
                        }`}
                    >
                        {COLORS.map((color) => (
                            <div
                                key={color.hex}
                                className={`w-8 h-8 rounded-full shadow-xl border border-gray-700 transition-all duration-500 transform ${
                                    hovered ? "opacity-100" : "opacity-0"
                                }`}
                                style={{
                                    backgroundColor: color.hex,
                                }}
                            ></div>
                        ))}
                    </div>
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-500 transform ${
                            hovered ? "rotate-[360deg] text-gray-700" : ""
                        }`}
                    >
                        <FontAwesomeIcon
                            className="h-12 w-12"
                            icon={faEyeDropper}
                            size="2x"
                        />
                    </span>
                </span>
            </Base>
        </div>
    );
};

export default EyeDropper;
