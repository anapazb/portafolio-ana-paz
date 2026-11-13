import Link from "next/link";
import { ArrowUpRight, BookOpen, BriefcaseBusiness, Code2, Globe2, GraduationCap, Laptop, MapPin, MessageCircle, UserRound } from "lucide-react";
import { T, LocalizedImage, LocalizedSection } from "./language";
import { Botanical, Sun } from "./botanical";
import { CactusArt, DesertArt } from "./editorial-art";
import { Reveal } from "./motion";
import { projects } from "@/data/site";
import { espartillarPhotos, homeMilestones } from "@/data/home";

export function FactsBand() {
  const facts = [
    { icon: GraduationCap, title: "Universidad Nacional del Sur", sub: "Mi casa de estudios" },
    { icon: Laptop, title: "Ingeniería en Sistemas", sub: "de Información · 5.º año" },
    { icon: MapPin, title: "Bahía Blanca", sub: "Argentina" },
    { icon: Globe2, title: "Inglés y francés", sub: "Puentes hacia otras culturas" },
  ];
  return <div className="facts-band"><LocalizedSection className="container facts" aria-label="Mi perfil en breve">{facts.map(fact => <div className="fact" key={fact.title}><fact.icon size={40} strokeWidth={1.2} /><div><strong><T>{fact.title}</T></strong><span><T>{fact.sub}</T></span></div></div>)}</LocalizedSection></div>;
}

const worlds = [
  { href: "/acerca-de-mi", name: "Acerca de mí", text: "La persona detrás de las ideas.", icon: UserRound },
  { href: "/estudios", name: "Estudios", text: "Un camino en construcción.", icon: BookOpen },
  { href: "/idiomas", name: "Idiomas", text: "Nuevas formas de conectar.", icon: MessageCircle },
  { href: "/proyectos", name: "Proyectos", text: "De las ideas a la práctica.", icon: Code2 },
  { href: "/experiencias", name: "Experiencias", text: "Aprender también es vivir.", icon: BriefcaseBusiness },
];

export function ExploreWorld() {
  return <section className="explore-section editorial-section" id="explora"><div className="container">
    <div className="editorial-heading"><h2><T>{"Explorá "}</T><em><T>{"mi mundo"}</T></em></h2><p><T>{"Distintas partes de mí, conectadas por las ganas de aprender."}</T></p></div>
    <div className="explore-grid">{worlds.map((world, index) => <Reveal key={world.href}><Link href={world.href} className={`explore-card explore-${index}`}>
      <world.icon size={34} strokeWidth={1.2} /><h3><T>{world.name}</T></h3><p><T>{world.text}</T></p><span className="explore-arrow"><ArrowUpRight size={18} /></span>
      {index === 0 && <CactusArt className="world-cactus" />}{index === 1 && <DesertArt className="world-desert" />}{index === 2 && <Botanical className="world-botanical" />}{index === 3 && <div className="world-checker" aria-hidden="true" />}{index === 4 && <DesertArt className="world-desert" />}
    </Link></Reveal>)}</div>
  </div></section>;
}

export function FeaturedProjects() {
  return <section className="featured-section editorial-section"><div className="container">
    <div className="editorial-heading"><h2><T>{"Proyectos "}</T><em><T>{"destacados"}</T></em></h2><p><T>{"Proyectos, desafíos compartidos y mucho aprendizaje en el camino."}</T></p></div>
    <div className="featured-grid">{projects.map(project => <Reveal key={project.slug}><Link className={`featured-project featured-project--${project.slug}`} href={`/proyectos/${project.slug}`}>
      {project.slug === "lama" ? <CactusArt className="featured-cactus" /> : <Botanical className="featured-botanical" />}
      <Sun className="featured-sun" /><div className="featured-project-copy"><h3><T>{project.name}</T></h3><span className="featured-category"><T>{project.category}</T></span><p><T>{project.description}</T></p><div className="tags">{project.technologies.slice(0, 4).map(technology => <span key={technology}><T>{technology}</T></span>)}</div></div>
      <span className="featured-project-arrow"><ArrowUpRight size={23} /></span>
    </Link></Reveal>)}</div>
    <Link className="text-link all-projects-link" href="/proyectos"><T>{"Todos los proyectos"}</T><ArrowUpRight size={16} /></Link>
  </div></section>;
}

export function HomeJourney() {
  return <section className="container home-journey">
    <div className="journey-photo-stack">{espartillarPhotos.map(photo => <figure className="journey-polaroid" key={photo.src}><Link href="/acerca-de-mi#espartillar"><LocalizedImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="180px" /></Link><figcaption><T>{"Espartillar"}</T></figcaption></figure>)}</div>
    <h2><T>{"Mi"}</T><br /><em><T>{"recorrido"}</T></em><span className="handdrawn-underline" aria-hidden="true" /></h2>
    <ol className="home-timeline">{homeMilestones.map((milestone, index) => <li key={milestone.date} className={`milestone-${index}`}><span className="milestone-dot" /><h3><T>{milestone.date}</T></h3><p><T>{milestone.text}</T></p></li>)}</ol>
  </section>;
}
