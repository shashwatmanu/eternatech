import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#06080F",
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
      { url: "/favicon.ico?v=5" },
      { url: "/favicon.png?v=5", type: "image/png" },
      { url: "/logo-colored.png?v=5", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=5",
    apple: [
      { url: "/apple-icon.png?v=5", sizes: "180x180", type: "image/png" },
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
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png?v=5" />
        <link rel="apple-touch-icon" href="/apple-icon.png?v=5" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#06080F] text-[#F8FAFC] font-sans overflow-x-hidden selection:bg-blue-600/30 selection:text-cyan-200"
      >
        {children}
      </body>
    </html>
  );
}
