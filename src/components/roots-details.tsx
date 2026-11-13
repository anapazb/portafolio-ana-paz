import { MapPin, ChevronDown } from "lucide-react";
import { LocalizedImage, T } from "./language";
import { rootsDetails } from "@/data/about";

export function RootsDetails() {
  const { station, truffles, map } = rootsDetails;
  return (
    <aside className="roots-local-details" id="espartillar">
      <div className="roots-local-row">
        <figure className="roots-station">
          <LocalizedImage src={station.src} alt={station.alt} width={station.width} height={station.height} sizes="(max-width: 640px) calc(100vw - 90px), 300px" />
          <figcaption><T>{station.caption}</T></figcaption>
        </figure>
        <div className="roots-truffle-note">
          <div><h3><T>{truffles.title}</T></h3><p><T>{truffles.description}</T></p></div>
          <LocalizedImage src={truffles.src} alt={truffles.alt} width={truffles.width} height={truffles.height} sizes="110px" />
        </div>
      </div>
      <details className="roots-map">
        <summary><MapPin size={16} strokeWidth={1.4} aria-hidden="true" /><T>{"Ver mapa de Espartillar"}</T><ChevronDown className="roots-map-chevron" size={15} aria-hidden="true" /></summary>
        <figure><LocalizedImage src={map.src} alt={map.alt} width={map.width} height={map.height} sizes="(max-width: 640px) calc(100vw - 80px), 659px" /><figcaption><T>{"Mapa de Espartillar"}</T></figcaption></figure>
      </details>
    </aside>
  );
}
