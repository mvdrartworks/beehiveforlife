import type { Metadata } from "next";
import { Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beehiveforlife.com"),
  title: {
    default: "Beehive for Life | A Creative Community Born at La Ruche, Paris",
    template: "%s | Beehive for Life",
  },
  description:
    "Join a global community of artists and art lovers. Courses, mentoring, exhibitions, and creative connection from La Ruche, Paris. Founded by Michèle van de Roer.",
  openGraph: {
    title: "Beehive for Life | A Creative Community Born at La Ruche, Paris",
    description:
      "A global creative community, courses, and gatherings born at La Ruche, Paris.",
    type: "website",
    locale: "en_US",
    siteName: "Beehive for Life",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const rootClass = [cormorant.variable, nunito.variable].join(" ");
  return (
    <html lang="en" className={rootClass}>
      <body className="font-sans bg-ivory text-charcoal antialiased">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
