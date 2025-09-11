import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider} from "next-themes"
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import localFont from "next/font/local";

const sfProDisplay = localFont({
  src: [
    {
      path: "./fonts/SFProDisplay/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFProDisplay/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/SFProDisplay/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sf-pro", // CSS variable for Tailwind integration
});
export const metadata: Metadata = {
  title: "Visibel – AI Visibility for Hotels, Restaurants & Agencies",
  description:
    "Visibel helps hotels, restaurants, and agencies win the top slot in AI answers across ChatGPT, Gemini, Perplexity, Grok, and more—driving direct bookings and brand visibility.",
  keywords: [
    "AI visibility",
    "hotels",
    "restaurants",
    "hospitality marketing",
    "answer engine optimization",
    "generative engine optimization",
    "brand visibility score",
    "direct bookings",
  ],
  authors: [{ name: "Visibel" }],
  metadataBase: new URL("https://visibel.ai"),
  openGraph: {
    title: "Visibel – AI Visibility for Hotels, Restaurants & Agencies",
    description:
      "Be the first brand AI recommends. Visibel gets your hotel, restaurant, or client agency mentioned in top AI answers and boosts your direct bookings.",
    url: "https://visibel.ai",
    siteName: "Visibel",
    images: [
      {
        url: "/ss.webp",
        width: 1200,
        height: 630,
        alt: "Visibel Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visibel – AI Visibility for Hotels, Restaurants & Agencies",
    description:
      "Own the top slot in AI answers. Visibel boosts your brand’s AI visibility score and drives more direct bookings.",
    images: ["/ss.webp"],
    creator: "@visibel_ai", // optional, update if you have the handle
  },
  themeColor: "#1E40AF", // Visibel brand blue, adjust as needed
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sfProDisplay.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
