"use client";

import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const EpochConverter: React.FC = () => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Epoch Converter"} hovered={hovered}>
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
                        05 - 08 - 2024 20 : 35 : 09
                    </span>
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-gray-700 font-bold text-3xl ${
                            hovered ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                            wordWrap: "break-word",
                            wordBreak: "break-word",
                        }}
                    >
                        1722879309000
                    </span>
                </span>
            </Base>
        </div>
    );
};

export default EpochConverter;
