"use client";

import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const PasswordStrengthChecker: React.FC = () => {
    const PASSWORD = "q3+TBb3,te_)";
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"Password Strength Checker"} hovered={hovered}>
                <div>
                    <span className="inline-grid items-center justify-center">
                        <span
                            className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-4xl font-black ${
                                hovered ? "opacity-0" : "opacity-100"
                            }`}
                            style={{
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                            }}
                        >
                            {PASSWORD}
                        </span>
                        <div
                            className={`flex flex-col gap-4 items-center justify-center relative col-start-1 row-start-1 text-center`}
                            style={{
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                            }}
                        >
                            <span
                                className={`text-center transition-all duration-[500] text-gray-700 text-base ${
                                    hovered
                                        ? "opacity-100 move-right-left"
                                        : "opacity-0"
                                }`}
                            >
                                A computer will take around
                            </span>
                            <div>
                                {"6 Years".split("").map((char, index) => (
                                    <span
                                        key={index}
                                        className={`relative col-start-1 row-start-1 text-center transition-all text-gray-700 font-black text-5xl ${
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
                                            animationDuration: `${
                                                100 + 200 * index
                                            }ms`,
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>
                            <span
                                className={`text-center transition-all duration-[500] text-gray-700 text-base ${
                                    hovered
                                        ? "opacity-100 move-left-right"
                                        : "opacity-0"
                                }`}
                            >
                                to crack your password
                            </span>
                        </div>
                    </span>
                </div>
            </Base>
        </div>
    );
};

export default PasswordStrengthChecker;
