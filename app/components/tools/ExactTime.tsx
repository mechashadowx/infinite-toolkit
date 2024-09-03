"use client";

import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const ExactTime: React.FC = () => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title="Exact Time" hovered={hovered}>
                <div className="h-full w-full flex flex-col items-center justify-center gap-3">
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-6xl font-bold ${
                            hovered ? "text-gray-700 move-up-down" : ""
                        }`}
                    >
                        05:43:07
                    </span>
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-gray-700 ${
                            hovered ? "move-down-up" : ""
                        }`}
                    >
                        06-08-2024
                    </span>
                </div>
            </Base>
        </div>
    );
};

export default ExactTime;
