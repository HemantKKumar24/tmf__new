import type { Metadata } from "next";
import { Pacifico, PT_Serif, Noto_Serif, Roboto_Slab } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const ptSerif = PT_Serif({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  variable: "--font-pt-serif",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-slab",
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
      <body className={`${pacifico.variable} ${ptSerif.variable} ${notoSerif.variable} ${robotoSlab.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
