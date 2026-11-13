import { T } from "@/components/language";
import type { Metadata } from "next";
import { projects } from "@/data/site";
import { ContactBand, PageIntro, ProjectCard } from "@/components/ui";
export const metadata: Metadata = {
  title: "Proyectos",
  description: "LAMA y SIGCD: desarrollo web, integración de APIs, análisis funcional y gestión de proyectos."
};
export default function Projects() {
  return <><PageIntro eyebrow="DEL APRENDIZAJE A LA ACCIÓN" title="Ideas que toman forma." description="Una selección de proyectos colaborativos: distintas maneras de resolver, construir y aprender en equipo." /><section className="container section section-first"><div className="project-grid">{projects.map(p => <ProjectCard key={p.slug} project={p} />)}</div><p className="end-note"><T>{"Este espacio sigue creciendo, proyecto a proyecto. "}</T><span>✳</span></p></section><ContactBand /></>;
}
