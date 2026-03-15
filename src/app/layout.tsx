import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Modern sans-serif text
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TREADIX | Defy Gravity",
  description: "Premium sportswear and footwear engineered for motion. Defy gravity with Treadix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-treadix-accent selection:text-treadix-black bg-treadix-black text-treadix-white`}
      >
        {children}
      </body>
    </html>
  );
}
