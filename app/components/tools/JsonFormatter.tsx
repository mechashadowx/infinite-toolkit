import React from "react";
import TextChange from "../base/TextChange";

const JsonFormatter = () => {
    return (
        <TextChange
            text={`{"name": "Infinite Toolkit", "job": "The Best"}`}
            hoveredText={`{
                "name": "Infinite Toolkit",
                "job": "The Best"
            }`}
            title="Json Formatter"
        />
    );
};

export default JsonFormatter;
