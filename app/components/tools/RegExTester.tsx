"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const RegExTester: React.FC = () => {
    const REGEX = "^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$";
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"RegEx Tester"} hovered={hovered}>
                <div>
                    <span className="inline-grid items-center justify-center">
                        <span
                            className={`relative col-start-1 row-start-1 text-center transition-all duration-200 text-2xl ${
                                hovered ? "opacity-0" : "opacity-100"
                            }`}
                            style={{
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                            }}
                        >
                            {REGEX}
                        </span>
                        <div
                            className={`flex flex-col gap-4 items-center justify-center relative col-start-1 row-start-1 text-center`}
                            style={{
                                wordWrap: "break-word",
                                wordBreak: "break-word",
                            }}
                        >
                            <span
                                className={`text-center transition-all duration-[500] text-gray-700 font-bold text-4xl ${
                                    hovered
                                        ? "opacity-100 move-up-down"
                                        : "opacity-0"
                                }`}
                            >
                                #INFINITE
                            </span>
                            <span
                                className={`text-center transition-all transform duration-[500] text-gray-700 ${
                                    hovered
                                        ? "opacity-100 move-down-up"
                                        : "opacity-0"
                                }`}
                            >
                                <FontAwesomeIcon
                                    className="h-2 w-2 scale-[4]"
                                    icon={faCircleCheck}
                                    size="2x"
                                />
                            </span>
                        </div>
                    </span>
                </div>
            </Base>
        </div>
    );
};

export default RegExTester;
