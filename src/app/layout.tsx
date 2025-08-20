import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "@/components/Landingpage/Header";

import Footer from "@/components/Landingpage/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata for ST-AAA LLC
export const metadata: Metadata = {
  title: "ST-AAA LLC | Business & Financial Services in Garland, TX",
  description:
    "Comprehensive business solutions in Garland, TX. ST-AAA LLC offers business formation, compliance, and financial services for entrepreneurs and businesses.",
  keywords: [
    "ST-AAA LLC",
    "Business Services Garland TX",
    "Financial Services Garland TX",
    "Business Formation",
    "Compliance Services",
    "Entrepreneur Support"
  ],
  authors: [{ name: "ST-AAA LLC" }],
  publisher: "ST-AAA LLC",
  creator: "ST-AAA LLC",
  openGraph: {
    title: "ST-AAA LLC | Business & Financial Services",
    description:
      "Your one-stop partner for business formation, compliance, and financial services. Serving entrepreneurs and businesses with expertise and dedication.",
    url: "https://www.st-aaa.com", // replace with actual website URL
    siteName: "ST-AAA LLC",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ST-AAA LLC | Business & Financial Services",
    description:
      "Comprehensive business solutions for entrepreneurs and businesses in Garland, TX.",
    creator: "@STAAALLC", // replace with actual Twitter handle if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        <Header/>
        {children}

     
        <Footer/>
      </body>
    </html>
  );
}
