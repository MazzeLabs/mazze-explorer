import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { BlockchainProvider } from "@/contexts/BlockchainContext";

export const metadata: Metadata = {
  title: "MazzeScan - Mazze Blockchain Explorer",
  description: "Explore the Mazze blockchain network with real-time transaction data, block information, and network analytics",
  keywords: "Mazze, blockchain, explorer, transactions, blocks, cryptocurrency",
  authors: [{ name: "MazzeLabs" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mazze bg-mazze-gradient text-white min-h-screen">
        <BlockchainProvider>
          <div className="mazze-bg-pattern min-h-screen">
            <Header />
            <main className="relative">
              {children}
            </main>
            <Footer />
          </div>
        </BlockchainProvider>
      </body>
    </html>
  );
}
