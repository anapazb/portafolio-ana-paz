import { T } from "@/components/language";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { projects } from "@/data/site";
import { ContactBand, PageIntro, ProjectVisual, SectionTitle } from "@/components/ui";
import { ProjectGallery } from "@/components/project-gallery";
export function generateStaticParams() {
  return projects.map(p => ({
    slug: p.slug
  }));
}
export async function generateMetadata({
  params
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const {
    slug
  } = await params;
  const p = projects.find(p => p.slug === slug);
  return {
    title: p?.name ?? "Proyecto",
    description: p?.description
  };
}
export default async function Project({
  params
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const {
    slug
  } = await params;
  const p = projects.find(p => p.slug === slug);
  if (!p) notFound();
  return <><div className="container back-link"><Link href="/proyectos"><ArrowLeft size={16} /><T>{" Todos los proyectos"}</T></Link></div><PageIntro eyebrow={p.category} title={p.name} description={p.summary} /><section className="container detail-visual"><ProjectVisual project={p} /></section><section className="container section detail-layout"><div><SectionTitle eyebrow="EL PROYECTO" title="Una idea, muchas conexiones." /><p><T>{p.description}</T></p><h3><T>{"Funcionalidades y trabajo realizado"}</T></h3><ul className="feature-list">{p.features.map(f => <li key={f}><Check size={18} /><T>{f}</T></li>)}</ul><h3><T>{"Lo que me llevo"}</T></h3><p><T>{p.learning}</T></p></div><aside className="card project-aside"><span className="eyebrow"><T>{"MI PARTICIPACIÓN"}</T></span><h3><T>{p.role}</T></h3><span className="eyebrow"><T>{"HERRAMIENTAS Y METODOLOGÍAS"}</T></span><div className="tags">{p.technologies.map(t => <span key={t}><T>{t}</T></span>)}</div>{p.github && <a className="text-link" href={p.github} target="_blank" rel="noopener noreferrer"><T>{"Ver en GitHub"}</T><ArrowUpRight size={16} /></a>}{p.demo && <a className="text-link" href={p.demo} target="_blank" rel="noopener noreferrer"><T>{"Visitar demo"}</T><ArrowUpRight size={16} /></a>}{!p.github && !p.demo && <p className="muted-note"><T>{"Los enlaces al repositorio y a la demo se incorporarán cuando estén disponibles."}</T></p>}</aside></section><ProjectGallery slug={p.slug} /><ContactBand /></>;
}
