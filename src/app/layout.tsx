import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosProvider from "@/components/AosProvider";

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
    <html lang="es" className="h-full" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="min-h-full flex flex-col">
        <AosProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}
