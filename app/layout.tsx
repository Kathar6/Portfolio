// Next
import type { Metadata } from "next";

// Custom Components
import Navbar from "./navbar";
import Timeline from "@components/timeline";

// Styles
import { css } from "@styled-system/css";
import "./globals.css";

// Utils
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Katharsis",
};

const timelineData = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Experience",
  },
  {
    name: "Projects",
  },
  {
    name: "Contact",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div
          className={css({
            bg: "secondary.500",
            minH: "lvh",
          })}
        >
          <Navbar />
          <Timeline data={timelineData} />
          {children}
        </div>
      </body>
    </html>
  );
}
