import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Ibrahim Mohsin",
  description: "Ibrahim Mohsin's Portfolio Created from Scratch in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
