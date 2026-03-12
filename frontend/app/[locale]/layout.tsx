import { Suspense } from "react";

// Next
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Components
import Navbar from "@components/navbar";
import Timeline from "@components/timeline";
import { Toaster } from "@components/ui/sonner";

// Constants
import { navigationData } from "@constants/navigation";

// Styles
import "@/globals.css";

// Utils
import { Manrope } from "next/font/google";

// Vendor
import { setRequestLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@root/i18n/routing"
import GoUp from "@/components/go-up";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio by Katharsis",
};

type Props = {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export default async function RootLayout({
  children,
  params
}: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className={"bg-secondary-500 " + manrope.className}>
        <NextIntlClientProvider>
          <Toaster />
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
          <GoUp />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
