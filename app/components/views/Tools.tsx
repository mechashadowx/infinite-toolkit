import Base64Decoder from "../tools/Base64Decoder";
import HashGenerator from "../tools/HashGenerator";
import JavascriptObfuscator from "../tools/JavascriptObfuscator";
import JsonFormatter from "../tools/JsonFormatter";
import TextManipulator from "../tools/TextManipulator";
import URLDecoder from "../tools/URLDecoder";
import ClicksTracker from "../tools/ClicksTracker";
import KeypressTracker from "../tools/KeypressTracker";
import PageWordCounter from "../tools/PageWordCounter";
import React from "react";

const Tools: React.FC = () => {
    return (
        <div className="cards w-full flex items-center justify-center flex-wrap gap-16">
            <Base64Decoder />
            <ClicksTracker />
            <HashGenerator />
            <JavascriptObfuscator />
            <JsonFormatter />
            <KeypressTracker />
            <PageWordCounter />
            <TextManipulator />
            <URLDecoder />
        </div>
    );
};

export default Tools;
