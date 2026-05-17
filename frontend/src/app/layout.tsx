import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "DROPAMIN Academy | Shuffle Dance",
  description: "Drop the beat, feel the dopamine. Shuffle dance kurzy pre každého, bez rozdielu veku.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className={`${inter.variable} ${spaceMono.variable} h-full antialiased dark scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-secondary selection:text-black font-inter">
        {children}
      </body>
    </html>
  );
}
