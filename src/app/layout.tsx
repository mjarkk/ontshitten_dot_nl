import type { Metadata } from "next";
import { Merriweather, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const headings = Merriweather({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-headings",
  display: "swap",
});

const text = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ontshitten.nl | Ont-shit uw leven!",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: "/favicon-32x32.png",
  },
  description: "De ultieme gids voor het ontshitten van uw dagelijks leven",
  openGraph: {
    title: "🚨 Ontshitten.nl | Bevrijdt Uzelf Van De Shit-Apocalyps! 🚨",
    description:
      "Verdrinkt u in een tsunami van existentiële uitwerpselen? Ontdek onze REVOLUTIONAIRE ontshit-methodologie die uw bestaan zal transformeren... Durf u door te klikken?",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${headings.variable} ${text.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
