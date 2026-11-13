import { T } from "@/components/language";
import type { Metadata } from "next";
import { ArrowUpRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/site";
import { PageIntro } from "@/components/ui";
import { Botanical } from "@/components/botanical";
export const metadata: Metadata = {
  title: "Contacto",
  description: "Un espacio para conectar con Ana Paz Bauser, intercambiar ideas y descubrir nuevas oportunidades."
};
export default function Contact() {
  const channels = [{
    label: "Correo electrónico",
    value: profile.email,
    href: profile.email ? `mailto:${profile.email}` : "",
    icon: Mail
  }, {
    label: "LinkedIn",
    value: profile.linkedin,
    href: profile.linkedin,
    icon: Linkedin
  }, {
    label: "GitHub",
    value: profile.github,
    href: profile.github,
    icon: Github
  }];
  return <><PageIntro eyebrow="LAS BUENAS IDEAS EMPIEZAN CON UNA CHARLA" title="Me encantará conectar." description="Para compartir ideas, conversar sobre proyectos o descubrir nuevas oportunidades de aprendizaje y colaboración." /><section className="container contact-layout"><div className="contact-message"><Botanical /><h2><T>{"Una conversación."}</T><br /><em><T>{"Muchas posibilidades."}</T></em></h2></div><div className="contact-options">{channels.map(c => {
          const content = <><c.icon size={24} strokeWidth={1.3} /><div><h3><T>{c.label}</T></h3><span><T>{c.value || "Datos de contacto por incorporar"}</T></span></div>{c.href && <ArrowUpRight size={20} />}</>;
          return c.href ? <a className="contact-option" key={c.label} href={c.href} target={c.label === "Correo electrónico" ? undefined : "_blank"} rel="noopener noreferrer"><T>{content}</T></a> : <div className="contact-option pending" key={c.label}><T>{content}</T></div>;
        })}<div className="cv-card"><Download size={25} strokeWidth={1.3} /><div><h3><T>{"Mi currículum"}</T></h3><p><T>{profile.cv ? "Conocé mi formación y mi recorrido." : "El CV en PDF estará disponible próximamente."}</T></p>{profile.cv && <a className="text-link" href={profile.cv} download><T>{"Descargar CV"}</T><ArrowUpRight size={16} /></a>}</div></div><a className="contact-option whatsapp-contact" href={`https://wa.me/${profile.whatsapp.number}`} target="_blank" rel="noopener noreferrer"><MessageCircle size={24} strokeWidth={1.3} /><div><h3><T>{"Escribime por WhatsApp"}</T></h3><span><T>{profile.whatsapp.display}</T></span></div><ArrowUpRight size={20} /></a></div></section></>;
}
