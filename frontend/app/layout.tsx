import { Suspense } from "react";

// Next
import type { Metadata } from "next";

// Components
import Navbar from "@components/navbar";
import Timeline from "@components/timeline";

// Constants
import { navigationData } from "@constants/navigation";

// Styles
import "./globals.css";

// Utils
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Katharsis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-secondary-500 " + manrope.className}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Timeline data={navigationData} />
        </Suspense>
        <div
          id="scroller"
          className="overflow-y-auto overflow-x-hidden snap-y snap-mandatory h-lvh"
        >
          {children}
        </div>
      </body>
    </html>
  );
}
