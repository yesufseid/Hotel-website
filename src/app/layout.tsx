import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomePage from "./home"
import Footer from "./component/Footer"



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luxury",
  description: "luxury hotel that found in the heart of addis ababa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HomePage />
        {children}
        <Footer />
        </body>
    </html>
  );
}
