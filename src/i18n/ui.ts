import type { Locale } from "@/i18n/config";

export type UiCopy = {
  skipToContent: string;
  menu: string;
  close: string;
  navAria: string;
  navMobileAria: string;
  footerNav: string;
  connect: string;
  homeAria: string;
  miamiPresence: string;
  languagesAria: string;
  langName: Record<Locale, string>;
  nav: { path: string; label: string }[];
  footerBlurb: string;
  privacy: string;
  cookies: string;
  home: {
    keyFigures: string;
    brands: string;
    myRule: string;
    myRuleText: string;
    seeSheet: string;
    seeAllExpertise: string;
    exploreAgency: string;
    myPath: string;
    converge: string;
    drag: string;
    seeFullPath: string;
    writeMe: string;
    officeAlt: string;
  };
  path: {
    label: string;
    title: string;
    lead: string;
    digitalAxis: string;
    digitalTitle: string;
    visitSite: string;
    stagesLabel: string;
    stagesTitle: string;
    stagesLead: string;
    marquee: string;
    nextChapter: string;
    letsTalk: string;
  };
  expertise: {
    label: string;
    title: string;
    context: string;
    brandsTitle: string;
    pitchProject: string;
    seeCases: string;
    back: string;
    talkProject: string;
    seeAgency: string;
    approach: string;
    results: string;
    seeCase: string;
    allCases: string;
    cover: string;
    servicesTitle: string;
    method: string;
    methodTitle: string;
    faq: string;
    faqTitle: string;
    also: string;
    otherAreas: string;
    fitTitle: string;
    startTalk: string;
    allAreas: string;
    breadcrumbHome: string;
    specializations: string;
  };
  contact: {
    label: string;
    role: string;
    bio: string;
    agencyNoteBefore: string;
    agencyNoteAfter: string;
    barcelona: string;
    miami: string;
    channels: {
      emailDetail: string;
      linkedinDetail: string;
      xDetail: string;
      instagramDetail: string;
    };
  };
  legal: {
    label: string;
    updated: string;
  };
};

