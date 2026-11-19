import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "EternaTech — Custom Apps & AI Systems Engineered for Scale",
  description:
    "Engineering-first technology studio based in Delhi NCR. Bespoke web platforms, mobile apps, and intelligent WhatsApp & backend automations for ambitious businesses.",
  metadataBase: new URL("https://eternatech.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EternaTech — Custom Apps & AI Systems Engineered for Scale",
    description:
      "Engineering-first technology studio based in Delhi NCR, partnering with founders and ambitious businesses to ship high-leverage software.",
    url: "https://eternatech.in",
    siteName: "EternaTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo-colored.png",
        width: 1200,
        height: 630,
        alt: "EternaTech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EternaTech — Custom Apps & AI Systems Engineered for Scale",
    description:
      "Bespoke web platforms, mobile apps, and intelligent WhatsApp & backend automations.",
    images: ["/logo-colored.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=6" },
      { url: "/favicon.png?v=6", type: "image/png" },
      { url: "/logo-colored.png?v=6", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=6",
    apple: [
      { url: "/apple-icon.png?v=6", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=6" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png?v=6" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=6" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] font-body overflow-x-hidden selection:bg-[#1C4BB6]/20 selection:text-[#1C4BB6]"
      >
        {children}
      </body>
    </html>
  );
}
