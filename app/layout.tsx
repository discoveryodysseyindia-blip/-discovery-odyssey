import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Discovery Odyssey Travel Group | Travel & Car Rental in Tamil Nadu",
  description:
    "Discovery Odyssey Travel Group offers tour packages, car rentals, Tempo Travellers, Force Urbania and tourist coaches for comfortable travel across Tamil Nadu and India.",
  keywords: [
    "Discovery Odyssey Travel Group",
    "Car rental Tamil Nadu",
    "Tempo Traveller rental",
    "Force Urbania rental",
    "Tourist bus rental",
    "Travel agency Tamil Nadu",
    "Outstation car rental",
    "Tour packages India",
  ],
  openGraph: {
    title: "Discovery Odyssey Travel Group",
    description:
      "Explore tour packages, vehicle rentals and group travel services across Tamil Nadu and India.",
    siteName: "Discovery Odyssey Travel Group",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
