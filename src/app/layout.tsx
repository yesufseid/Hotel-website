import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomePage from "./home"
import Footer from "./component/Footer"
import ScrollButton from "./component/ScrollButton";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury",
  openGraph: {
    title: "Luxury-Ethiopia",
    description: "best hotel in welkite",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <HomePage />
      <ScrollButton />
        {children}
        <Footer />
        </body>
    </html>
  );
}
