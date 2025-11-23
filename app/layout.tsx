import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "TEAM MUSCLE FITNESS GYM - Transform Your Body, Transform Your Life",
  description: "Join TEAM MUSCLE FITNESS GYM in Hyderabad. Premium gym facilities, expert trainers, flexible membership plans. Start your fitness journey today!",
  keywords: "gym, fitness, bodybuilding, Hyderabad, Secunderabad, workout, training, muscle fitness",
  icons: {
    icon: "/bg_pic/tmf_no_bg.png",
    apple: "/bg_pic/tmf_no_bg.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
