import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faXTwitter,
    faChrome,
    faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
    return (
        <div
            id="navbar"
            className="flex gap-12 p-3 items-center justify-center"
        >
            <a
                href="https://chromewebstore.google.com/detail/infinite-toolkit/iocbmkenbdeolfklibfpokdojgffnkdb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center text-gray-500 hover:text-[#dbdce2] font-bold transition-all duration-300 text-center"
            >
                <FontAwesomeIcon
                    className="h-6 w-6"
                    icon={faChrome}
                    size="2x"
                />
            </a>
            <a
                href="https://addons.mozilla.org/en-US/firefox/addon/infinite-toolkit/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center text-gray-500 hover:text-[#dbdce2] font-bold transition-all duration-300 text-center"
            >
                <FontAwesomeIcon
                    className="h-6 w-6"
                    icon={faFirefoxBrowser}
                    size="2x"
                />
            </a>
            <a
                href="https://x.com/InfiniteToolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center text-gray-500 hover:text-[#dbdce2] font-bold transition-all duration-300 text-center"
            >
                <FontAwesomeIcon
                    className="h-6 w-6"
                    icon={faXTwitter}
                    size="2x"
                />
            </a>
            <a
                href="https://github.com/mechashadowx/infinite-toolkit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center text-gray-500 hover:text-[#dbdce2] font-bold transition-all duration-300 text-center"
            >
                <FontAwesomeIcon
                    className="h-6 w-6"
                    icon={faGithub}
                    size="2x"
                />
            </a>
        </div>
    );
}
