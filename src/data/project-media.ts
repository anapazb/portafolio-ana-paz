export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const projectScreenshots: Record<string, ProjectScreenshot[]> = {
  lama: [
    {
      src: "/images/proyectos/lama-inicio.jpeg",
      alt: "Inicio de LAMA Payments: gestión de pagos, compras, ventas, comisiones y movimientos según el rol.",
      caption: "LAMA Payments · Inicio del módulo de gestión de pagos",
      width: 1600,
      height: 683,
    },
    {
      src: "/images/proyectos/lama-movimientos.jpeg",
      alt: "Panel de superadministración de LAMA con movimientos globales, filtros y pagos registrados.",
      caption: "Movimientos globales · Auditoría y seguimiento de pagos",
      width: 1600,
      height: 699,
    },
  ],
};
