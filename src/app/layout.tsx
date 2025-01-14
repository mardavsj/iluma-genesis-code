import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import ConvexClientProvider from "@/components/providers/ConvexClientProvider";
import Footer from "../components/Footer"
import { Toaster } from "react-hot-toast"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <head>
        <title>Star Code</title>
        <meta name="google-adsense-account" content="ca-pub-1308401027139954"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1308401027139954" 
        crossOrigin="anonymous"></script>
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