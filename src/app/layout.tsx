import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exclusive Portfolio & VIP Booking",
  description: "Professional entertainer portfolio, VIP scheduling, and direct chat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-brand-dark text-gray-100 min-h-screen flex flex-col justify-between selection:bg-brand-accent selection:text-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <AIChatWidget />
        <Footer />
      </body>
    </html>
  );
}
