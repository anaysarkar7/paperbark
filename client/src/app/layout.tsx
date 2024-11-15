import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu_Mono } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Ubuntu_Mono({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Paper Bark",
  description: "Film Production Made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
