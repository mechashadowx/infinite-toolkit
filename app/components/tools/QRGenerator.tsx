"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Base from "../base/Base";

const QRGenerator: React.FC = () => {
    const [hovered, setHovered] = useState<boolean>(false);

    return (
        <div
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Base title={"QR Generator"} hovered={hovered}>
                <span className="inline-grid text-lg items-center justify-center">
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-500 transform ${
                            hovered ? "opacity-0 scale-0" : "opacity-100"
                        }`}
                    >
                        https://mechashadowx.github.io/infinite-toolkit/
                    </span>
                    <span
                        className={`relative col-start-1 row-start-1 text-center transition-all duration-500 transform ${
                            hovered
                                ? "rotate-[360deg] text-gray-700 opacity-100"
                                : "opacity-0"
                        }`}
                    >
                        <FontAwesomeIcon
                            className="h-16 w-16"
                            icon={faQrcode}
                            size="2x"
                        />
                    </span>
                </span>
            </Base>
        </div>
    );
};

export default QRGenerator;
