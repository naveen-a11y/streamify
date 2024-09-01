import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Streamify Dashboard",
  description: "Streamify Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="py-4 px-6 bg-black sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-white">Streamify</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
