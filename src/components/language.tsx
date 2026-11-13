"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ComponentProps, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Languages } from "lucide-react";
import { translate, type Language } from "@/data/translations";
import { projects } from "@/data/site";

const storageKey = "ana-paz-language";
let fallbackLanguage: Language = "es";
function readLanguage(): Language {
  try {
    const value = window.localStorage.getItem(storageKey);
    return value === "en" || value === "fr" || value === "es" ? value : fallbackLanguage;
  } catch { return fallbackLanguage; }
}
function subscribe(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener("languagechange", listener);
  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener("languagechange", listener);
  };
}
function setLanguage(language: Language) {
  fallbackLanguage = language;
  try { window.localStorage.setItem(storageKey, language); } catch { /* In-memory choice still works without browser storage. */ }
  window.dispatchEvent(new Event("languagechange"));
}

const LanguageContext = createContext({ language: "es" as Language, setLanguage, t: (source: string) => source });
export const useLanguage = () => useContext(LanguageContext);

const titles: Record<string, string> = {
  "/": "Aprender, crear, conectar", "/acerca-de-mi": "Acerca de mí", "/estudios": "Estudios", "/idiomas": "Idiomas", "/proyectos": "Proyectos", "/experiencias": "Experiencias", "/contacto": "Contacto", "/proyectos/lama": "LAMA", "/proyectos/sigcd": "SIGCD",
};
const descriptions: Record<string, string> = {
  "/": "El mundo de Ana Paz Bauser: Ingeniería en Sistemas de Información, proyectos, idiomas y experiencias interculturales.",
  "/acerca-de-mi": "Mi perfil, mis intereses y el recorrido personal y académico que me inspira a seguir aprendiendo.",
  "/estudios": "Mi formación en la Universidad Nacional del Sur, conocimientos técnicos e intereses académicos.",
  "/idiomas": "Español nativo, inglés intermedio y francés en formación. Idiomas como puentes hacia otras culturas.",
  "/proyectos": "LAMA y SIGCD: desarrollo web, integración de APIs, análisis funcional y gestión de proyectos.",
  "/experiencias": "Programa Buddy, JACAI Arcoíris de Espartillar y futura movilidad académica ARFITEC a CPE Lyon, Francia, prevista para 2027.",
  "/contacto": "Un espacio para conectar con Ana Paz Bauser, intercambiar ideas y descubrir nuevas oportunidades.",
  "/proyectos/lama": projects.find(project => project.slug === "lama")?.description ?? "",
  "/proyectos/sigcd": projects.find(project => project.slug === "sigcd")?.description ?? "",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, readLanguage, () => "es" as Language);
  const pathname = usePathname();
  const value = useMemo(() => ({ language, setLanguage, t: (source: string) => translate(language, source) }), [language]);
  useEffect(() => {
    document.documentElement.lang = language === "es" ? "es-AR" : language;
    const path = pathname.replace(/\/$/, "") || "/";
    const synchronizeMetadata = () => {
      const title = titles[path];
      const expectedTitle = path === "/" ? `Ana Paz Bauser · ${translate(language, title ?? "")}` : `${translate(language, title ?? "")} · Ana Paz Bauser`;
      if (title && document.title !== expectedTitle) document.title = expectedTitle;
      const description = descriptions[path];
      const element = document.querySelector('meta[name="description"]');
      if (description && element?.getAttribute("content") !== translate(language, description)) element?.setAttribute("content", translate(language, description));
    };
    // Next can stream its Spanish metadata after hydration or navigation.
    // Keep the selected language when those updates reach the document head.
    const observer = new MutationObserver(synchronizeMetadata);
    observer.observe(document.head, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["content"] });
    synchronizeMetadata();
    return () => observer.disconnect();
  }, [language, pathname]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function T({ children }: { children: ReactNode }) {
  const { t } = useLanguage();
  return typeof children === "string" ? t(children) : children;
}

function useAccessibleProps<TProps extends { "aria-label"?: string; title?: string }>(props: TProps) {
  const { t } = useLanguage();
  return { ...props, "aria-label": props["aria-label"] ? t(props["aria-label"]) : undefined, title: props.title ? t(props.title) : undefined };
}
export function LocalizedLink(props: ComponentProps<typeof Link>) { return <Link {...useAccessibleProps(props)} />; }
export function LocalizedAnchor(props: ComponentProps<"a">) { return <a {...useAccessibleProps(props)} />; }
export function LocalizedButton(props: ComponentProps<"button">) { return <button {...useAccessibleProps(props)} />; }
export function LocalizedNav(props: ComponentProps<"nav">) { return <nav {...useAccessibleProps(props)} />; }
export function LocalizedSection(props: ComponentProps<"section">) { return <section {...useAccessibleProps(props)} />; }
export function LocalizedList(props: ComponentProps<"ul">) { return <ul {...useAccessibleProps(props)} />; }
export function LocalizedImage(props: ComponentProps<typeof Image>) {
  const { t } = useLanguage();
  return <Image {...props} alt={t(props.alt)} />;
}

export function LanguageSwitcher() {
  const { language, setLanguage: selectLanguage, t } = useLanguage();
  return (
    <label className="language-switcher">
      <Languages size={16} strokeWidth={1.4} aria-hidden="true" />
      <span className="sr-only">{t("Idioma del sitio")}</span>
      <select value={language} onChange={(event) => selectLanguage(event.target.value as Language)} aria-label={t("Idioma del sitio")}>
        <option value="es" lang="es">Español</option>
        <option value="en" lang="en">English</option>
        <option value="fr" lang="fr">Français</option>
      </select>
    </label>
  );
}
