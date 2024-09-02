import React from "react";

interface BaseProps {
    title: string;
    hovered: boolean;
    children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ title, hovered, children }) => {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-6 transition-all duration-500 transform ${
                hovered ? "scale-105 -translate-y-10" : "scale-100"
            }`}
        >
            <div
                className={`p-4 flex items-center justify-center h-[400px] w-[300px] rounded-3xl shadow-2xl text-center transition-all duration-500 border border-gray-700 ${
                    hovered ? "bg-[#dbdce2]" : "bg-[#181c25]"
                }`}
            >
                {children}
            </div>
            <h1
                className={`text-xl transition-all duration-200 transform ${
                    hovered ? "scale-105 font-bold" : "scale-100 font-light"
                }`}
            >
                {title}
            </h1>
        </div>
    );
};

export default Base;
