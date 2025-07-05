import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_layout/Header";
import FooterSection from "./_layout/footer/FooterSection";
import { GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: "Homez Style",
  description: "Trading and Services ",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="AW-16947965858" /> */}
      <body className={`${inter.className} ${poppins.className} overflow-x-hidden`}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
