// Next
import type { Metadata } from "next";

// Custom Components
import Navbar from "@components/navbar";
import Timeline from "@components/timeline";

// Constants
import { navigationData } from "@constants/navigation";

// Styles
import "./globals.css";
import { css } from "@styled-system/css";

// Utils
import { Manrope } from "next/font/google";
import { Suspense } from "react";

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
      <body className={manrope.className}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Timeline data={navigationData} />
        </Suspense>
        <div
          className={css({
            overflowY: "auto",
            overflowX: "hidden",
            scrollSnapType: "y mandatory",
            h: "lvh",
          })}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
