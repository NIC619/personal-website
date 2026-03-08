import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { siteData } from "../src/site-data";

const siteUrl = "https://niclin.me";
const siteDescription =
  "Nic Lin is a protocol researcher and smart contract engineer focused on L2s, MEV mitigation, account abstraction, and secure protocol design.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteData.profile.name,
    template: `%s | ${siteData.profile.name}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteData.profile.name,
    description: siteDescription,
    url: siteUrl,
    siteName: siteData.profile.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteData.profile.name} Open Graph image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.profile.name,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon" }],
    shortcut: ["/favicon.svg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
