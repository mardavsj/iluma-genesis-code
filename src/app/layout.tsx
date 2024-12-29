import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "../components/Footer"
import { Toaster } from "react-hot-toast"
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Genesis Code",
  description: "Interactive Code Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
          <meta name="google-adsense-account" content="ca-pub-1308401027139954"></meta>
          <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1308401027139954"
            crossOrigin="anonymous"></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
      >
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
        <Footer/>
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
