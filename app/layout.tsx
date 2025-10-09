import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from './providers';
import './globals.css';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: "Vinícius Silva Queiroz - Desenvolvedor Fullstack",
  description: "Portfolio de Vinícius Silva Queiroz, desenvolvedor Fullstack focado em soluções escaláveis e intuitivas.",
  keywords: "desenvolvedor, fullstack, java, spring boot, next.js, react, portfolio",
  authors: [{ name: "Vinícius Silva Queiroz" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable} style={{ fontFamily: 'var(--font-inter)' }}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
