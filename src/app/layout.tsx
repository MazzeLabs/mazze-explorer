import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { DarkProvider } from "@/hooks/useDark";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MazzeScan",
  description: "Mazze network explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-200 dark:bg-dark-blue-100 text-gray-800 dark:text-gray-350 ${oxygen.className}`}
      >
        <DarkProvider>
          <Header />
          {children}
          <Footer />
        </DarkProvider>
      </body>
    </html>
  );
}
