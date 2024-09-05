"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const PasswordGenerator: React.FC = () => {
    const PASSWORD = "q3+TBb3,te_)";
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Password Generator"} hovered={hovered}>
                <div>
                    {PASSWORD.split("").map((char, index) => (
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
                                    icon={faAsterisk}
                                    size="2x"
                                />
                            </span>
                            <span
                                className={`relative col-start-1 row-start-1 text-center transition-all duration-[] text-gray-700 font-black text-3xl ${
                                    hovered
                                        ? "opacity-100 " +
                                          (index % 2 == 0
                                              ? "move-up-down"
                                              : "move-down-up")
                                        : "opacity-0"
                                }`}
                                style={{
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                    animationDuration: `${200 + 100 * index}ms`,
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

export default PasswordGenerator;
