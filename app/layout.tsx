import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Birdeye Peak — Institutional On-Chain Intelligence Terminal",
    template: "%s — Birdeye Peak",
  },
  description:
    "Birdeye Peak delivers real-time Solana DEX intelligence, wallet-level signal interpretation, and institutional-grade data infrastructure for professional capital allocators.",
  keywords: [
    "institutional on-chain intelligence",
    "Solana DEX analytics",
    "on-chain terminal",
    "smart money tracking",
    "wallet intelligence",
    "crypto hedge fund data",
    "pre-trade due diligence",
  ],
  openGraph: {
    type: "website",
    siteName: "Birdeye Peak",
    title: "Birdeye Peak — Institutional On-Chain Intelligence Terminal",
    description:
      "Real-time Solana DEX liquidity, wallet-level signals, and institutional data infrastructure for professional capital allocators.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
