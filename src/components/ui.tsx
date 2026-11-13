import { T, LocalizedImage, LocalizedLink, LocalizedAnchor } from "@/components/language";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Flower2, Sprout, Mail, Linkedin, Sun as SunIcon } from "lucide-react";
import { Botanical, Sun } from "./botanical";
import { Reveal } from "./motion";
import { profile, projects } from "@/data/site";
import { Brand } from "./brand";
import { CactusArt, FooterWave } from "./editorial-art";
export function Button({
  href,
  children,
  secondary = false
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return <Link href={href} className={`button ${secondary ? "button-outline" : ""}`}><T>{children}</T><ArrowUpRight size={17} /></Link>;
}
export function PageIntro({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return <section className="page-intro container"><span className="eyebrow"><span /> <T>{eyebrow}</T></span><h1><T>{title}</T></h1><p><T>{description}</T></p><Sun className="intro-sun" /></section>;
}
export function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return <div className="section-title">{eyebrow && <span className="eyebrow"><T>{eyebrow}</T></span>}<h2><T>{title}</T></h2>{description && <p><T>{description}</T></p>}</div>;
}
export function Portrait() {
  return <div className="portrait-composition"><div className="portrait-organic" /><div className="portrait-ribbon" /><div className="arch-outline" /><div className="portrait-window">{profile.photo ? <LocalizedImage className="portrait-photo" src={profile.photo} alt="Ana Paz Bauser" fill sizes="(max-width: 760px) 90vw, 450px" priority /> : <div className="portrait-arch"><CactusArt className="portrait-cactus" /><div className="landscape-hill hill-one" /><div className="landscape-hill hill-two" /><div className="landscape-hill hill-three" /><div className="portrait-caption"><Sprout size={25} /><span><T>{"Un espacio para mi foto"}</T></span><small><T>{"y para todo lo que está por venir."}</T></small></div></div>}</div><Sun className="portrait-sun" /><Botanical className="portrait-leaves" /><div className="portrait-note"><T>{"Siempre aprendiendo"}</T><span><T>{"siempre creciendo."}</T></span></div><span className="little-star">✧</span></div>;
}
export function ProjectVisual({
  project
}: {
  project: (typeof projects)[number];
}) {
  return <div className={`project-visual ${project.slug} ${project.image ? "has-capture" : ""}`}>{project.image ? <LocalizedImage src={project.image} alt={`Captura del proyecto ${project.name}`} fill sizes="(max-width: 760px) 100vw, 560px" /> : project.slug === "lama" ? <div className="shop-art" aria-hidden="true"><div className="mock-bar"><b><T>{"lama."}</T></b><span><T>{"Objetos con historia \xA0 ↗"}</T></span></div><div className="shop-body"><div><small><T>{"CONEXIONES QUE INSPIRAN"}</T></small><strong><T>{"Una nueva"}</T><br /><T>{"forma de"}</T><br /><em><T>{"encontrar."}</T></em></strong><span className="mock-pill"><T>{"Explorá la colección ↗"}</T></span></div><div className="vase-scene"><div className="vase" /><Botanical /></div></div></div> : <div className="board-art" aria-hidden="true"><div className="board-sidebar"><b><T>{"S."}</T></b><span><T>{"Resumen"}</T></span><span><T>{"Planificación"}</T></span><span><T>{"Equipo"}</T></span></div><div className="board-main"><small><T>{"SIGCD / PLANIFICACIÓN"}</T></small><strong><T>{"Un equipo. Un objetivo."}</T></strong><div className="board-columns">{["Por hacer", "En proceso", "Finalizado"].map((label, i) => <div key={label}><small><T>{label}</T></small><span /><span className={`task-${i}`} /></div>)}</div></div></div>}{!project.image && <span className="illustration-label"><T>{"Vista conceptual · no es una captura del sistema"}</T></span>}</div>;
}
export function ProjectCard({
  project
}: {
  project: (typeof projects)[number];
}) {
  return <Reveal><Link className="project-card" href={`/proyectos/${project.slug}`}><ProjectVisual project={project} /><div className="project-card-copy"><span className="eyebrow"><T>{project.category}</T></span><h3><T>{project.name}</T><ArrowUpRight size={25} /></h3><p><T>{project.description}</T></p><div className="tags">{project.technologies.slice(0, 3).map(t => <span key={t}><T>{t}</T></span>)}</div></div></Link></Reveal>;
}
export function ContactBand() {
  return <section className="contact-band"><div className="container"><Flower2 size={36} strokeWidth={1} /><div><span className="eyebrow"><T>{"LAS BUENAS IDEAS EMPIEZAN CON UNA CHARLA"}</T></span><h2><T>{"¿Conectamos?"}</T></h2></div><Button href="/contacto"><T>{"Hablemos"}</T></Button></div></section>;
}
export function Footer() {
  return <footer><FooterWave /><div className="container footer-main"><LocalizedLink href="/" className="footer-brand" aria-label="Ana Paz Bauser, inicio"><Brand monogram /><span className="footer-tagline"><T>{"Aprender. Crear. Conectar."}</T></span></LocalizedLink><Link className="footer-invitation" href="/contacto"><T>{"¿Conectamos?"}</T></Link><a className="footer-email" href={`mailto:${profile.email}`}><Mail size={21} strokeWidth={1.3} /><T>{profile.email}</T></a><a className="footer-social" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={23} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()}<T>{" Ana Paz Bauser"}</T></span><span><T>{"Desde Bahía Blanca, con curiosidad"}</T><SunIcon size={14} /></span><LocalizedAnchor href="#top" aria-label="Volver arriba"><T>{"Volver arriba "}</T><ArrowDown className="up-arrow" size={14} /></LocalizedAnchor></div><Sun className="footer-sun" /></footer>;
}
