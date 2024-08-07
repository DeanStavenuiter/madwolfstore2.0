import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Starfield from "./components/Space";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MadWolf | Handmade Designs | free delivery form € 100",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className}`}>
      <Starfield
        starCount={1500}
        starColor={[255, 255, 255]}
        speedFactor={0.005}
        backgroundColor="black"
      />
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
