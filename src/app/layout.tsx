import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0D0C0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "EternaTech — Bespoke Software & Intelligence Systems",
  description:
    "Engineering-first private technology studio based in Delhi NCR. Bespoke web platforms, mobile apps, and intelligent WhatsApp & backend automations for ambitious enterprises.",
  metadataBase: new URL("https://eternatech.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EternaTech — Bespoke Software & Intelligence Systems",
    description:
      "Engineering-first private technology studio based in Delhi NCR, partnering with founders and ambitious businesses to ship high-leverage software.",
    url: "https://eternatech.in",
    siteName: "EternaTech",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EternaTech Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EternaTech — Bespoke Software & Intelligence Systems",
    description:
      "Bespoke web platforms, mobile apps, and intelligent WhatsApp & backend automations.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon.png?v=3", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: [
      { url: "/apple-icon.png?v=3", sizes: "180x180", type: "image/png" },
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
      className={`${cormorant.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0D0C0A] text-[#EDE8DF] font-sans overflow-x-hidden selection:bg-[#C5A059]/30 selection:text-[#F7F3EB]"
      >
        {children}
      </body>
    </html>
  );
}
