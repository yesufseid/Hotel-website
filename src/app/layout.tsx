import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HomePage from "./home"
import Footer from "./component/Footer"



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury",
  openGraph: {
    title: "Luxury",
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
        {children}
        <Footer />
        </body>
    </html>
  );
}
