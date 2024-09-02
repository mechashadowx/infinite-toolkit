import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChrome, faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import Base64Decoder from "./components/tools/Base64Decoder";
import HashGenerator from "./components/tools/HashGenerator";
import JavascriptObfuscator from "./components/tools/JavascriptObfuscator";
import JsonFormatter from "./components/tools/JsonFormatter";
import TextManipulator from "./components/tools/TextManipulator";
import URLDecoder from "./components/tools/URLDecoder";

export default function Home() {
    return (
        <div
            id="home"
            className="max-w-[1080px] mt-8 sm:mt-16 flex flex-col space-y-16 items-center justify-center text-center"
        >
            <div className="text-6xl sm:text-8xl font-bold leading-tight">
                <span className="inline-grid">
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                        +20
                    </span>
                    <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                        +20
                    </span>
                </span>{" "}
                Technical Tools in{" "}
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
            <div className="flex flex-col items-center gap-8 w-full">
                <a
                    href="https://mechashadow.gumroad.com/l/InfiniteToolkit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-4 text-2xl font-light hover:font-bold rounded-xl transition-all duration-300 text-center transform hover:rotate-1 hover:scale-110"
                >
                    <FontAwesomeIcon
                        className="h-8 w-8"
                        icon={faAngleDoubleRight}
                        size="2x"
                    />{" "}
                    <span>
                        Get Premium License -{" "}
                        <span className="inline-grid font-black">
                            <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90 gradient-animation">
                                $4.99
                            </span>
                            <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text gradient-animation">
                                $4.99
                            </span>
                        </span>{" "}
                        Lifetime Access
                    </span>
                </a>
                <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="https://chromewebstore.google.com/detail/infinite-toolkit/iocbmkenbdeolfklibfpokdojgffnkdb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-4 border-2 border-gray-700 hover:bg-[#dbdce2] hover:text-gray-700 font-bold rounded-xl transition-all duration-300 text-center transform hover:scale-105"
                    >
                        <FontAwesomeIcon
                            className="h-6 w-6"
                            icon={faChrome}
                            size="2x"
                        />
                        Add to Chrome
                    </a>
                    <a
                        href="https://addons.mozilla.org/en-US/firefox/addon/infinite-toolkit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-4 border-2 border-gray-700 hover:bg-[#dbdce2] hover:text-gray-700 font-bold rounded-xl transition-all duration-300 text-center transform hover:scale-105"
                    >
                        <FontAwesomeIcon
                            className="h-6 w-6"
                            icon={faFirefoxBrowser}
                            size="2x"
                        />
                        Add to Firefox
                    </a>
                </div>
            </div>
            <div className="h-[1px] w-full bg-gray-700"></div>
            <div className="cards w-full flex items-center justify-center flex-wrap gap-16">
                <Base64Decoder />
                <HashGenerator />
                <JavascriptObfuscator />
                <JsonFormatter />
                <TextManipulator />
                <URLDecoder />
            </div>
            <div></div>
            <div></div>
        </div>
    );
}
