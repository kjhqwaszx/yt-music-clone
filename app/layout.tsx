import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/providers/themeProvider";
import React, {ReactNode} from "react";
import Sidebar from "@/components/Sidebar";
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "Clone YT Music",
  description: "Clone Youtube Music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar>
            <div className='w-full h-full'>
              <Header>
                {children}
              </Header>
            </div>
          </Sidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
