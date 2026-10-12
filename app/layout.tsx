import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FloatingWhatsAppButton } from "@/components/whatsapp-cta";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: "Independent guidance for UAE driving licence information, Dubai file opening, licence costs, requirements, and WhatsApp enquiries.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.siteName,
    description: "Understand the driving licence process, required documents, and training options before your next step.",
    url: siteConfig.domain,
    siteName: siteConfig.siteName,
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteName,
    description: "Independent guidance for UAE driving licence information and Dubai file opening.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaEnabled = Boolean(siteConfig.analytics.enableAnalytics && siteConfig.analytics.gaMeasurementId);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900">
        <Script
          id="google-adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9870715140357073"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingWhatsAppButton />

        {gaEnabled ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.analytics.gaMeasurementId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.analytics.gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
