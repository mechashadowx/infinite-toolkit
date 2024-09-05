"use client";

import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const GradientGenerator: React.FC = () => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Gradient Generator"} hovered={hovered}>
                <div
                    className={`h-24 w-24 shadow-2xl rounded-full border border-gray-700 transition-all duration-200 ${
                        hovered
                            ? "gradient-generator-on"
                            : "gradient-generator-off"
                    }`}
                ></div>
            </Base>
        </div>
    );
};

export default GradientGenerator;
