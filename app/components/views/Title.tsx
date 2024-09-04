import React from "react";

const Title: React.FC = () => {
    return (
        <div className="text-6xl sm:text-8xl font-black leading-tight">
            <span className="inline-grid">
                <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                    +20
                </span>
                <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                    +20
                </span>
            </span>{" "}
            Tools in{" "}
            <span className="inline-grid">
                <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                    One
                </span>
                <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                    One
                </span>
            </span>{" "}
            Extension.
        </div>
    );
};

export default Title;
