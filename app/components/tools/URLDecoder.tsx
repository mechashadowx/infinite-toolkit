import React from "react";
import TextChange from "../base/TextChange";

const URLDecoder = () => {
    return (
        <TextChange
            text={`https://mechashadow.gumroad.com/l/InfiniteToolkit`}
            hoveredText={`https%3A%2F%2Fmechashadow.gumroad.com%2Fl%2FInfiniteToolkit`}
            title="URL Decoder"
        />
    );
};

export default URLDecoder;
