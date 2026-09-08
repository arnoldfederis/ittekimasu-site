import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme";
import {
  APP_NAME,
  KEYWORDS,
  OG_ICON_PATH,
  SITE_DESCRIPTION,
  SITE_NAME,
  siteUrl,
  TAGLINE,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/*
 * Japanese appears in the copy on purpose — the app's name, the visa route's Japanese name,
 * the kana on the cards. Inter has no kana, so without this the browser falls back to
 * whatever it has and 行ってきます renders at a different weight and rhythm to the line it
 * sits in. Two weights only, to keep the payload honest.
 */
const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
      logo: `${siteUrl}${OG_ICON_PATH}`,
    },
    {
      "@type": "WebSite",
      name: SITE_NAME,
      url: siteUrl,
      description: TAGLINE,
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: SITE_NAME,
  title: {
    default: APP_NAME,
    template: "%s | Ittekimasu",
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: APP_NAME,
    description: SITE_DESCRIPTION,
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: TAGLINE,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  // The app's own primary and canvas, so the browser chrome matches the product.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f6e56" },
    { media: "(prefers-color-scheme: dark)", color: "#14130f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${notoSansJp.variable} h-full antialiased`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background text-foreground">
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: trusted static JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
          type="application/ld+json"
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
