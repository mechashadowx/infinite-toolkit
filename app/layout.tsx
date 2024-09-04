import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/app/globals.css";
import "tailwindcss/tailwind.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Infinite Toolkit",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="bg-[#181c25]">
            <head>
                <link rel="icon" href="/infinite-toolkit/favicon.svg" />
            </head>
            <body className={montserrat.className}>
                <main className="px-6 flex flex-col items-center relative z-10 min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}
