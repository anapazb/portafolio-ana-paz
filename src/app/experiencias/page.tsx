import { T } from "@/components/language";
import type { Metadata } from "next";
import { Globe2, HeartHandshake, Plane } from "lucide-react";
import { PageIntro } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { Botanical, Sun } from "@/components/botanical";
import { BuddyGallery } from "@/components/buddy-gallery";
import { JacaiExperience } from "@/components/jacai-experience";
export const metadata: Metadata = {
  title: "Experiencias",
  description: "Programa Buddy, JACAI Arcoíris de Espartillar y futura movilidad académica ARFITEC a CPE Lyon, Francia, prevista para 2027."
};
export default function Experiences() {
  return <><PageIntro eyebrow="APRENDER TAMBIÉN ES VIVIR" title="El mundo como aula." description="Personas, encuentros y nuevos horizontes que acompañan mi recorrido más allá de la tecnología." /><section className="container experience-list"><Reveal className="experience-card"><div className="experience-art buddy-art"><Sun /><HeartHandshake size={100} strokeWidth={.8} /><span><T>{"Conectar culturas."}</T></span><Botanical /></div><div className="experience-copy"><span className="eyebrow"><T>{"ENCUENTROS QUE SUMAN"}</T></span><h2><T>{"Programa Buddy"}</T></h2><p><T>{"Acompañamiento a una estudiante francesa de intercambio durante su integración académica, social y cultural en Bahía Blanca."}</T></p><p><T>{"Una experiencia de intercambio cultural y acompañamiento, con los idiomas y las personas como punto de encuentro."}</T></p><div className="tags"><span><T>{"Intercambio cultural"}</T></span><span><T>{"Bahía Blanca"}</T></span></div></div><BuddyGallery /></Reveal><JacaiExperience /><Reveal className="experience-card future"><div className="experience-art lyon-art"><Plane size={80} strokeWidth={.8} /><span><T>{"Bonjour, Lyon."}</T></span><Globe2 size={150} strokeWidth={.5} /></div><div className="experience-copy"><span className="future-badge"><T>{"2027 · EXPERIENCIA FUTURA"}</T></span><h2><T>{"Un nuevo horizonte"}</T><br /><T>{"en Francia"}</T></h2><p><T>{"Movilidad académica ARFITEC a CPE Lyon, Francia, prevista para 2027."}</T></p><p><T>{"Una próxima etapa para seguir aprendiendo, conocer otra cultura y ampliar mi formación. El intercambio todavía no se ha realizado."}</T></p><div className="tags"><span><T>{"ARFITEC"}</T></span><span><T>{"CPE Lyon"}</T></span><span><T>{"Movilidad académica"}</T></span></div></div></Reveal></section><div className="container end-note"><T>{"Hay muchas historias por venir. Este será su lugar. "}</T><span>✳</span></div></>;
}
