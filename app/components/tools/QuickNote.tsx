"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const QuickNote: React.FC = () => {
    const NOTE = `Save This for later Infinite Toolkit`;
    const ICONS = [faCircle, faSquare, faStar];
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Quick Note"} hovered={hovered}>
                <div>
                    {NOTE.split("").map((char, index) => (
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
                                    icon={ICONS[index % ICONS.length]}
                                    size="2x"
                                />
                            </span>
                            <span
                                className={`relative col-start-1 row-start-1 text-center transition-all text-gray-700 font-black text-3xl ${
                                    hovered
                                        ? "opacity-100 " +
                                          (index % 2 == 0
                                              ? "move-left-right"
                                              : "move-right-left")
                                        : "opacity-0"
                                }`}
                                style={{
                                    wordWrap: "break-word",
                                    wordBreak: "break-word",
                                    animationDuration: `${200 + 50 * index}ms`,
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

export default QuickNote;
