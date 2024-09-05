"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, fa1 } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const UUIDGenerator: React.FC = () => {
    const UUID = "132627c1-5823-437c-b506-721ab8215aae";
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"UUID Generator"} hovered={hovered}>
                <div>
                    {UUID.split("").map((char, index) => (
                        <span
                            key={index}
                            className="inline-grid text-lg items-center justify-center"
                        >
                            <span
                                className={`relative col-start-1 row-start-1 text-center transition-all duration-200 ${
                                    hovered ? "opacity-0" : "opacity-100"
                                }`}
                                style={{
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                }}
                            >
                                <FontAwesomeIcon
                                    className="h-4 w-4"
                                    icon={
                                        Math.floor(Math.random() * 2) == 0
                                            ? fa0
                                            : fa1
                                    }
                                    size="2x"
                                />
                            </span>
                            <span
                                className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-gray-700 font-black text-3xl ${
                                    hovered ? "opacity-100" : "opacity-0"
                                }`}
                                style={{
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                    animationDuration: `200ms`,
                                    transitionDelay: hovered
                                        ? `${200 + 50 * index}ms`
                                        : "0ms",
                                }}
                            >
                                {char}
                            </span>
                        </span>
                    ))}
                </div>
            </Base>
        </div>
    );
};

export default UUIDGenerator;
