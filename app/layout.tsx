import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAAAS Holding Group",
  description:
    "NAAAS Holding Group — a diversified conglomerate operating across logistics, real estate, agriculture, events & marketing, medical technology, and travel & hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#080B12] text-white">
        {children}
      </body>
    </html>
  );
}
