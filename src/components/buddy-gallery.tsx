import { T, LocalizedImage, LocalizedAnchor } from "@/components/language";
import { buddyPhotos } from "@/data/experiences";
export function BuddyGallery() {
  return <section className="buddy-memories" aria-labelledby="buddy-memories-title">
      <div className="buddy-memories-heading">
        <span className="eyebrow"><T>{"MOMENTOS DEL PROGRAMA BUDDY"}</T></span>
        <h3 id="buddy-memories-title"><T>{"Recuerdos que nos conectan."}</T></h3>
      </div>
      <div className="buddy-gallery">
        {buddyPhotos.map(photo => <figure key={photo.src} className="buddy-photo">
            <LocalizedAnchor href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Ver foto completa: ${photo.caption} (se abre en otra pestaña)`}>
              <LocalizedImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 640px) calc(100vw - 100px), (max-width: 850px) 30vw, 350px" />
            </LocalizedAnchor>
            <figcaption><T>{photo.caption}</T></figcaption>
          </figure>)}
      </div>
    </section>;
}
