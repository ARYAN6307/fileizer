import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Fileizer - Free Unlimited File Converter",
    description: `Boost your productivity with Fileizer – the premier online tool for seamless multimedia conversion. Effortlessly transform images, audio, and videos according to your needs, with no limitations. Tailored to your compatibility, Fileizer ensures ease of use, empowering you to elevate your content and productivity to new heights. Experience the difference today!`,
    creator: "ARYAN PANDEY",
    keywords: "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <GA GA_MEASUREMENT_ID="G-52GQ441X7H" />
            <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
