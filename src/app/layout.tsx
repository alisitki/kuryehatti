import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: {
    template: '%s | Kurye Hattı',
    default: 'Kurye Hattı - İstanbul\'da Hızlı ve Güvenilir Kurye Hizmeti'
  },
  description: 'Kurye Hattı ile İstanbul\'da hızlı, güvenilir ve profesyonel kurye hizmetlerinden yararlanın.',
  icons: {
    icon: '/logo.svg', // Logo'yu favicon olarak ekledik
    apple: '/logo.svg', // Apple touch icon olarak ekledik
  },
  openGraph: {
    images: '/logo.svg', // Open Graph image olarak ekledik
  },
  twitter: {
    card: 'summary_large_image',
    images: '/logo.svg', // Twitter Card image olarak ekledik
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}