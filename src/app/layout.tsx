import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Huevitos Express | Huevos frescos en Guayaquil",
  description:
    "Huevitos Express, comercialización y distribución de huevos frescos seleccionados en Guayaquil. Atendemos hogares, comercios y negocios con calidad y rapidez.",
  keywords: "huevos frescos, Guayaquil, distribución huevos, huevitos express, comprar huevos Guayaquil",
  openGraph: {
    title: "Huevitos Express | Huevos frescos en Guayaquil",
    description:
      "Comercialización y distribución de huevos frescos seleccionados. Calidad de la familia Uzcátegui.",
    type: "website",
    locale: "es_EC",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
