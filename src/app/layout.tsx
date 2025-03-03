import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {SearchContextProvider} from "@/app/context/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LogiFlow",
  description: "LogiFlow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <SearchContextProvider>
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
      </SearchContextProvider>
  );
}
