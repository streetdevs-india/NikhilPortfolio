import type { Metadata } from "next";
import { Instrument_Serif, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nikhil Dhuriya — AI Graphic Designer | Noida",
  description:
    "AI-native visual designer for brand systems, social creatives, and web visuals. Art direction + AI + product-ready craft.",
  openGraph: {
    title: "Nikhil Dhuriya — AI Graphic Designer",
    description:
      "Art-directing AI visuals that stay on-brand — and ship cleanly to the web.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${outfit.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text">
        <div className="site-bg" aria-hidden />
        {children}
      </body>
    </html>
  );
}
