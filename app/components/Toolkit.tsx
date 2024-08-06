"use client";

import React, { useEffect, useRef } from "react";

interface ToolkitProps {
    items: string[];
}

const Toolkit: React.FC<ToolkitProps> = ({ items }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAnimation = () => {
            if (container.scrollTop >= container.scrollHeight / 2) {
                container.scrollTop = 0;
            } else {
                container.scrollTop += 1;
            }
        };

        const intervalId = setInterval(scrollAnimation, 25);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="h-96 overflow-hidden" ref={containerRef}>
            <div className="animate-scroll">
                {items.concat(items).map((item, index) => (
                    <div
                        key={index}
                        className="p-4 bg-[#F0F0F0] text-[#FF4D40] text-3xl font-black text-center cursor-default hover:font-bold transition-all duration-300"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Toolkit;
