export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  tags: string[];
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "el-briefing-que-salva-cuentas-de-agencia",
    title: "El briefing que salva cuentas (y relaciones)",
    description:
      "Tres campos que no negocio antes de tocar una campaña: métrica de dirección, techo de riesgo y dueño de la decisión.",
    date: "2026-03-18",
    readingMinutes: 4,
    tags: ["agencia", "procesos", "dirección"],
    body: [
      "La mayoría de fricciones en agencia no nacen de la herramienta. Nacen de un «sí» precipitoso: un WhatsApp, una llamada y a ejecutar. Tres semanas después nadie recuerda qué se prometió ni con qué KPI se iba a medir el éxito.",
      "En SANTACONCHA el briefing escrito no es burocracia: es el contrato moral con el cliente. Objetivo de negocio (no de canal), restricciones reales —stock, margen, capacidad comercial— y qué NO vamos a hacer en esta fase. Si no cabe en una página, aún no está pensado.",
      "Tres campos que no negocio: la métrica que dirección defenderá en comité; el techo de riesgo (CPA, ROAS o volumen mínimo); y el dueño de la decisión cuando haya que matar una campaña. Sin dueño, el presupuesto se convierte en debate eterno.",
      "Cuando el briefing está cerrado, SEO, ads y desarrollo dejan de pelearse por hipótesis distintas. Si el resultado no llega, auditamos el plan —no a las personas. Contratar más manos sin criterio documentado solo multiplica el caos.",
    ],
  },
  {
    slug: "seo-de-direccion-no-de-excel",
    title: "SEO de dirección (no de Excel de rankings)",
    description:
      "Cómo priorizo SEO cuando el comité pregunta por leads y margen, no por posiciones medias.",
    date: "2026-02-28",
    readingMinutes: 4,
    tags: ["SEO", "estrategia", "negocio"],
    body: [
      "El informe de rankings es un termómetro, no un plan. He visto proyectos celebrar un top 3 en keywords que no convierten… mientras la página de servicio que sí vende carga en seis segundos y compite con URLs zombis.",
      "Mi orden de ataque: intención comercial real; capacidad de conversión de la URL; viabilidad técnica (crawl, indexación, WPO); y capacidad editorial de mantener el cluster. Si falla la conversión o la técnica, el contenido es teatro.",
      "En ecommerce y lead gen priorizo hubs de demanda con oferta clara, canonicals limpios y un crawl budget que no se coma en filtros infinitos. GEO e IA no cambian la regla: sin utilidad para el usuario ni señal para el negocio, no escalas.",
      "El reporting a dirección traduce SEO a tres frases: qué demanda capturamos, qué cuello técnico limita el crecimiento y qué decisión de presupuesto o producto desbloquea el siguiente salto. Lo sexy es el P&L, no el screenshot de Semrush.",
    ],
  },
  {
    slug: "senal-antes-que-puja-google-ads",
    title: "Señal antes que puja en Google Ads",
    description:
      "El orden que uso antes de tocar pujas: conversión, tracking, estructura e intención. Optimizar ruido es caro.",
    date: "2026-01-30",
    readingMinutes: 4,
    tags: ["Google Ads", "PPC", "medición"],
    body: [
      "Si la conversión está mal definida, Performance Max no te «ayuda»: te amplifica el error. Antes de hablar de pujas, hablo de señal: qué evento vale dinero, cómo se dispara y si ventas puede cerrarlo.",
      "Checklist de apertura: GA4 y GTM auditados, conversiones prioritarias (no quince microeventos), exclusiones de audiencias basura, naming auditable y landing alineada con el anuncio. Sin eso, el resto es decoración.",
      "Estructura por intención. Search limpio para demanda alta; Shopping o PMax cuando el feed y el margen aguantan; remarketing cuando hay volumen real. Matar campañas mediocres es parte del trabajo, no un fracaso.",
      "En cuentas maduras el debate no es «subimos presupuesto». Es «qué parte del presupuesto merece vivir». CTR alto con lead que no cierra es un coste disfrazado de éxito. Prefiero una cuenta aburrida y rentable a una creativa e incomprensible.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts() {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
