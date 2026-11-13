import { LocalizedImage } from "@/components/language";
export function Brand({
  monogram = false
}: {
  monogram?: boolean;
}) {
  if (monogram) {
    return <span className="brand-image brand-monogram"><LocalizedImage src="/brand/apb-light.svg" alt="apb. — Ana Paz Bauser" width={702} height={351} sizes="135px" /></span>;
  }
  return <span className="brand-image brand-wordmark">
    <span className="brand-wordmark-image" aria-hidden="true"><LocalizedImage src="/brand/ana-paz-light.svg" alt="" width={1226} height={211} sizes="190px" priority /></span>
    <span className="brand-surname" aria-hidden="true">Bauser</span>
    <span className="sr-only">Ana Paz Bauser</span>
  </span>;
}
