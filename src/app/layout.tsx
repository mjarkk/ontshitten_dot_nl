import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ontshitten.nl | Ont-shit uw leven!",
  description: "De ultieme gids voor het ontshitten van uw dagelijks leven",
  openGraph: {
    title: "🚨 Ontshitten.nl | Bevrijdt Uzelf Van De Shit-Apocalyps! 🚨",
    description: "Verdrinkt u in een tsunami van existentiële uitwerpselen? Ontdek onze REVOLUTIONAIRE ontshit-methodologie die uw bestaan zal transformeren... Durf u door te klikken?",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        width: 1200,
        height: 630,
        alt: "Ontshitten.nl - Uw pad naar verlichting"
      }
    ],
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
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
