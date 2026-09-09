import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nikhil Dhuriya — AI Graphic Designer | Noida",
  description:
    "AI Graphic Designer from Noida. Client websites, logos, and campaign creatives — designed and shipped for real brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-ink">{children}</body>
    </html>
  );
}
