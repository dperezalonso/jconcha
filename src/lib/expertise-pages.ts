export type ExpertiseSlug =
  | "seo-barcelona"
  | "google-ads-meta-ads"
  | "analitica-cro"
  | "direccion-de-marketing";

export type ExpertisePage = {
  slug: ExpertiseSlug;
  navLabel: string;
  h1: string;
  title: string;
  description: string;
  eyebrow: string;
  lead: string;
  heroTags: string[];
  pitch: string[];
  services: string[];
  method: { title: string; text: string }[];
  results: { value: string; label: string; href: string }[];
  faq: { q: string; a: string }[];
  related: ExpertiseSlug[];
};

export const expertisePages: ExpertisePage[] = [
  {
    slug: "seo-barcelona",
    navLabel: "SEO",
    eyebrow: "SEO técnico · local · internacional · GEO",
    h1: "Experto SEO en Barcelona",
    title: "Experto SEO en Barcelona",
    description:
      "Experto SEO en Barcelona: auditorías, SEO local e internacional, WPO, GEO, ASO, linkbuilding y reputación online. Javier Concha, Director de Marketing de SANTACONCHA.",
    lead: "Posicionamiento que atrae a quien puede comprar. No rankings de vanidad: arquitectura, rendimiento y contenido con intención comercial.",
    heroTags: [
      "SEO técnico",
      "SEO local Barcelona",
      "Internacional",
      "GEO / IA",
      "Linkbuilding",
      "ASO",
      "Reputación",
    ],
    pitch: [
      "En SANTACONCHA el SEO forma parte de un sistema: atraer, convertir, aprender. Primero sabemos qué hay que mover; después priorizamos lo que desbloquea negocio.",
      "Trabajo SEO técnico, local e internacional, con foco en crawl budget, WPO/Core Web Vitals y clusters de demanda real. También GEO, ASO y reputación online: visibilidad donde buscan, descubren y conversan.",
      "El SEO que defiendo se construye trimestre a trimestre, se mide contra negocio y se explica en dirección sin traducir jerga. Largo plazo, sin atajos que luego se pagan.",
    ],
    services: [
      "Auditorías SEO técnicas y de contenido",
      "Arquitectura de información y crawl budget",
      "SEO local, multi-sede e internacional",
      "Linkbuilding, digital PR y autoridad de dominio",
      "Auditoría de perfil de enlaces y migraciones",
      "GEO: visibilidad en buscadores con IA",
      "WPO y Core Web Vitals",
      "Contenidos SEO con intención comercial (no relleno)",
      "SEO para ecommerce",
      "ASO: posicionamiento de apps",
      "Reputación online y menciones",
      "Reporting ejecutivo para dirección",
    ],
    method: [
      {
        title: "Diagnóstico sin teatro",
        text: "Índice, velocidad, canibalizaciones y oportunidades de demanda con margen. Un plan corto antes de producir contenido a ciegas.",
      },
      {
        title: "Prioridad de negocio",
        text: "Primero URLs que pueden convertir. Después autoridad y cobertura. El Excel de rankings es un termómetro, no el objetivo.",
      },
      {
        title: "Sistema sostenible",
        text: "Arquitectura limpia, medición clara y capacidad editorial real. SEO que se puede mantener sin quemar al equipo.",
      },
    ],
    results: [
      {
        value: "×4",
        label: "Tráfico total con un canal orgánico propio · Sportium",
        href: "https://santaconcha.com/casos-de-exito/sportium/",
      },
      {
        value: "×7",
        label: "Tráfico orgánico acumulado en cuatro años · Mateco",
        href: "https://santaconcha.com/casos-de-exito/mateco/",
      },
      {
        value: "+30%",
        label: "Tráfico SEO tras reestructurar y migrar dos dominios · Universidad ISEP",
        href: "https://santaconcha.com/casos-de-exito/universidad-isep/",
      },
    ],
    faq: [
      {
        q: "¿Haces SEO freelance o con equipo?",
        a: "Dirijo el marketing de SANTACONCHA. Puedo intervenir yo en dirección/auditoría o activar equipo de contenidos, desarrollo y ads cuando el proyecto lo pide.",
      },
      {
        q: "¿Trabajas SEO local en Barcelona y alrededores?",
        a: "Sí. SEO local, multi-sede y expansión a otros mercados cuando la operación lo sostiene.",
      },
    ],
    related: [
      "google-ads-meta-ads",
      "analitica-cro",
      "direccion-de-marketing",
    ],
  },
  {
    slug: "google-ads-meta-ads",
    navLabel: "PPC / Ads",
    eyebrow: "Google Ads · Meta · Amazon · Programática",
    h1: "Especialista Google Ads y Meta Ads en Barcelona",
    title: "Especialista Google Ads y Meta Ads Barcelona",
    description:
      "Especialista en Google Ads y Meta Ads en Barcelona. Search, Shopping, PMax, YouTube, Social Ads, Amazon y programática con foco en CPA, ROAS y calidad de lead.",
    lead: "Publicidad de pago con señal limpia, estructura clara y presupuesto que se defiende en dirección. Señal antes que puja.",
    heroTags: [
      "Google Ads",
      "Meta Ads",
      "Shopping",
      "Performance Max",
      "YouTube",
      "Amazon Ads",
      "Programática",
    ],
    pitch: [
      "En SANTACONCHA conectamos lo que atrae con lo que ayuda a decidir: Search, Shopping, Performance Max, YouTube, Meta, TikTok, LinkedIn, Amazon, ChatGPT Ads y programática (Spotify y branding) cuando encajan, siempre medidos de punta a punta.",
      "Antes de tocar pujas audito conversión, tracking y landing. Optimizar ruido es caro. Matar campañas mediocres forma parte del trabajo.",
      "La estructura importa tanto como la creatividad: cuentas auditables, naming limpio y decisiones que se pueden explicar seis meses después sin adivinar.",
    ],
    services: [
      "Google Ads: Search, Shopping, PMax y YouTube",
      "Meta Ads: Facebook e Instagram",
      "Microsoft Ads (Bing)",
      "TikTok Ads y LinkedIn Ads",
      "Social Ads y campañas de pago en redes",
      "Amazon Ads y ChatGPT Ads",
      "Spotify, programática y campañas de branding",
      "Auditoría de campañas y remarketing",
      "Estructura de cuentas y naming auditables",
      "Control de CPA, ROAS y calidad de lead",
      "Alineación anuncio, landing y CRM",
      "Reporting para comité de dirección",
    ],
    method: [
      {
        title: "Señal primero",
        text: "Conversiones que valen dinero, GTM/GA4 auditados y exclusiones de basura. Sin eso, PMax amplifica el error.",
      },
      {
        title: "Estructura por intención",
        text: "Separación limpia de demanda, creatividades alineadas y un naming que permite auditar sin adivinar.",
      },
      {
        title: "Presupuesto con criterio",
        text: "Qué merece vivir y qué merece morir. Subir inversión solo cuando la señal y el margen lo aguantan.",
      },
    ],
    results: [
      {
        value: "+45%",
        label: "Clics con un 9% menos de presupuesto · Optimus",
        href: "https://santaconcha.com/casos-de-exito/optimus/",
      },
      {
        value: "+40%",
        label: "Tráfico de pago y ROI tras el primer año · Codorníu",
        href: "https://santaconcha.com/casos-de-exito/codorniu/",
      },
      {
        value: "−78%",
        label: "Coste por conversión en tres meses · Deletedoc",
        href: "https://santaconcha.com/casos-de-exito/deletedoc/",
      },
    ],
    faq: [
      {
        q: "¿Google Ads o Meta Ads?",
        a: "Depende de la intención. Demanda alta y catálogo → Google. Demanda latente y creativo → Meta. A menudo conviven con reglas claras de atribución.",
      },
      {
        q: "¿Gestionas cuentas grandes?",
        a: "Sí, con procesos de naming, QA y reporting. Si hace falta equipo, entra SANTACONCHA completa.",
      },
    ],
    related: ["seo-barcelona", "analitica-cro", "direccion-de-marketing"],
  },
  {
    slug: "analitica-cro",
    navLabel: "Analítica & CRO",
    eyebrow: "GA4 · server-side · CRO · dashboards",
    h1: "Analítica web y CRO en Barcelona",
    title: "Analítica web y CRO Barcelona",
    description:
      "Analítica web, GA4, medición en servidor, CRO y dashboards en Barcelona. Medición limpia, funnels y tests para que dirección decida con datos reales.",
    lead: "Del dato suelto a la decisión. Sin dashboards decorativos: tracking limpio, funnels claros y tests que cambian el resultado.",
    heroTags: [
      "GA4",
      "Tag Manager",
      "CRO",
      "Funnels",
      "A/B testing",
      "Server-side",
      "Dashboards",
    ],
    pitch: [
      "Atraer sin medir es opinar. En el modelo de SANTACONCHA, atraer, convertir, aprender, la analítica cierra el ciclo y el CRO convierte visitas en decisiones.",
      "Implemento y audito GA4, Tag Manager, medición en servidor, Search Console y cuadros de mando. Landings, funnels, tests A/B y voz de cliente cuando hay volumen suficiente para aprender de verdad.",
      "Sin señal fiable, SEO y Ads trabajan a ciegas. Por eso la medición es el cimiento de cualquier plan serio de performance.",
    ],
    services: [
      "Auditoría e implementación GA4 + GTM",
      "Search Console y reporting ejecutivo",
      "Medición en servidor (server-side)",
      "Paneles y cuadros de mando",
      "Definición de conversiones y eventos de negocio",
      "Funnels, landings y tests A/B",
      "Atribución y dashboards accionables",
      "Auditorías de medición de campañas y SEO",
      "Medición de email, WhatsApp y campañas offline",
      "Medición de redes sociales y contenidos orgánicos",
      "Voz de cliente",
      "Integraciones CRM y ecommerce",
      "Diagnóstico de fuga en el embudo",
    ],
    method: [
      {
        title: "Inventario de señal",
        text: "Qué medimos, por qué y quién lo usa. Eliminar microeventos que ensucian decisiones.",
      },
      {
        title: "Embudo visible",
        text: "Del clic al lead cerrado o al pedido. Donde se pierde dinero, ahí priorizamos CRO.",
      },
      {
        title: "Aprender en ciclos",
        text: "Hipótesis, test, decisión. Sin tests eternos ni pantallas que nadie mira.",
      },
    ],
    results: [
      {
        value: "×17",
        label: "Facturación anual desde el inicio del proyecto · Comics Barcelona",
        href: "https://santaconcha.com/casos-de-exito/comics-barcelona/",
      },
      {
        value: "2 clics",
        label: "Para encontrar el centro médico más cercano · Synlab",
        href: "https://santaconcha.com/casos-de-exito/synlab/",
      },
      {
        value: "5 áreas",
        label: "De datos sincronizadas entre CRM y ecommerce · Biocop",
        href: "https://santaconcha.com/casos-de-exito/biocop/",
      },
    ],
    faq: [
      {
        q: "¿Podéis desplegar una medición completa con Tag Manager y Consent Mode?",
        a: "Sí: plan de medición, dataLayer, Google Tag Manager, Consent Mode v2, GA4 y conversiones publicitarias. Configuro, valido, documento y dejo un sistema auditable, no una colección de etiquetas.",
      },
      {
        q: "¿Hacéis CRO sin tráfico?",
        a: "Sin volumen, priorizo heurística y velocidad. Los A/B llegan cuando hay señal suficiente.",
      },
    ],
    related: [
      "seo-barcelona",
      "google-ads-meta-ads",
      "direccion-de-marketing",
    ],
  },
  {
    slug: "direccion-de-marketing",
    navLabel: "Dirección",
    eyebrow: "Estrategia · redes · copy · inbound",
    h1: "Dirección de marketing digital en Barcelona",
    title: "Dirección de marketing digital Barcelona",
    description:
      "Dirección de marketing digital en Barcelona. Estrategia, inbound, redes, copy, email y equipo SANTACONCHA para marcas que quieren crecer con criterio.",
    lead: "Planes completos, no ejecuciones sueltas. Prioridades, presupuesto y una narrativa que conecta captación con ventas.",
    heroTags: [
      "Estrategia",
      "Redes sociales",
      "Copy",
      "WhatsApp",
      "Presupuesto",
      "Equipo",
      "SANTACONCHA",
    ],
    pitch: [
      "Como Director de Marketing de SANTACONCHA trazo la estrategia y coordino diseño, desarrollo, performance y redes en la misma mesa. Eso evita el clásico “cada proveedor tira para su lado”.",
      "El modelo de agencia cubre Crear, Atraer, Convertir, Analizar: web y producto, captación, conversión y aprendizaje. Yo aterrizo eso en roadmap y decisiones de negocio.",
      "Sirve si necesitas un partner de dirección, una segunda opinión seria o activar un equipo boutique desde Barcelona, con presencia comercial en Miami, sin perder el hilo estratégico.",
    ],
    services: [
      "Estrategia digital, consultoría e inbound",
      "Campañas 360° y lanzamientos (también infoproductos)",
      "Social Media: estrategia, contenidos y community",
      "Copywriting y contenidos",
      "Comunicación de marca",
      "Email marketing y automatización",
      "WhatsApp Business e integraciones",
      "Automatizaciones e IA aplicadas al marketing",
      "Briefings y alineación con negocio",
      "Priorización de presupuesto y canales",
      "Coordinación de diseño, dev, marketing y proveedores",
      "Coordinación de marca y prioridades web/producto",
      "Ferias, packaging y acciones offline cuando hace falta",
      "Reporting para comité de dirección",
      "Roadmaps trimestrales con owners claros",
      "Activación del equipo SANTACONCHA cuando escala",
    ],
    method: [
      {
        title: "Pregunta correcta",
        text: "¿Más clientes, salto de marca o menos trabajo repetitivo? Empezamos por el atasco real, no por el canal de moda.",
      },
      {
        title: "Una mesa",
        text: "Marketing, diseño y desarrollo conocen el mismo objetivo. La especialización suma cuando no se pelean entre sí.",
      },
      {
        title: "Decisiones con dueño",
        text: "Cada iniciativa tiene métrica, techo de riesgo y responsable. Sin eso, el plan es un PowerPoint.",
      },
    ],
    results: [
      {
        value: "8 países",
        label: "Gestionados desde una única plataforma multipaís · Twind",
        href: "https://santaconcha.com/casos-de-exito/twind/",
      },
      {
        value: "7 webs",
        label: "Y marcas bajo una arquitectura reutilizable · Ferrer",
        href: "https://santaconcha.com/casos-de-exito/ferrer/",
      },
      {
        value: "3 tecnologías",
        label: "Unificadas mediante un mismo design system · Alphega",
        href: "https://santaconcha.com/casos-de-exito/alphega-farmacia/",
      },
    ],
    faq: [
      {
        q: "¿Es consultoría o agencia?",
        a: "Puede ser dirección/consultoría o ejecución con equipo. Lo importante es no mezclar roles sin decirlo.",
      },
      {
        q: "¿Trabajáis solo en Barcelona?",
        a: "Sede en Granollers/Barcelona y presencia en Miami. Proyectos en España y mercados internacionales.",
      },
    ],
    related: ["seo-barcelona", "google-ads-meta-ads", "analitica-cro"],
  },
];

export function getExpertisePage(slug: string) {
  return expertisePages.find((p) => p.slug === slug);
}

export function getAllExpertiseSlugs() {
  return expertisePages.map((p) => p.slug);
}
