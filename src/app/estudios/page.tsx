import { T } from "@/components/language";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { education, technologies } from "@/data/site";
import { PageIntro, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/motion";
export const metadata: Metadata = {
  title: "Estudios",
  description: "Mi formación en la Universidad Nacional del Sur, conocimientos técnicos e intereses académicos."
};
export default function Studies() {
  return <><PageIntro eyebrow="APRENDER PARA CONSTRUIR" title="Un camino de aprendizaje." description="Mi formación, las herramientas que voy incorporando y las ideas que me impulsan a seguir." /><section className="container academic-section"><div><GraduationCap size={42} strokeWidth={1} /><h2><T>{"Raíces firmes."}</T><br /><em><T>{"Horizontes abiertos."}</T></em></h2><p><T>{"Cada etapa aporta una nueva forma de pensar, resolver problemas y trabajar con otras personas."}</T></p></div><div className="timeline">{education.map(e => <Reveal key={e.title} className="timeline-item"><span className="eyebrow"><T>{e.date}</T></span><h3><T>{e.title}</T></h3><strong><T>{e.institution}</T></strong><p><T>{e.description}</T></p></Reveal>)}</div></section><section className="section tinted"><div className="container"><SectionTitle eyebrow="MI CAJA DE HERRAMIENTAS" title="Tecnologías y conocimientos" description="Herramientas que forman parte de mi recorrido académico y de mis proyectos." /><div className="technology-grid">{technologies.map((t, i) => <div key={t}><span>/{String(i + 1).padStart(2, "0")}</span><h3><T>{t}</T></h3></div>)}</div></div></section><section className="container section"><SectionTitle eyebrow="DE LA TEORÍA A LA PRÁCTICA" title="Intereses que se conectan" /><div className="three-grid">{[{
          name: "Desarrollo e integración",
          text: "Aplicaciones web, APIs REST y comunicación entre sistemas.",
          project: "LAMA",
          href: "/proyectos/lama"
        }, {
          name: "Análisis y gestión",
          text: "Requerimientos, planificación, Scrum y coordinación de equipos.",
          project: "SIGCD",
          href: "/proyectos/sigcd"
        }, {
          name: "Calidad de software",
          text: "Testing, automatización y pruebas con Playwright, Postman, Newman y k6.",
          project: "Explorar proyectos",
          href: "/proyectos"
        }].map(c => <div className="card" key={c.name}><h3><T>{c.name}</T></h3><p><T>{c.text}</T></p><Link href={c.href} className="text-link"><T>{c.project}</T><ArrowUpRight size={16} /></Link></div>)}</div></section></>;
}
