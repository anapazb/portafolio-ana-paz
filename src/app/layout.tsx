import type { Metadata } from "next";
import { LanguageProvider, T } from "@/components/language";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui";
import "./globals.css";
import "./brand.css";
import "./editorial.css";
export const metadata: Metadata = {
  title: {
    default: "Ana Paz Bauser · Aprender, crear, conectar",
    template: "%s · Ana Paz Bauser"
  },
  description: "El mundo de Ana Paz Bauser: Ingeniería en Sistemas de Información, proyectos, idiomas y experiencias interculturales.",
  icons: {
    icon: "/brand/icon.svg"
  }
};
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <html lang="es-AR"><body id="top"><LanguageProvider><a className="skip-link" href="#contenido"><T>{"Saltar al contenido"}</T></a><Header /><main id="contenido">{children}</main><Footer /></LanguageProvider></body></html>;
}
