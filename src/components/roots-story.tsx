import { T, LocalizedImage, LocalizedAnchor } from "@/components/language";
import { Sprout } from "lucide-react";
import { roots } from "@/data/about";
import { Reveal } from "./motion";
import { RootsDetails } from "./roots-details";
export function RootsStory() {
  return <><Reveal className="roots-story">
      <figure className="roots-photo">
        <LocalizedAnchor href={roots.photo.src} target="_blank" rel="noopener noreferrer" aria-label="Ver foto completa del campo (se abre en otra pestaña)">
          <LocalizedImage src={roots.photo.src} alt={roots.photo.alt} width={roots.photo.width} height={roots.photo.height} sizes="(max-width: 640px) calc(100vw - 80px), (max-width: 850px) 40vw, 420px" />
        </LocalizedAnchor>
        <figcaption><T>{roots.photo.caption}</T></figcaption>
      </figure>
      <div className="roots-copy">
        <Sprout size={36} strokeWidth={1} aria-hidden="true" />
        <span className="eyebrow"><T>{roots.eyebrow}</T></span>
        <h3><T>{roots.title}</T></h3>
        <p><T>{roots.description}</T></p>
        <span className="roots-location"><T>{"Espartillar · Provincia de Buenos Aires"}</T></span>
      </div>
    </Reveal><RootsDetails /></>;
}
