import React from "react";
import TextChange from "../base/TextChange";

const JavascriptObfuscator = () => {
    return (
        <TextChange
            text={`function main() {
                console.log("Hello World!");
            }`}
            hoveredText={`function LNpN6TRfXs() {
                console.log("SGVsbG8gV29ybGQh");
            }`}
            title="Javascript Obfuscator"
        />
    );
};

export default JavascriptObfuscator;
