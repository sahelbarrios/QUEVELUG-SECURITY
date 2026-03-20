import type { Metadata } from "next";
import { Bodoni_Moda, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-tactical",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QUEVELUG | Autoridad Absoluta en Resguardo Patrimonial",
  description: "Software inquebrantable de seguridad y monitoreo táctico - Estándar Internacional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bodoniModa.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
