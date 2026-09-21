import { site } from "@/lib/site";

export const nav = [
  { href: "/recorrido", label: "Recorrido" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const chapters = {
  perspective: "01 · La perspectiva",
  receipts: "02 · Los recibos",
  craft: "03 · El oficio",
  venture: "04 · La agencia",
  proof: "05 · La confianza",
  arc: "06 · El arco",
  press: "07 · En medios",
  mission: "08 · Ahora",
} as const;

export const hero = {
  role: "Especialista en marketing digital · Barcelona y Miami",
  brand: ["Javier", "Concha"],
  headline: "Hago que el SEO y la publicidad vendan. Oficio, no teatro.",
  support:
    "Marketing Digital con criterio de negocio. Con SANTACONCHA te damos cobertura desde Barcelona y Miami a cualquier parte del mundo.",
  ctas: [
    { href: "/contacto", label: "Hablemos", variant: "solid" as const },
    {
      href: site.social.agency,
      label: "Ver SANTACONCHA",
      variant: "ghost" as const,
      external: true,
    },
  ],
  scroll: "Scroll",
};

export const brands = [
  "Codorníu",
  "Nestlé",
  "Ferrer",
  "Sanofi",
  "Mateco",
  "Sportium",
  "Synlab",
  "Holmes Place",
  "Optimus",
  "Sotheby's",
  "Mary Kay",
  "Windoor",
  "Balvi",
  "Comics Barcelona",
  "Training Park",
  "Chromessence",
];

export const ticker = [
  { value: "2010", label: "inicio digital · Efecto Esponja" },
  { value: "2019", label: "nace SANTACONCHA" },
  { value: site.socialReach, label: "seguidores en redes (total)" },
  { value: "5", label: "proyectos como socio" },
  { value: "BCN · MIA", label: "presencia en dos mercados" },
  { value: "2000", label: "inicio en inversión" },
];

export const home = {
  manifestoLabel: chapters.perspective,
  manifestoTitle: "No planeé una agencia. Planeé resultados.",
  manifestoLead:
    "Antes del marketing digital vendí fruta, sofás, tecnología y productos financieros. Esa etapa comercial me enseñó lo caro que es un “sí”… y lo barato que resulta el humo.",
  manifestoBody: [
    "Por eso diseño estrategias al revés de lo habitual: primero el negocio, después el canal. Rankings, clics e impresiones son medios. Lo que presento en dirección son leads que cierran, margen y clientes que vuelven.",
    "Hoy dirijo el Marketing de SANTACONCHA: una agencia boutique donde todas las especialidades van de la mano. Y con un socio, Julián, que me complementa en la parte de desarrollo a un nivel que pocos alcanzan. **Somos el EQUIPO A y nos encanta que los planes salgan bien.**",
    "Desde que creé Efecto Esponja en 2010 sigo haciendo lo mismo que en aquellas tiendas: escuchar, entender qué frena la venta y quitarlo de en medio. Ahora lo hago con datos, con un equipo que ejecuta como pocos y a otra escala.",
    "Mi trabajo no termina en recomendar: priorizo, explico el porqué y acompaño la ejecución o la lidero hasta que el resultado se puede medir. Si algo no mueve negocio, no merece ocupar el roadmap.",
  ],

  proofLabel: chapters.receipts,
  proofTitle: "La historia, en números.",
  proofLead:
    "Los grandes hitos llegan con muchas pequeñas victorias. Y la batalla del día a día no cesa.",
  proof: [
    { value: "2010", label: "inicio del oficio digital · Efecto Esponja" },
    { value: "2019", label: "fundación SANTACONCHA" },
    { value: site.socialReach, label: "seguidores en redes (suma)" },
    {
      value: "5",
      label: "2 proyectos cofundados, 3 como socio (y más en camino)",
    },
  ],

  focusLabel: chapters.craft,
  focusTitle: "Cuatro frentes. Un mismo criterio.",
  focusLead:
    "No hago de todo un poco. Profundizo donde el retorno es medible y donde puedo responder por el resultado.",
  focus: [
    {
      title: "SEO técnico, local e internacional",
      text: "Arquitectura, WPO, contenidos SEO, linkbuilding, migraciones, ASO y reputación online. SEO local e internacional, GEO y reporting para atraer a quien puede comprar.",
      tags: ["WPO", "Linkbuilding", "GEO", "ASO", "Reputación", "Migraciones"],
      href: "/expertise/seo-barcelona",
    },
    {
      title: "Publicidad de pago",
      text: "Google Ads, Bing, Shopping, PMax, YouTube, Meta, TikTok, LinkedIn, Amazon y ChatGPT Ads. Social Ads, programática, branding, remarketing y auditoría de campañas.",
      tags: ["Google Ads", "Meta", "Amazon", "ChatGPT Ads", "Programática", "Social Ads"],
      href: "/expertise/google-ads-meta-ads",
    },
    {
      title: "Analítica, CRO y medición",
      text: "GA4, Tag Manager, medición en servidor, funnels, landings y tests A/B. Paneles, voz de cliente, email, WhatsApp y CRM para que dirección decida con datos reales.",
      tags: ["GA4", "Server-side", "CRO", "Dashboards", "Voz de cliente"],
      href: "/expertise/analitica-cro",
    },
    {
      title: "Dirección de marketing",
      text: "Estrategia, consultoría, inbound y campañas 360°. Redes, copy, email, WhatsApp, IA y el equipo (diseño, dev y marketing) en la misma mesa. Roadmap con dueño y métrica.",
      tags: ["Estrategia", "Inbound", "Redes", "Copy", "WhatsApp", "Email"],
      href: "/expertise/direccion-de-marketing",
    },
  ],

  hobbiesLabel: "Fuera de la oficina",
  hobbiesTitle: "Lo que me mantiene vivo (y curioso).",
  hobbiesLead:
    "El oficio se nutre de lo que pasa fuera del Excel. Estas son las cosas que me ocupan la cabeza cuando no estoy en campañas.",
  hobbies: [
    {
      title: "Leer e investigar",
      text: "Absorbo sin parar: negocios, marketing, tecnología y lo que se cueza en el sector. La curiosidad es el hábito.",
    },
    {
      title: "Hijo, familia y amigos",
      text: "Lo importante de verdad: pasar un buen rato con mi hijo, con la familia y con los amigos.",
    },
    {
      title: "Competición",
      text: "Cualquier juego que implique competir. Me gusta ganar… y aprender cuando pierdo.",
    },
    {
      title: "Inversiones y negocios",
      text: "Invierto en bolsa desde alrededor del año 2000. Antes del marketing digital ya leía mercados, gestionaba riesgo y escribía sobre ello. Y sobre los negocios, mi mente no para quieta: siempre analizando cualquier empresa y pensando en nuevos proyectos y vías de ingresos.",
    },
    {
      title: "Coches",
      text: "Los coches siempre me han gustado por las sensaciones, por la belleza, por ser una de las máquinas más complejas al alcance de cualquiera. Desde que tenía 5 años y me sabía todas las marcas y modelos, hasta ahora que puedo disfrutar de algunos.",
    },
  ],

  agencyLabel: chapters.venture,
  agencyTitle: "SANTACONCHA: donde esto escala de verdad.",
  agencyText:
    "Desde 2019 dirijo el marketing junto a Julián Santamaría. El equipo trabaja desde Granollers (Barcelona), con presencia comercial y servicio al mercado americano desde Miami.",
  agencyText2:
    "Cuando un proyecto necesita más que estrategia (web, ecommerce, software, marca o producción), entra un equipo que ya sabe cómo trabajo. Ese es el multiplicador.",
  agencyPoints: [
    { k: "Marketing digital", v: "SEO, SEM, Social Ads, email, CRO y analítica" },
    { k: "Diseño y marca", v: "Identidad, UX/UI y dirección creativa" },
    { k: "Desarrollo", v: "Web, ecommerce, software a medida e IA" },
    { k: "Y lo de fuera", v: "Ferias, packaging, ON/OFF cuando el proyecto lo pide" },
  ],

  quotesLabel: chapters.proof,
  quotesTitle: "Lo dicen quienes lo han vivido.",
  quotes: [
    {
      quote:
        "He trabajado con Javier en mil escenarios: como compañeros de máster, en proyectos conjuntos y, finalmente, contratándolo para mi propio emprendimiento; un ecommerce DTC de sportswear. Tras estos años, puedo decir que es uno de los perfiles digitales más completos que conozco. Su enfoque a negocio y su capacidad para entender los retos de una marca DTC lo hacen destacar sobre la media. Es honesto, sabe de lo que habla y, sobre todo, sabe cómo hacer crecer un proyecto. Recomendable al 100% para cualquier reto digital serio.",
      author: "Darío González Martínez",
      role: "Cofundador y Marketing Manager · Monbel",
    },
    {
      quote:
        "He colaborado con Javier y su equipo en varios proyectos y mi experiencia ha sido muy positiva. Destacaría especialmente su gran conocimiento en marketing digital, su capacidad analítica y su enfoque estratégico a la hora de plantear soluciones orientadas a resultados. Además de su profesionalidad, valoro mucho su cercanía, disponibilidad y la facilidad para trabajar con él. Siempre aporta ideas con criterio, entiende rápidamente las necesidades del proyecto y busca la mejor forma de aportar valor. En definitiva, es un gran profesional con el que da gusto colaborar. Sin duda, lo recomendaría a cualquier empresa que busque un partner de confianza en el ámbito digital.",
      author: "Gonzalo Giménez-Salinas Vidal",
      role: "Marketing digital · MGS",
    },
    {
      quote:
        "Santaconcha es el mejor proveedor de servicios online que he tenido en toda mi trayectoria como CMO en Windoor. Su rendimiento es altísimo y los resultados se notan. Pero más allá de eso, su visión estratégica y acompañamiento es vital para optimizar el rendimiento de cualquier campaña online. Javier es un referente en el terreno digital y, junto al resto del equipo, un auténtico dream team.",
      author: "Sergi Ponsa",
      role: "Marketing & Sales Director · Windoor",
    },
    {
      quote:
        "Trabajando en Raventós Codorníu decidí abrir un pitch entre agencias digitales para que llevasen nuestras campañas en Google. Tras un año optimizando hemos generado un incremento del 40% en tráfico de pago y ROI. Javier es un profesional digital con muchísimo conocimiento en todas las herramientas de Google y SEO técnico. Trato cercano y proactivo: no tienes que ir detrás.",
      author: "Andrea Lorca",
      role: "Ecommerce & Digital Marketing Manager · Codorníu",
    },
    {
      quote:
        "Conocí a Javier Concha porque se interesó por una de mis formaciones. Luego me presentó una propuesta y los resultados de la prueba piloto fueron tan excepcionales que empezamos a trabajar juntos. Desde que le tenemos con nosotros los resultados se han doblado y la calidad de los leads ha mejorado notablemente. Es el partner que necesitaba.",
      author: "Héctor Arderius",
      role: "Fundador · Tristán el Subastero",
    },
    {
      quote:
        "Agradecer a Santaconcha por cuatro años excepcionales. Desde la creación de nuestro blog hasta la gestión de desarrollos y contenidos, su dedicación ha sido vital para el éxito de Sportium. Agradecer a Arnau, Julián y Javier: han sido más que una agencia, socios creativos, confiables y eficientes.",
      author: "Jaouad Berrissoul",
      role: "Director de Marketing · Sportium",
    },
    {
      quote:
        "Hemos tenido una muy buena experiencia trabajando con Javier de Santa Concha, son rápidos y muy profesionales. Los recomiendo.",
      author: "Laura Herrero",
      role: "Cliente",
    },
    {
      quote:
        "El nivel de servicio de Javier de SantaConcha y su compromiso hacia el cliente se destaca por el nivel de detalle de los informes, su capacidad para profundizar en la presentación de resultados y su perseverancia a la hora de investigar para resolver problemas técnicos complejos. Trato muy cercano, lo recomiendo sin duda.",
      author: "Vanessa O'Bree",
      role: "Codorníu",
    },
    {
      quote:
        "Después de años con varias empresas de marketing online de Barcelona con resultados cuestionables, en 2018 nos recomendaron los servicios de Javier. Desde el primer momento nos ha demostrado su conocimiento y gran experiencia en campañas SEM: más calidad de leads, mejor CTR, más conversión y reducción de costes. Os lo recomiendo al 100%.",
      author: "Maarten Moolenbeek",
      role: "Next Destinium",
    },
    {
      quote:
        "SANTACONCHA es una agencia con gran experiencia en marketing digital. Nos asesora desde hace tiempo en temas de SEO/SEM con gran acierto y profesionalidad. Es una empresa de gran confianza y seriedad.",
      author: "Sonia Morera",
      role: "Marketing · Canaletas",
    },
    {
      quote:
        "Por primera vez puedo decir que trabajo con una empresa de marketing digital que sabe lo que hace. Grandes profesionales y muy responsables.",
      author: "Felip Andanuche",
      role: "Marketing & Communication · MGS",
    },
    {
      quote:
        "SANTACONCHA es mucho más que una agencia: es tu partner y consejero de negocio. Su visión global en estrategia digital te ayuda a mejorar resultados, con un performance muy por encima de lo esperado.",
      author: "Sérgio Claudino",
      role: "Holmes Place España",
    },
    {
      quote:
        "Buscaba una agencia dinámica, proactiva y digitalmente puntera para apoyar nuestra estrategia de marketing digital, pero pequeña, cercana y comprometida. Santa Concha entendió nuestra dinámica enseguida. Muy satisfechos con los resultados y con el equipo.",
      author: "Cécile Canivet",
      role: "Marketing & Communication Director · Mateco",
    },
    {
      quote:
        "Normalmente he tenido que estar encima de las agencias para obtener resultados. Con Santa Concha no es el caso: proponen mejoras continuamente y se comprometen. Los he sumado a la estrategia de marketing en diferentes proyectos.",
      author: "Orlando Marín",
      role: "Digital Business Director · Balvi",
    },
    {
      quote:
        "Les contacté porque eran referentes en el mundo del marketing digital y desde entonces no nos hemos separado. Honestidad, profesionalidad, flexibilidad y eficiencia. Un valor seguro.",
      author: "Daniel Ruiz",
      role: "Digital Transformation · Ferrer",
    },
    {
      quote:
        "SANTACONCHA es un partner más que una agencia al uso: una extensión de nuestro departamento. Una de las mejores agencias en Digital y Performance Marketing de Barcelona. Trato cercano, amable, personal y directo.",
      author: "Gemma Pascual",
      role: "Digital Marketing · Alliance Healthcare",
    },
    {
      quote:
        "No eran una agencia de marketing sin más, y no me equivoqué. Encantados con el rebranding, la web y la estrategia digital, que nos ha dado resultados muy positivos desde el primer día.",
      author: "Marta Bonet",
      role: "Marketing · Chromessence",
    },
    {
      quote:
        "El mejor partner para confiar en la estrategia digital de una marca.",
      author: "Maite del Mundo",
      role: "Cofundadora · Creatique",
    },
    {
      quote:
        "Todo el equipo son unos grandes profesionales. Entregables de alta calidad, 100% optimización para SEO y usabilidad. Unos cracks.",
      author: "Marc Gaja",
      role: "Gerente · ISEP",
    },
    {
      quote: "Un trato de 10. Trabajo con ellos para llevar mis campañas de marketing.",
      author: "David Gutierrez",
      role: "Compañero de máster · KSchool",
    },
    {
      quote:
        "Haber contratado a Santaconcha para el desarrollo, expansión y mantenimiento de nuestro ecommerce supuso un antes y un después. No hay palabras para agradecer lo que Javier y Julián han hecho por el éxito de nuestra tienda online.",
      author: "Carlos Junyent",
      role: "Gerente · Copytop",
    },
  ],

  arcLabel: chapters.arc,
  arcTitle: "Con esfuerzo y pasión he llegado hasta aquí, y aún queda mucho.",
  arcLead: "De la venta a pie de calle a dirigir una agencia boutique.",

  pressLabel: chapters.press,
  pressTitle: "Cuando el trabajo se cuenta en voz alta.",
  pressLead:
    "Entrevistas, talleres y aulas. El criterio se afila cuando hay que explicarlo en público.",
  press: [
    {
      name: "PPCCast",
      detail: "Entrevista · Agencias de PPC por dentro",
    },
    {
      name: "SEO Clinic",
      detail: "Ponencia · Posicionamiento",
    },
    {
      name: "Barcelona Digital Talent",
      detail: "Entrevista Twitch · SEO y trayectoria",
    },
    {
      name: "4YFN · Mobile World Congress",
      detail: "Taller SEO/SEM con KSchool",
    },
    {
      name: "PPC Fest",
      detail: "Patrocinio · Publicidad de pago",
    },
    {
      name: "Semrush",
      detail: "Colaboraciones y conversaciones del sector SEO/SEM",
    },
    {
      name: "Borsadiner",
      detail: "Ponencia · Inversión",
    },
    {
      name: "Barcelona Trading Point",
      detail: "Cofundador · Evento bursátil",
    },
  ],

  ctaLabel: chapters.mission,
  ctaTitle: "Desde 2010 haciendo crecer proyectos. El siguiente puede ser el tuyo.",
  ctaText:
    "Dirección de marketing, una segunda opinión seria sobre SEO y SEM, o un proyecto completo con SANTACONCHA. Sin formularios eternos.",
  ctaSign: "Firmado,",
  ctaName: site.fullName,
};

/** Eje digital / marketing (destacado) */
export const timelineDigital = [
  {
    year: "2019 — hoy",
    title: "Cofundador y Director de Marketing · SANTACONCHA",
    text: "Cofundé la agencia con Julián. Yo llevo la dirección de marketing: captación, SEO/GEO, campañas y la conversación con el cliente. El equipo cubre diseño y desarrollo. Sin helicóptero. Con café, un plan y la manía de que salga bien.",
  },
  {
    year: "2025 — hoy",
    title: "Partner & CMO · Academia de Pensamiento Diferencial",
    text: "Pep Torres lleva décadas demostrando que el resultado extraordinario es método, no magia. Como partner y CMO ayudo a que ese método llegue a más gente: producto, captación y la pieza digital de la Academia.",
  },
  {
    year: "2023 — hoy",
    title: "Cofundador · CAPTAMOS TU LEAD",
    text: "Una forma más suelta de contar lo que ya sabemos hacer: captación, comunicación y performance para proyectos que quieren menos corsé. Misma exigencia, otro tono. Hasta REME, la mascota del chat, forma parte del juego.",
  },
  {
    year: "2017 — 2024",
    title: "Docencia · KSchool, UAB, UB y TeamLabs",
    text: "Módulo de SEO para CMS en el Máster SEO-SEM de KSchool (WordPress, PrestaShop, Magento). Clases en la UAB, el posgrado de marketing farmacéutico de la UB y analítica en el grado LEINN de TeamLabs. Enseñar obliga a poner en claro lo que haces cada día.",
  },
  {
    year: "2017 — 2020",
    title: "Reactiva · de especialista a socio y CMO",
    text: "Entré trazando SEO, WPO, SEM y analítica. Acabé socio y CMO: estrategia de clientes (ONG, ocio, ecommerce, industria, telco) y de la propia agencia. De ahí salimos Julián y yo a montar SANTACONCHA, aún hermanados con ellos.",
  },
  {
    year: "2016 — 2017",
    title: "Traffic Manager · Clinmoo",
    text: "Agencia de real estate. Auditoría SEO, WPO de landings, PPC en Google y Facebook/Instagram, y un sistema de atribución con reporting automático. Promotoras como Núñez y Navarro, Aelca o Forcadell, y proyectos como BADI.",
  },
  {
    year: "2013 — 2015",
    title: "CMO · Trustivity",
    text: "Startup de reseñas para ecommerce: fui parte del equipo creador. Todo lo que no era programar: producto, contenidos, captación, ferias, partnerships, legal e internacionalización. Clientes como Movistar, Promofarma o Electrocosto.",
  },
  {
    year: "2010 — 2013",
    title: "Efecto Esponja y el salto al digital",
    text: "Blog de finanzas y economía: Top 10 «Mejor blog de negocios» en Premios Bitácoras 2011, puesto 42 en el ranking Coguan y 78 en ebuzzing/wikio España. Ponencia en Borsadiner, comunidad en bolsa.com… y el empujón que me llevó al marketing digital.",
  },
];

/** Alias para home (primeros hitos digitales) */
export const timeline = timelineDigital;

/**
 * Experiencias previas (ventas, eventos, finanzas…).
 * No se ocultan: se resumen por lo que aportan al marketing actual.
 */
export const timelineRoots = {
  label: "Antes del marketing digital",
  title: "Lo que no se ve en un CV de SEO… y lo cambia todo.",
  lead: "Ventas, negocio familiar, finanzas y eventos antes de entrar en el mundo digital. No son un adorno: son la base de cómo pienso captación, margen y personas.",
  items: [
    {
      title: "Ventas a pie de calle y B2B",
      text: "Frutería familiar, sofás de lujo (Natuzzi, Grassoler, Divatto), electrónica (MediaMarkt, LG, Garmin), puerta fría en banca y formación. Aprendes a escuchar objeciones de verdad.",
    },
    {
      title: "Qué aportan hoy",
      text: "Empatía con quien vende, rigor con el dinero y paciencia con el proceso. Por eso en marketing empiezo por el negocio y no por la herramienta.",
    },
  ],
};

/** Hitos del mundo bursátil / inversión — bloque propio en recorrido */
export const marketsArc = {
  label: "Mundo bursátil",
  title: "Antes del SEO, ya leía el mercado.",
  lead: "Invierto en bolsa desde alrededor del año 2000. Esa etapa no es nostalgia: es el criterio con el que miro riesgo, señal y paciencia en cualquier campaña.",
  milestones: [
    {
      title: "Efecto Esponja",
      detail: "Blog · economía y finanzas",
      text: "Top 10 «Mejor blog de negocios» en Premios Bitácoras 2011, puesto 42 en el ranking Coguan de blogs de economía/finanzas y 78 en ebuzzing/wikio España. El blog que me empujó al marketing digital.",
    },
    {
      title: "bolsa.com",
      detail: "Comunidad · seleccionado como gurú",
      text: "Perfil activo con miles de seguidores (más de 1.800 ya en 2011; cerca de 4.600 en 2015). Conversación diaria con traders e inversores, no solo artículos sueltos.",
    },
    {
      title: "Borsadiner 2011",
      detail: "Ponente · stand Bolsa.com",
      text: "Ponencia «Especular de forma fácil y consistente» en la feria del dinero, la bolsa y la inversión (Palacio de Congresos de Cataluña). Escenario real ante el sector.",
    },
    {
      title: "Barcelona Trading Point",
      detail: "Cofundador · CCO",
      text: "Evento de traders para traders: +90 conferencias, +1.000 asistentes y +60 sponsors. Punto de encuentro aún vivo online.",
      href: "http://bcntradingpoint.com/",
    },
    {
      title: "elmundobursatil.es",
      detail: "Análisis técnico",
      text: "Escribí análisis técnicos para el medio. Traducir el gráfico a una tesis clara, el mismo músculo que hoy uso para priorizar campañas.",
    },
    {
      title: "Invertia · moneycall",
      detail: "Foro · ~2002–2006",
      text: "Forero activo con el nick moneycall. Unos años de conversación diaria sobre mercados antes de que existiera «marca personal».",
    },
  ],
};

export const stages = [
  { name: "PPC Fest", detail: "Patrocinio · Publicidad de pago" },
  { name: "4YFN · MWC", detail: "Taller SEO/SEM · KSchool" },
  { name: "Barcelona Digital Talent", detail: "Entrevista Twitch" },
  { name: "Borsadiner", detail: "Ponencia · inversión" },
  { name: "PPCCast", detail: "Entrevista · agencias de PPC" },
  { name: "Semrush", detail: "Colaboraciones del sector" },
  { name: "SEO Clinic", detail: "Ponencia · posicionamiento" },
  { name: "Barcelona Trading Point", detail: "Cofundador · evento bursátil" },
];

export const expertise = {
  intro:
    "El marketing digital solo vale si mueve negocio. Estas son las áreas en las que profundizo, y donde SANTACONCHA suma diseño y desarrollo cuando el proyecto lo pide.",
  areas: [
    {
      title: "SEO técnico, local e internacional",
      href: "/expertise/seo-barcelona",
      cta: "Experto SEO en Barcelona",
      items: [
        "Auditorías técnicas y de contenido",
        "Arquitectura de información y crawl budget",
        "SEO local e internacional",
        "GEO: visibilidad en buscadores con IA",
        "WPO y Core Web Vitals",
      ],
    },
    {
      title: "Publicidad de pago (PPC / SEM)",
      href: "/expertise/google-ads-meta-ads",
      cta: "Google Ads y Meta Ads",
      items: [
        "Google Ads: Search, Shopping, Performance Max y YouTube",
        "Meta Ads: Facebook e Instagram",
        "Bing, TikTok, LinkedIn y remarketing",
        "Estructura de cuentas y naming",
        "Control de CPA, ROAS y calidad de lead",
      ],
    },
    {
      title: "Analítica, CRO y medición",
      href: "/expertise/analitica-cro",
      cta: "Analítica y CRO",
      items: [
        "Google Analytics 4 y Tag Manager",
        "Search Console y reporting ejecutivo",
        "Funnels, landings y tests A/B",
        "Atribución, email y WhatsApp",
        "Integraciones con CRM y ecommerce",
      ],
    },
    {
      title: "Estrategia y dirección de marketing",
      href: "/expertise/direccion-de-marketing",
      cta: "Dirección de marketing",
      items: [
        "Planes digitales de punta a punta",
        "Coordinación de diseño, dev y marketing",
        "Priorización de presupuesto y canales",
        "Ferias y acciones offline cuando hace falta",
        "Reporting para comité de dirección",
      ],
    },
  ],
  brands:
    "Marcas con las que he trabajado, directa o indirectamente: Codorníu, Nestlé, Ferrer, Sanofi, Mateco, Sportium, Synlab, Optimus, Holmes Place, Sotheby's, Mary Kay, Comics Barcelona, Windoor, Balvi, Chromessence y Training Park, entre otras.",
};

export const contact = {
  title: "Cuéntame qué hay que mover.",
  text: "Dirección de marketing, una segunda opinión seria sobre SEO y SEM, o un proyecto con SANTACONCHA. Respondo yo.",
  note: "Para proyectos de agencia también puedes ir a santaconcha.com. Para una conversación directa, mejor por aquí, LinkedIn o X.",
};
