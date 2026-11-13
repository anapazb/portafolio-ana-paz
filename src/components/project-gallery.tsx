import { T, LocalizedImage, LocalizedAnchor } from "@/components/language";
import { projectScreenshots } from "@/data/project-media";
export function ProjectGallery({
  slug
}: {
  slug: string;
}) {
  const screenshots = projectScreenshots[slug];
  if (!screenshots?.length) return null;
  return <section className="container project-gallery" aria-labelledby="project-gallery-title">
      <span className="eyebrow"><T>{"EL SISTEMA EN PANTALLA"}</T></span>
      <h2 id="project-gallery-title"><T>{"Una mirada al proyecto."}</T></h2>
      <div className="project-screenshots">
        {screenshots.map(screenshot => <figure key={screenshot.src}>
            <LocalizedAnchor href={screenshot.src} target="_blank" rel="noopener noreferrer" aria-label={`Ver captura completa: ${screenshot.caption} (se abre en otra pestaña)`}>
              <LocalizedImage src={screenshot.src} alt={screenshot.alt} width={screenshot.width} height={screenshot.height} sizes="(max-width: 640px) calc(100vw - 40px), 1160px" />
            </LocalizedAnchor>
            <figcaption><T>{screenshot.caption}</T></figcaption>
          </figure>)}
      </div>
    </section>;
}
