import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naaas Web Application — Fashion Preview",
  description:
    "A preview of the Naaas Web Application — a fashion-forward e-commerce experience by Naaas Holding Venture BD Ltd.",
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
      <body className="antialiased">{children}</body>
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
