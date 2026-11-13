import { T, LocalizedImage, LocalizedAnchor } from "@/components/language";
import { jacai } from "@/data/experiences";
import { Reveal } from "./motion";
export function JacaiExperience() {
  return <Reveal className="experience-card jacai-card">
      <figure className="jacai-memory">
        <LocalizedAnchor href={jacai.photo} target="_blank" rel="noopener noreferrer" aria-label="Ver foto del encuentro de JACAI (se abre en otra pestaña)">
          <div className="jacai-photo-frame">
            <LocalizedImage src={jacai.photo} width={640} height={467} alt="Foto grupal de JACAI con una bandera de ACA Jóvenes." sizes="(max-width: 640px) 100vw, 550px" />
          </div>
        </LocalizedAnchor>
        <figcaption><T>{jacai.caption}</T></figcaption>
      </figure>
      <div className="experience-copy">
        <div className="jacai-logo-frame">
          <LocalizedImage src={jacai.logo} width={488} height={488} alt="Logo multicolor de JACAI." sizes="200px" />
        </div>
        <span className="eyebrow"><T>{"JUVENTUD Y COOPERATIVISMO"}</T></span>
        <h2><T>{jacai.title}</T></h2>
        <p><T>{jacai.description}</T></p>
        <div className="tags"><span><T>{"Espartillar"}</T></span><span><T>{"Juventud agraria"}</T></span><span><T>{"Cooperativismo"}</T></span></div>
      </div>
    </Reveal>;
}
