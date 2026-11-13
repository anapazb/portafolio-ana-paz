// Preserve the supplied logo silhouettes as transparent SVG paths.
// No CSS colour filters, blending or opaque raster backgrounds are needed.
import fs from "node:fs/promises";
import sharp from "sharp";

async function traceLogo(source, destination, maxY = Infinity) {
  const { data, info } = await sharp(source).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const mask = new Uint8Array(info.width * info.height);
  let minX = info.width, maxX = 0, minY = info.height, lastY = 0;
  for (let y = 0; y < Math.min(info.height, maxY); y++) {
    for (let x = 0; x < info.width; x++) {
      const index = (y * info.width + x) * info.channels;
      const [r, g, b] = data.subarray(index, index + 3);
      if (r - g > 30 && g < 190 && b < g) {
        mask[y * info.width + x] = 1;
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); lastY = Math.max(lastY, y);
      }
    }
  }
  if (minX > maxX) throw new Error(`No logo silhouette found: ${source}`);
  const stride = info.width + 1;
  const edges = new Map();
  function add(from, to) {
    if (!edges.has(from)) edges.set(from, []);
    edges.get(from).push(to);
  }
  const filled = (x, y) => x >= 0 && x < info.width && y >= 0 && y < info.height && mask[y * info.width + x];
  for (let y = minY; y <= lastY; y++) {
    for (let x = minX; x <= maxX; x++) {
      if (!filled(x, y)) continue;
      const a = y * stride + x, b = a + 1, c = b + stride, d = a + stride;
      if (!filled(x, y - 1)) add(a, b);
      if (!filled(x + 1, y)) add(b, c);
      if (!filled(x, y + 1)) add(c, d);
      if (!filled(x - 1, y)) add(d, a);
    }
  }
  const contours = [];
  while (edges.size) {
    const start = edges.keys().next().value;
    let current = start;
    const points = [];
    do {
      points.push([current % stride - minX + 2, Math.floor(current / stride) - minY + 2]);
      const choices = edges.get(current);
      if (!choices?.length) throw new Error("Open logo contour");
      const next = choices.pop();
      if (!choices.length) edges.delete(current);
      current = next;
    } while (current !== start);
    const corners = points.filter((point, index) => {
      const previous = points[(index + points.length - 1) % points.length];
      const next = points[(index + 1) % points.length];
      return (point[0] - previous[0]) * (next[1] - point[1]) !== (point[1] - previous[1]) * (next[0] - point[0]);
    });
    if (corners.length >= 3) contours.push(`M${corners.map(point => point.join(" ")).join("L")}Z`);
  }
  const width = maxX - minX + 5, height = lastY - minY + 5;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><path fill="#FFF5E9" fill-rule="evenodd" d="${contours.join("")}"/></svg>\n`;
  await fs.writeFile(destination, svg);
  console.log(`${destination}: ${width} × ${height}, ${Buffer.byteLength(svg)} bytes`);
}

await traceLogo("public/brand/ana-paz.png", "public/brand/ana-paz-light.svg", 450);
await traceLogo("public/brand/apb.png", "public/brand/apb-light.svg");

const monogram = (await fs.readFile("public/brand/apb-light.svg", "utf8"))
  .replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><rect width="128" height="128" rx="26" fill="#756C4F"/><g transform="translate(10 37) scale(0.1538461538)">${monogram}</g></svg>\n`;
for (const file of ["public/brand/favicon-jalapeno.svg", "public/brand/icon.svg", "public/icon.svg"]) {
  await fs.writeFile(file, favicon);
}
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile("public/brand/favicon-jalapeno-32.png");
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile("public/brand/apple-touch-icon-jalapeno.png");
console.log("Jalapeño favicon SVG, 32px PNG and 180px Apple icon generated.");