export const ui: Record<Locale, UiCopy> = {
  es: {
    skipToContent: "Saltar al contenido",
    menu: "Menú",
    close: "Cerrar",
    navAria: "Navegación principal",
    navMobileAria: "Navegación móvil",
    footerNav: "Navegación",
    connect: "Conecta",
    homeAria: "Javier Concha · inicio",
    miamiPresence: "Barcelona · Presencia en Miami",
    languagesAria: "Idioma",
    langName: { es: "Español", en: "English", ca: "Català" },
    nav: [
      { path: "/recorrido", label: "Recorrido" },
      { path: "/expertise", label: "Expertise" },
      { path: "/contacto", label: "Contacto" },
    ],
    footerBlurb:
      "Cofundador y Director de Marketing de SANTACONCHA. SEO, Publicidad de Pago y Estrategia Digital desde Barcelona.",
    privacy: "Privacidad",
    cookies: "Cookies",
    home: {
      keyFigures: "Cifras clave",
      brands: "Marcas",
      myRule: "Mi regla",
      myRuleText: "Vender antes que medir. Medir antes que escalar.",
      seeSheet: "Ver ficha →",
      seeAllExpertise: "Ver expertise completo",
      exploreAgency: "Explorar SANTACONCHA",
      myPath: "Mi recorrido",
      converge: "Todo converge.",
      drag: "Arrastra para avanzar.",
      seeFullPath: "Ver trayectoria completa →",
      writeMe: "Escríbeme",
      officeAlt: "Oficina de SANTACONCHA en Granollers",
    },
    path: {
      label: "Recorrido",
      title: "Curiosidad, ventas y camino digital.",
      lead: "Mi conocimiento y mis habilidades de hoy no empezaron en un Máster: eso los catapultó, pero el comienzo fue vendiendo, construyendo y organizando proyectos reales. Se hace camino al andar.",
      digitalAxis: "Eje digital",
      digitalTitle: "Doce años en digital, con nombres y fechas.",
      visitSite: "Visitar web →",
      stagesLabel: "Escenarios y medios",
      stagesTitle: "Donde el trabajo se cuenta en voz alta.",
      stagesLead:
        "PPCCast, SEO Clinic, 4YFN, Twitch, aulas. El criterio se afila cuando hay que explicarlo en público. Hoy el peso está en la agencia; el escenario, cuando aporta.",
      marquee: "Análisis · Criterio · Resultado ✦",
      nextChapter: "El siguiente capítulo puede ser el tuyo.",
      letsTalk: "Hablemos",
    },
    expertise: {
      label: "Expertise",
      title: "Capacidades con impacto medible.",
      context: "Contexto",
      brandsTitle: "Marcas, sectores y escalas distintas.",
      pitchProject: "Plantear un proyecto",
      seeCases: "Ver casos en SANTACONCHA",
      back: "← Expertise",
      talkProject: "Hablemos del proyecto",
      seeAgency: "Ver SANTACONCHA",
      approach: "Enfoque",
      results: "Resultados",
      seeCase: "Ver caso ↗",
      allCases: "Todos los casos en SANTACONCHA →",
      cover: "Qué cubro",
      servicesTitle: "Servicios y entregables.",
      method: "Método",
      methodTitle: "Cómo trabajo.",
      faq: "Preguntas frecuentes",
      faqTitle: "Antes de escribirme.",
      also: "También",
      otherAreas: "Otras áreas de expertise.",
      fitTitle: "¿Encaja con lo que tienes entre manos?",
      startTalk: "Empezar conversación",
      allAreas: "Todas las áreas",
      breadcrumbHome: "Inicio",
      specializations: "Especializaciones",
    },
    contact: {
      label: "Contacto",
      role: "Cofundador · CMO",
      bio: "Dirección de marketing en SANTACONCHA. Trabajo desde Barcelona, con presencia comercial en Miami. Si tienes un atasco de captación, medición o equipo, escríbeme. Y si me quieres como ponente, como profesor o me quieres entrevistar, adelante: que no te dé vergüenza.",
      agencyNoteBefore: "Si el proyecto necesita equipo completo, escribe o ve a ",
      agencyNoteAfter: ".",
      barcelona:
        "Sede de SANTACONCHA en Granollers. Aquí se hace el equipo y aquí me tienes para vernos en persona.",
      miami:
        "Desde Brickell atendemos el mercado americano, en inglés o español y en horario del este.",
      channels: {
        emailDetail: "Respuesta normalmente en menos de 48 horas.",
        linkedinDetail: "Donde tengo más seguidores.",
        xDetail: "Ideas, oficio y lo que vaya saliendo.",
        instagramDetail: "Instagram.",
      },
    },
    legal: {
      label: "Legal",
      updated: "Última actualización: 19 de septiembre de 2026",
    },
  },
  en: {
    skipToContent: "Skip to content",
    menu: "Menu",
    close: "Close",
    navAria: "Primary navigation",
    navMobileAria: "Mobile navigation",
    footerNav: "Navigation",
    connect: "Connect",
    homeAria: "Javier Concha · home",
    miamiPresence: "Barcelona · Presence in Miami",
    languagesAria: "Language",
    langName: { es: "Español", en: "English", ca: "Català" },
    nav: [
      { path: "/recorrido", label: "Path" },
      { path: "/expertise", label: "Expertise" },
      { path: "/contacto", label: "Contact" },
    ],
    footerBlurb:
      "Cofounder and Head of Marketing at SANTACONCHA. SEO, Paid Media and Digital Strategy from Barcelona.",
    privacy: "Privacy",
    cookies: "Cookies",
    home: {
      keyFigures: "Key figures",
      brands: "Brands",
      myRule: "My rule",
      myRuleText: "Sell before you measure. Measure before you scale.",
      seeSheet: "View page →",
      seeAllExpertise: "See full expertise",
      exploreAgency: "Explore SANTACONCHA",
      myPath: "My path",
      converge: "Everything converges.",
      drag: "Drag to move forward.",
      seeFullPath: "See the full path →",
      writeMe: "Write to me",
      officeAlt: "SANTACONCHA office in Granollers",
    },
    path: {
      label: "Path",
      title: "Curiosity, sales and a digital path.",
      lead: "The knowledge and skills I have today did not start in a Master’s. That catapulted them — but it began by selling, building and running real projects. The path is made by walking.",
      digitalAxis: "Digital track",
      digitalTitle: "Twelve years in digital, with names and dates.",
      visitSite: "Visit site →",
      stagesLabel: "Stages and media",
      stagesTitle: "Where the work is told out loud.",
      stagesLead:
        "PPCCast, SEO Clinic, 4YFN, Twitch, classrooms. Judgment sharpens when you have to explain it in public. Today the weight sits with the agency; the stage, when it adds something.",
      marquee: "Analysis · Judgment · Result ✦",
      nextChapter: "The next chapter can be yours.",
      letsTalk: "Let’s talk",
    },
    expertise: {
      label: "Expertise",
      title: "Capabilities with measurable impact.",
      context: "Context",
      brandsTitle: "Brands, sectors and different scales.",
      pitchProject: "Pitch a project",
      seeCases: "See cases at SANTACONCHA",
      back: "← Expertise",
      talkProject: "Let’s talk about the project",
      seeAgency: "See SANTACONCHA",
      approach: "Approach",
      results: "Results",
      seeCase: "View case ↗",
      allCases: "All cases at SANTACONCHA →",
      cover: "What I cover",
      servicesTitle: "Services and deliverables.",
      method: "Method",
      methodTitle: "How I work.",
      faq: "Frequently asked questions",
      faqTitle: "Before you write.",
      also: "Also",
      otherAreas: "Other areas of expertise.",
      fitTitle: "Does this match what you have on the table?",
      startTalk: "Start a conversation",
      allAreas: "All areas",
      breadcrumbHome: "Home",
      specializations: "Specializations",
    },
    contact: {
      label: "Contact",
      role: "Cofounder · CMO",
      bio: "Head of Marketing at SANTACONCHA. I work from Barcelona, with commercial presence in Miami. If you are stuck on acquisition, measurement or team, write to me. And if you want me as a speaker, a teacher, or you’d like to interview me — go ahead. No need to be shy.",
      agencyNoteBefore: "If the project needs a full team, write or go to ",
      agencyNoteAfter: ".",
      barcelona:
        "SANTACONCHA’s office in Granollers. The team is here, and I am here if you want to meet in person.",
      miami:
        "From Brickell we serve the American market, in English or Spanish, on Eastern Time.",
      channels: {
        emailDetail: "I usually reply in under 48 hours.",
        linkedinDetail: "Where I have the most followers.",
        xDetail: "Ideas, craft, and whatever comes next.",
        instagramDetail: "Instagram.",
      },
    },
    legal: {
      label: "Legal",
      updated: "Last updated: 19 September 2026",
    },
  },
  ca: {
    skipToContent: "Salta al contingut",
    menu: "Menú",
    close: "Tanca",
    navAria: "Navegació principal",
    navMobileAria: "Navegació mòbil",
    footerNav: "Navegació",
    connect: "Connecta",
    homeAria: "Javier Concha · inici",
    miamiPresence: "Barcelona · Presència a Miami",
    languagesAria: "Idioma",
    langName: { es: "Español", en: "English", ca: "Català" },
    nav: [
      { path: "/recorrido", label: "Recorregut" },
      { path: "/expertise", label: "Expertise" },
      { path: "/contacto", label: "Contacte" },
    ],
    footerBlurb:
      "Cofundador i Director de Màrqueting de SANTACONCHA. SEO, Publicitat de Pagament i Estratègia Digital des de Barcelona.",
    privacy: "Privadesa",
    cookies: "Cookies",
    home: {
      keyFigures: "Xifres clau",
      brands: "Marques",
      myRule: "La meva regla",
      myRuleText: "Vendre abans de mesurar. Mesurar abans d’escalar.",
      seeSheet: "Veure fitxa →",
      seeAllExpertise: "Veure l’expertise complet",
      exploreAgency: "Explorar SANTACONCHA",
      myPath: "El meu recorregut",
      converge: "Tot convergeix.",
      drag: "Arrossega per avançar.",
      seeFullPath: "Veure la trajectòria completa →",
      writeMe: "Escriu-me",
      officeAlt: "Oficina de SANTACONCHA a Granollers",
    },
    path: {
      label: "Recorregut",
      title: "Curiositat, vendes i camí digital.",
      lead: "El meu coneixement i les meves habilitats d’avui no van començar en un Màster: això els va catapultar, però el començament va ser venent, construint i organitzant projectes reals. Es fa camí en caminar.",
      digitalAxis: "Eix digital",
      digitalTitle: "Dotze anys en digital, amb noms i dates.",
      visitSite: "Visitar web →",
      stagesLabel: "Escenaris i mitjans",
      stagesTitle: "On la feina s’explica en veu alta.",
      stagesLead:
        "PPCCast, SEO Clinic, 4YFN, Twitch, aules. El criteri s’afila quan cal explicar-lo en públic. Avui el pes és a l’agència; l’escenari, quan aporta.",
      marquee: "Anàlisi · Criteri · Resultat ✦",
      nextChapter: "El pròxim capítol pot ser el teu.",
      letsTalk: "Parlem-ne",
    },
    expertise: {
      label: "Expertise",
      title: "Capacitats amb impacte mesurable.",
      context: "Context",
      brandsTitle: "Marques, sectors i escales distintes.",
      pitchProject: "Plantejar un projecte",
      seeCases: "Veure casos a SANTACONCHA",
      back: "← Expertise",
      talkProject: "Parlem del projecte",
      seeAgency: "Veure SANTACONCHA",
      approach: "Enfocament",
      results: "Resultats",
      seeCase: "Veure cas ↗",
      allCases: "Tots els casos a SANTACONCHA →",
      cover: "Què cubreixo",
      servicesTitle: "Serveis i lliurables.",
      method: "Mètode",
      methodTitle: "Com treballo.",
      faq: "Preguntes freqüents",
      faqTitle: "Abans d’escriure’m.",
      also: "També",
      otherAreas: "Altres àrees d’expertise.",
      fitTitle: "Encaixa amb el que tens entre mans?",
      startTalk: "Començar conversa",
      allAreas: "Totes les àrees",
      breadcrumbHome: "Inici",
      specializations: "Especialitzacions",
    },
    contact: {
      label: "Contacte",
      role: "Cofundador · CMO",
      bio: "Direcció de màrqueting a SANTACONCHA. Treballo des de Barcelona, amb presència comercial a Miami. Si tens un embús de captació, mesura o equip, escriu-me. I si em vols com a ponent, com a professor o em vols entrevistar, endavant: que no et faci vergonya.",
      agencyNoteBefore: "Si el projecte necessita un equip complet, escriu o ves a ",
      agencyNoteAfter: ".",
      barcelona:
        "Seu de SANTACONCHA a Granollers. Aquí es fa l’equip i aquí em tens per veure’ns en persona.",
      miami:
        "Des de Brickell atenem el mercat americà, en anglès o castellà i en horari de l’est.",
      channels: {
        emailDetail: "Resposta normalment en menys de 48 hores.",
        linkedinDetail: "On tinc més seguidors.",
        xDetail: "Idees, ofici i el que vagi sortint.",
        instagramDetail: "Instagram.",
      },
    },
    legal: {
      label: "Legal",
      updated: "Darrera actualització: 19 de setembre de 2026",
    },
  },
};

export function getUi(locale: Locale): UiCopy {
  return ui[locale];
}
