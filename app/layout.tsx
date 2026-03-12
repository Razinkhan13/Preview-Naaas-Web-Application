import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naaas Web Application — Fashion Preview",
  description:
    "A preview of the Naaas Web Application — a fashion-forward e-commerce experience by Naaas Holding Venture BD Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
