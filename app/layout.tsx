import type { Metadata } from "next";
import "../app/globals.css";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Wagagai Gold Mining",
  description: "Excellence in Precious Metal Refining",
  icons: { icon: "/wagagai-icon.png" },
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
