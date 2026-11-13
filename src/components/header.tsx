"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/data/site";
import { Brand } from "./brand";
import { LanguageSwitcher, T, LocalizedLink, LocalizedButton, LocalizedNav } from "@/components/language";
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return <header className="site-header"><div className="container header-inner"><LocalizedLink href="/" className="brand" aria-label="Ana Paz Bauser, inicio"><Brand /></LocalizedLink><LanguageSwitcher /><LocalizedButton ref={toggle} className="menu-toggle" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</LocalizedButton><LocalizedNav id="navigation" aria-label="Navegación principal" className={open ? "navigation is-open" : "navigation"}>{navigation.map(item => {
          const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`${active ? "active " : ""}${item.href === "/contacto" ? "contact-link" : ""}`} onClick={() => setOpen(false)}><T>{item.label}</T>{item.href === "/contacto" && <ArrowUpRight size={14} />}</Link>;
        })}</LocalizedNav></div></header>;
}
