import { Inter, JetBrains_Mono, Pinyon_Script, Allura } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const pinyonScript = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL('https://scriptmotion.rahll.xyz'),
  title: {
    default: "ScriptMotion - Text to Handwriting Animation Video Generator",
    template: "%s | ScriptMotion"
  },
  description: "Convert any text into realistic handwriting animation videos instantly. Choose your font, customize the writing effect, and download as MP4 or GIF in seconds.",
  keywords: [
    // Core Functionality
    "text to video generator",
    "handwriting animation maker",
    "animated handwriting downloader",
    "text to handwriting video converter",
    "generate writing animation online",
    // Visual Styles & Effects
    "realistic cursive text animation",
    "whiteboard text drawing effect",
    "chalkboard writing animation",
    "calligraphy text reveal video",
    "glowing handwriting effect",
    "typewriter handwriting hybrid effect",
    "pencil sketch writing animation",
    // Output & Technical Features
    "handwriting animation MP4 download",
    "transparent background handwriting video",
    "animated text to GIF converter",
    "no watermark handwriting video maker",
    "high-definition text animation",
    "1080p handwriting video",
    // Use Cases & Target Audience
    "handwriting effect for Premiere Pro",
    "After Effects alternative",
    "lyric video handwriting maker",
    "animated text for Instagram Reels",
    "animated text for TikTok",
    "presentation text animation generator",
    "explainer video text creator",
    "kinetic typography handwriting"
  ],
  authors: [{ name: "ScriptMotion" }],
  creator: "ScriptMotion",
  publisher: "ScriptMotion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scriptmotion.com",
    siteName: "ScriptMotion",
    title: "ScriptMotion - Text to Handwriting Animation Video Generator",
    description: "Convert any text into realistic handwriting animation videos instantly. Choose your font, customize the writing effect, and download as MP4 or GIF in seconds.",
    images: [
      {
        url: "/og-image.png", // Placeholder - add your OG image later
        width: 1200,
        height: 630,
        alt: "ScriptMotion - Handwriting Animation Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScriptMotion - Text to Handwriting Animation Video Generator",
    description: "Convert any text into realistic handwriting animation videos instantly. Choose your font, customize the writing effect, and download as MP4 or GIF in seconds.",
    images: ["/og-image.png"], // Placeholder - add your OG image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "https://scriptmotion.com",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ScriptMotion',
    description: 'Convert any text into realistic handwriting animation videos instantly. Choose your font, customize the writing effect, and download as MP4 or GIF in seconds.',
    url: 'sc',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: [
      'Text to handwriting animation converter',
      'Multiple font styles',
      'Customizable colors and speed',
      'Export as MP4 or GIF',
      'No watermark',
      'Instant download',
    ],
    screenshot: 'https://scriptmotion.com/og-image.png',
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#1c1c1e" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${pinyonScript.variable} ${allura.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
