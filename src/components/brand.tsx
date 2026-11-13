import { LocalizedImage } from "@/components/language";
export function Brand({
  monogram = false
}: {
  monogram?: boolean;
}) {
  if (monogram) {
    return <span className="brand-image brand-monogram"><LocalizedImage src="/brand/apb.png" alt="apb. — Ana Paz Bauser" width={2172} height={724} sizes="350px" /></span>;
  }
  return <span className="brand-image brand-wordmark">
    <span className="brand-wordmark-image" aria-hidden="true"><LocalizedImage src="/brand/ana-paz.png" alt="" width={2172} height={724} sizes="340px" priority /></span>
    <span className="brand-surname" aria-hidden="true">Bauser</span>
    <span className="sr-only">Ana Paz Bauser</span>
  </span>;
}
