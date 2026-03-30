import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAAAS Holding Group | Building & Venture BD Ltd.",
  description:
    "NAAAS Holding Group — a diversified conglomerate operating across logistics, real estate, agriculture, events & marketing, medical technology, and travel & hospitality.",
  keywords: "NAAAS, Holding Group, Bangladesh, Logistics, Real Estate, Agriculture, Medical Technology, Events, Hospitality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#080B12] text-white">
        {children}
      </body>
    </html>
  );
}
