import Toolkit from "./Toolkit";

export default function Header() {
    const tools = [
        "Base64 Decoder",
        "Clicks Tracker",
        "Clipboard",
        "Color Converter",
        "Color Palette Generator",
        "Epoch Converter",
        "Exact Time",
        "Eye Dropper",
        "Gradient Generator",
        "Hash Generator",
        "Javascript Obfuscator",
        "Json Formatter",
        "Keypress Tracker",
        "Page Word Counter",
        "Password Generator",
        "Password Strength Checker",
        "QR Generator",
        "Quick Note",
        "RegEx Tester",
        "Text Manipulator",
        "URL Decoder",
        "UUID Generator",
    ];

    return (
        <div className="h-screen w-full max-w-[1000px] px-2 sm:px-4 lg:px-12 py-12 flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center font-black text-[#181818] relative drop-shadow-lg">
                The only utility browser extension you will{" "}
                <span className="inline-block bg-gradient-to-r from-[#D92A1C] to-[#FF4D40] p-2 sm:p-3 skew-y-2 transform relative rounded-3xl mt-2">
                    <span className="inline-block text-[#F0F0F0]">
                        ever need
                    </span>
                </span>
                .
            </h1>
            <Toolkit items={tools} />
            <div className="flex flex-col items-center gap-4 w-full">
                <a
                    href="https://mechashadow.gumroad.com/l/InfiniteToolkit"
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#D92A1C] to-[#FF4D40] text-[#F0F0F0] font-bold rounded-full hover:from-[#C02518] hover:to-[#E63C30] transition-all duration-300 shadow-lg text-center min-w-[250px] transform hover:scale-105"
                >
                    Get Premium License -{" "}
                    <span className="text-xl font-black">$4.99</span> Lifetime
                    Access
                </a>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                        href="https://chromewebstore.google.com/detail/infinite-toolkit/iocbmkenbdeolfklibfpokdojgffnkdb"
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-[#F0F0F0] font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300 shadow-lg text-center min-w-[210px]"
                    >
                        Add to Chrome
                    </a>
                    <a
                        href="https://addons.mozilla.org/en-US/firefox/addon/infinite-toolkit/"
                        className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-[#F0F0F0] font-semibold rounded-xl hover:bg-orange-600 transition-colors duration-300 shadow-lg text-center min-w-[210px]"
                    >
                        Add to Firefox
                    </a>
                </div>
            </div>
        </div>
    );
}
