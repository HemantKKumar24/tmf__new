import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TEAM MUSCLE FITNESS GYM - Transform Your Body, Transform Your Life",
  description: "Join TEAM MUSCLE FITNESS GYM in Hyderabad. Premium gym facilities, expert trainers, flexible membership plans. Start your fitness journey today!",
  keywords: "gym, fitness, bodybuilding, Hyderabad, Secunderabad, workout, training, muscle fitness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
