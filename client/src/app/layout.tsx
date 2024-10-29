import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className={``}>
        {children}
      </body>
    </html>
  );
}
