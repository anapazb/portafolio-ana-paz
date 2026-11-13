import { T } from "@/components/language";
import { ArrowDown } from "lucide-react";
import { profile } from "@/data/site";
import { Button, Portrait } from "@/components/ui";
import { Reveal } from "@/components/motion";
import { ExploreWorld, FactsBand, FeaturedProjects, HomeJourney } from "@/components/home-editorial";

export default function Home() {
  return <>
    <section className="container hero">
      <Reveal className="hero-copy">
        <span className="eyebrow"><span /><T>{"BIENVENIDOS A MI PORTAFOLIO"}</T></span>
        <h1><T>{"Hola, soy"}</T><br /><em><T>{"Ana Paz"}</T></em><T>{" Bauser"}</T><span className="title-dot">.</span></h1>
        <p><T>{profile.introduction}</T></p>
        <div className="hero-actions"><Button href="/acerca-de-mi"><T>{"Conocé más sobre mí"}</T></Button><Button secondary href="/proyectos"><T>{"Descubrí mis proyectos"}</T></Button></div>
        <a className="scroll-note" href="#explora"><span><ArrowDown size={15} /></span><T>{"Un poquito más de mi mundo"}</T></a>
      </Reveal>
      <Reveal className="hero-art"><Portrait /></Reveal>
    </section>
    <FactsBand /><ExploreWorld /><FeaturedProjects /><HomeJourney />
  </>;
}
