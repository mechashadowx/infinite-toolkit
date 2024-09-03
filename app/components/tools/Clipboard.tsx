"use client";

import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const Clipboard: React.FC = () => {
    const HISTORY = [
        "www.example.com",
        "Example Alias",
        "K+p2_i#$K;wV",
        "#F0F0F0",
        "aac2c510-a677-44ea",
    ];

    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Clipboard"} hovered={hovered}>
                <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                    {HISTORY.map((h, index) => (
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
                            {h}
                        </span>
                    ))}
                </div>
            </Base>
        </div>
    );
};

export default Clipboard;
