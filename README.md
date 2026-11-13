# Ana Paz Bauser · Sitio personal

Sitio multipágina con Next.js App Router, TypeScript, Tailwind CSS 4, Lucide React y Motion. Contenido en español de Argentina y estética boho chic con ilustraciones SVG y composiciones HTML originales.

## Ejecutar localmente

Requiere Node.js 20.9 o superior (recomendado: Node.js 22).

```bash
npm install
npm run dev
```

Abrir http://localhost:3000. Para verificar:

```bash
npm run typecheck
npm run lint
npm run build
node scripts/check-export.mjs
```

El build genera una exportación estática en `out/`, lista para un hosting estático. `npm start` no sirve exportaciones estáticas: para revisarlas usar `npx serve out` o ejecutar `npm run dev` durante el desarrollo. No hay backend, autenticación ni base de datos.

## Editar contenido

- `src/data/site.ts`: perfil, navegación, estudios, idiomas, intereses y proyectos.
- `src/app/globals.css`: colores, tipografías, textura, estilos responsive y movimiento reducido.
- `src/components/`: navegación, footer, tarjetas, ilustraciones y animaciones reutilizables.
- `src/app/`: siete páginas principales y páginas de detalle de proyectos generadas desde los datos.

Para sumar proyectos, agregar un objeto a `projects` con un `slug` único. Se crean automáticamente su tarjeta y ruta `/proyectos/[slug]` en el siguiente build.

## Material por incorporar

1. Guardar una foto propia en `public/images/` y completar `profile.photo` con `/images/nombre.jpg`. El componente usa Next Image, tamaño responsive y prioridad para el retrato.
2. Completar `profile.email`, `profile.linkedin` y `profile.github`. Los valores vacíos se muestran como datos pendientes sin enlaces ficticios.
3. Guardar el CV en `public/cv/` y completar `profile.cv` con `/cv/ana-paz-bauser.pdf` para habilitar la descarga.
4. Incorporar capturas reales en `public/images/` y completar `image` en cada proyecto. Las vistas actuales son ilustraciones conceptuales identificadas como tales.
5. Completar `github` y `demo` de cada proyecto con URLs reales para habilitar los enlaces.
6. Ampliar hobbies, actividades, fechas y relatos personales en Acerca de mí y Experiencias. Los espacios pendientes están indicados. ARFITEC 2027 se presenta explícitamente como experiencia futura.

Las fuentes DM Serif Display y DM Sans se cargan desde Google Fonts con `display=swap`; sin conexión se usan Georgia y Arial. Las imágenes se sirven sin el servicio de optimización de Next para compatibilidad con la exportación estática; comprimir las fotografías antes de incorporarlas. No se incluyen las referencias como capturas de la página.

## Verificaciones realizadas

TypeScript, ESLint sin advertencias y build de producción correctos. La verificación de exportación comprueba las nueve rutas, sus títulos SEO, un único h1 por página y 113 enlaces internos. Se revisaron el Inicio en escritorio y móvil, el menú móvil, todas las rutas en móvil sin desbordamiento horizontal y Estudios en tablet. Se corrigió un aviso de hidratación al activar movimiento reducido.

La auditoría de npm informa ocho avisos moderados de desarrollo derivados de `minimatch` en la cadena de ESLint/TypeScript ESLint; no afectan las dependencias de producción. No se aplicó `npm audit fix --force`, cuya propuesta implica cambiar la versión mayor de la configuración de Next. Revisar las actualizaciones de esas herramientas antes del mantenimiento futuro.

## Identidad visual

Los logos originales aportados por Ana están en public/brand/ana-paz.png y public/brand/apb.png. Brand muestra el logotipo completo en el header y el monograma en el footer; el favicon SVG incorpora el monograma original. src/app/brand.css concentra los ajustes de color y tipografía inspirados en esos logos.

La fotografía de JACAI se presenta mediante public/images/jacai/encuentro-foto.svg, con un recorte fijo del archivo original incrustado: muestra solamente la fotografía y conserva sus píxeles sin reconstrucción generativa. El enlace de la tarjeta abre esa misma fotografía recortada. El original permanece intacto.

## Idiomas del sitio

El selector del header permite elegir Español, English o Français. La elección se guarda en el navegador y se conserva al navegar y recargar. Las URLs se mantienen: no hay rutas duplicadas por idioma. El HTML estático inicial se genera en español; el selector cambia los textos, los títulos del navegador, las descripciones y el atributo `lang` del documento en el cliente. El CV y las capturas mantienen su idioma original.

Las traducciones se editan en `src/data/translations.ts`: cada fila contiene `[español, inglés, francés]`. Los nombres propios y las tecnologías permanecen sin cambios. Para agregar contenido, envolver los textos visibles en `T`; para imágenes, enlaces y etiquetas accesibles, usar los componentes `LocalizedImage`, `LocalizedLink`, `LocalizedAnchor`, etc. de `src/components/language.tsx`. Estos componentes actualizan los atributos accesibles además del texto visible.

```bash
npm run check:i18n
```

La verificación comprueba entradas completas, claves únicas, cobertura del contenido, conservación de nombres y teléfonos, espacios y textos accesibles de galerías. Se revisaron las nueve rutas en inglés a 390 px y en francés a 320 px, la persistencia al recargar y el menú móvil. WhatsApp es la última opción de Contacto, debajo del CV.

## Diseño editorial y paleta actual

`src/app/editorial.css`, importado al final, concentra la dirección visual vigente. La paleta base es Shell Beige `#F4C9AC`, Apricot `#EF9E70`, Cinnabar `#AE6455` y Jalapeño `#756C4F`. Predomina Jalapeño en el encabezado, botones, franja de datos, tarjetas y footer; el fondo crema es más neutro y los tonos cálidos quedan en pequeños acentos. Las variantes claras se derivan de estas bases con `color-mix`.

El Inicio incluye formas orgánicas, ilustraciones SVG, papel sutil, separadores ajedrezados, tarjetas editoriales, proyectos destacados y un recorrido que empieza en Espartillar. Los hitos y las fotos de esa sección se editan en `src/data/home.ts`. `espartillarPhotos` está preparado para incorporar más fotografías; por ahora usa la foto de Espartillar ya aportada. El retrato del hero y de Acerca de mí usa la imagen proporcionada por Ana, en public/images/ana-paz/retrato.webp, integrada en el arco con un encuadre responsive.

En `src/data/about.ts`, `rootsDetails` reúne la estación de Espartillar, una nota breve sobre la trufa negra y el mapa. Se muestran de forma secundaria dentro de Mis raíces; el mapa utiliza un desplegable nativo cerrado inicialmente. La estación del Inicio enlaza a esa sección. La imagen de la estación utiliza una versión WebP de 1200 × 900 (aproximadamente 126 KB); se conserva el JPG original. Los textos nuevos y los textos alternativos están traducidos al inglés y al francés.

Los logos visibles usan `public/brand/ana-paz-light.svg` y `public/brand/apb-light.svg`, con contornos trazados a partir de los originales y fondo transparente. No dependen de filtros de inversión ni de `mix-blend-mode`, para evitar los rectángulos negros observados en el celular. El apellido BAUSER se mantiene como texto nítido. Los originales se conservan; los SVG se pueden regenerar con `node scripts/build-brand-vectors.mjs`.
