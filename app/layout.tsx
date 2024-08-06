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
        <html lang="en" className="bg-[#F0F0F0]">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
