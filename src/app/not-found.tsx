import { T } from "@/components/language";
import { Button, PageIntro } from "@/components/ui";
export default function NotFound() {
  return <><PageIntro eyebrow="404 · NOS SALIMOS DEL CAMINO" title="Por acá todavía no hay nada." description="Volvamos a un lugar conocido para seguir explorando." /><div className="container not-found-action"><Button href="/"><T>{"Volver al inicio"}</T></Button></div></>;
}
