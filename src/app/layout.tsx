import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NAAAS Holding Group",
  description: "NAAAS Holding Group - Diversified conglomerate across logistics, events, real estate, agriculture, medical technology, and hospitality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
