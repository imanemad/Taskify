'use client';

import { SessionProvider } from "next-auth/react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`bg-gray-100 py-10 px-20`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
