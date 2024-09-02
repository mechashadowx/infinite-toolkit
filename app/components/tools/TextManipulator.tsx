import React from "react";
import TextChange from "../base/TextChange";

const TextManipulator = () => {
    return (
        <TextChange
            text="change this to uppercase"
            hoveredText="CHANGE THIS TO UPPERCASE"
            title="Text Manipulator"
        />
    );
};

export default TextManipulator;
