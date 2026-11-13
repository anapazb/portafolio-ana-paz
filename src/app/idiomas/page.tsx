import { T } from "@/components/language";
import type { Metadata } from "next";
import { Globe2, MessageCircle } from "lucide-react";
import { languages } from "@/data/site";
import { Button, PageIntro, SectionTitle } from "@/components/ui";
export const metadata: Metadata = {
  title: "Idiomas",
  description: "Español nativo, inglés intermedio y francés en formación. Idiomas como puentes hacia otras culturas."
};
export default function Languages() {
  return <><PageIntro eyebrow="PALABRAS QUE ACERCAN" title="Más de una forma de conectar." description="Cada idioma es una puerta a nuevas personas, nuevas ideas y otras maneras de ver el mundo." /><section className="container section section-first"><div className="three-grid">{languages.map((l, i) => <article className={`language-card language-${i}`} key={l.name}><MessageCircle size={24} strokeWidth={1} /><span className="language-greeting"><T>{l.greeting}</T><em>!</em></span><h2><T>{l.name}</T></h2><span className="level"><T>{l.level}</T></span><div className="level-dots" aria-hidden="true">{[1, 2, 3].map(n => <span key={n} className={n <= l.steps ? "filled" : ""} />)}</div><p><T>{l.detail}</T></p></article>)}</div></section><section className="container culture-panel"><Globe2 size={76} strokeWidth={.7} /><div><SectionTitle eyebrow="MÁS ALLÁ DE LAS PALABRAS" title="El intercambio también enseña." /><p><T>{"En el programa Buddy acompañé a una estudiante francesa de intercambio durante su integración académica, social y cultural en Bahía Blanca. Una experiencia para conectar culturas a través de lo cotidiano."}</T></p><Button href="/experiencias"><T>{"Conocé la experiencia"}</T></Button></div></section></>;
}
