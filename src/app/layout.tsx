import "~/styles/globals.css";

import { Oxanium } from "next/font/google";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Defined's HQ",
  description: "Defined Entity's website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oxanium.className}`}>
      <body>{children}</body>
    </html>
  );
}
