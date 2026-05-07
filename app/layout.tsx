import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistem Arsip Digital - Sudin Pendidikan Wilayah 2 Jakarta Utara",
  description: "Sistem Pengelolaan Arsip Digital Sub Bagian Tata Usaha Suku Dinas Pendidikan Wilayah 2 Kota Administrasi Jakarta Utara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

