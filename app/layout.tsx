import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

import { Geist, Geist_Mono } from "next/font/google";


import { Toaster } from "../components/ui/sonner";
import { TailwindIndicator } from "../components/global/tailwind-indicator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnalytIQ ",
  description:
    "Comprehensive analytics dashboard offering real-time business insights, interactive data visualization, key performance metrics, and fully customizable reporting tools for data-driven decision-making.",
  keywords:
    "Advanced analytics dashboard for business intelligence, featuring interactive data visualization, KPI tracking, real-time analytics, performance metrics, in-depth data analysis, actionable business insights, and customizable reporting tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} a antialiased`}
      >
        <Provider>
          {children}
          <TailwindIndicator />
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
