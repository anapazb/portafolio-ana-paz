import { T } from "@/components/language";
import type { Metadata } from "next";
import { Sprout } from "lucide-react";
import { interests, profile } from "@/data/site";
import { ContactBand, PageIntro, Portrait, SectionTitle } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { RootsStory } from "@/components/roots-story";
import { Hobbies } from "@/components/hobbies";
export const metadata: Metadata = {
  title: "Acerca de mí",
  description: "Mi perfil, mis intereses y el recorrido personal y académico que me inspira a seguir aprendiendo."
};
export default function About() {
  return <><PageIntro eyebrow="UN POQUITO DE MI HISTORIA" title="Curiosa por naturaleza." description="Entre la tecnología, los idiomas y las personas, voy construyendo mi propio camino." /><section className="container split-section"><Reveal><Portrait /></Reveal><Reveal><span className="eyebrow"><T>{"MI PERFIL"}</T></span><h2><T>{"Hola de nuevo,"}</T><br /><T>{"soy "}</T><em><T>{"Ana Paz."}</T></em></h2><p><T>{profile.introduction}</T></p><p><T>{"Me interesa el desarrollo de software y disfruto del aprendizaje continuo. Encuentro en el trabajo colaborativo una oportunidad para intercambiar ideas y construir soluciones con otras personas."}</T></p><p><T>{"Los idiomas y las experiencias interculturales también forman parte de mi mundo: son una manera de acercarme a otras perspectivas y seguir creciendo."}</T></p></Reveal></section><section className="section tinted"><div className="container"><SectionTitle title="Lo que despierta mi curiosidad" eyebrow="MIS INTERESES" /><div className="interest-grid">{interests.map(i => <Reveal key={i} className="interest-card"><Sprout size={22} /><h3><T>{i}</T></h3></Reveal>)}</div></div></section><section className="container section"><SectionTitle eyebrow="MI RECORRIDO" title="Cada paso suma." /><div className="timeline">{[{
          date: "2016 — 2021",
          title: "Una primera etapa",
          text: "Bachiller en Economía y Administración, en la Escuela de Educación Secundaria N.º 3."
        }, {
          date: "2022 — actualidad",
          title: "Elegir la ingeniería",
          text: "Ingeniería en Sistemas de Información en la UNS. Actualmente cursando quinto año."
        }, {
          date: "2027 · previsto",
          title: "Un nuevo horizonte",
          text: "Movilidad académica ARFITEC a CPE Lyon, Francia. Una experiencia futura por descubrir."
        }].map(t => <Reveal className="timeline-item" key={t.date}><span className="eyebrow"><T>{t.date}</T></span><h3><T>{t.title}</T></h3><p><T>{t.text}</T></p></Reveal>)}</div></section><section className="container section extra-section"><SectionTitle eyebrow="ALGO MÁS SOBRE MÍ" title="Un poquito de mis raíces" description="El lugar de donde vengo también es parte de mi historia." /><RootsStory /><Hobbies /></section><ContactBand /></>;
}
