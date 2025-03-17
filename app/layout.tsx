import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { TailwindIndicator } from "@/components/layout/tailwind-indicator";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AnalytIQ",
  description:
    "A powerful analytics dashboard delivering real-time business insights, interactive data visualizations, key performance metrics, and fully customizable reporting tools.",
  keywords:
    "An advanced analytics dashboard for business intelligence, featuring real-time analytics, interactive data visualizations, KPI tracking, performance metrics, in-depth data analysis, and customizable reporting tools for actionable business insights.",
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
