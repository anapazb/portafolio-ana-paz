export const profile = {
  name: "Ana Paz Bauser",
  introduction: "Soy estudiante avanzada de Ingeniería en Sistemas de Información en la Universidad Nacional del Sur. Me apasiona aprender, desarrollar soluciones tecnológicas, trabajar en equipo y descubrir nuevas oportunidades de crecimiento personal y profesional.",
  email: "bauseranapaz13@gmail.com",
  whatsapp: { number: "5492936405660", display: "+54 9 2936 405660" },
  linkedin: "https://www.linkedin.com/in/anapazb/",
  github: "",
  cv: "/cv/CV_Ana_Paz_Bauser.pdf",
  photo: "/images/ana-paz/retrato.webp",
};
export const navigation = [
  { href: "/", label: "Inicio" }, { href: "/acerca-de-mi", label: "Acerca de mí" }, { href: "/estudios", label: "Estudios" }, { href: "/idiomas", label: "Idiomas" }, { href: "/proyectos", label: "Proyectos" }, { href: "/experiencias", label: "Experiencias" }, { href: "/contacto", label: "Contacto" },
];
export const education = [
  { date: "2022 — actualidad", title: "Ingeniería en Sistemas de Información", institution: "Universidad Nacional del Sur", description: "Cursando quinto año. Un recorrido de aprendizaje, desafíos y proyectos colaborativos." },
  { date: "Formación complementaria", title: "Inglés como Lengua Extranjera", institution: "Universidad Nacional del Sur", description: "Formación hasta Nivel III." },
  { date: "2016 — 2021", title: "Bachiller en Economía y Administración", institution: "Escuela de Educación Secundaria N.º 3", description: "Formación secundaria con orientación en Economía y Administración." },
];
export const technologies = ["Next.js", "JavaScript", "TypeScript", "SQL", "Java", "Prolog", "Playwright", "Postman", "Newman", "k6"];
export const interests = ["Desarrollo web", "Bases de datos", "Testing", "Automatización", "Nuevas tecnologías", "Idiomas", "Intercambio cultural"];
export const projects = [
  { slug: "lama", name: "LAMA", category: "Desarrollo web · E-commerce", summary: "Conectar ideas, equipos y experiencias de compra.", description: "Plataforma web de comercio electrónico desarrollada colaborativamente, con integración de APIs REST y Mercado Pago. Mi trabajo incluye el módulo de gestión de pagos LAMA Payments.", role: "Desarrollo web e integración entre equipos", technologies: ["Next.js", "JavaScript", "Supabase", "Prisma", "Git", "Vercel", "APIs REST"], features: ["Plataforma de comercio electrónico.", "Integración con otros equipos mediante APIs REST.", "Comunicación entre módulos del sistema.", "Integración con Mercado Pago para procesar pagos.", "Consulta de compras, ventas, comisiones y movimientos según el rol.", "Panel de movimientos globales con filtros, estados de pago y alertas de seguimiento."], learning: "Desarrollo colaborativo, integración de servicios y coordinación técnica entre equipos para construir una experiencia conectada.", image: "/images/proyectos/lama-inicio.jpeg", github: "", demo: "" },
  { slug: "sigcd", name: "SIGCD", category: "Análisis · Project Management", summary: "Del primer requerimiento a un proyecto compartido.", description: "Sistema Integral de Gestión de Clubes Deportivos, con participación en el equipo de Análisis y Project Management.", role: "Análisis y Project Management", technologies: ["Scrum", "Historias de usuario", "Wireframes", "Gantt", "Gestión de riesgos"], features: ["Análisis de requerimientos y elaboración de historias de usuario.", "Diseño de wireframes y coordinación con desarrolladores.", "Planificación de sprints con Scrum y diagramas de Gantt.", "Gestión de riesgos y seguimiento del proyecto."], learning: "Traducir necesidades en propuestas claras, organizar el trabajo y acompañar a un equipo desde el análisis hasta la planificación.", image: "", github: "", demo: "" },
];
export const languages = [
  { name: "Español", greeting: "Hola", level: "Nativo", detail: "Mi idioma de todos los días, para compartir ideas y conectar con los demás.", steps: 3 },
  { name: "Inglés", greeting: "Hello", level: "Intermedio", detail: "Inglés como Lengua Extranjera III en la UNS y Academia Big Ben, 6.º Senior.", steps: 2 },
  { name: "Francés", greeting: "Bonjour", level: "Básico · en formación", detail: "Actualmente en formación, descubriendo una nueva forma de comunicarme y acercarme a otras culturas.", steps: 1 },
];
