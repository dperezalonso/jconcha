import type { Locale } from "@/i18n/config";

type PageMeta = { title: string; description: string; ogTitle?: string };

export const pagesMeta: Record<
  Locale,
  {
    path: PageMeta;
    expertise: PageMeta;
    contact: PageMeta;
    privacy: PageMeta;
    cookies: PageMeta;
  }
> = {
  es: {
    path: {
      title: "Recorrido profesional",
      description:
        "Trayectoria de Javier Concha López: ventas, finanzas y proyectos digitales desde Efecto Esponja en 2010 hasta la dirección de marketing de SANTACONCHA.",
      ogTitle: "Recorrido profesional",
    },
    expertise: {
      title: "Expertise en marketing digital",
      description:
        "SEO, Ads (Google, Meta, Amazon, ChatGPT Ads), redes, copy, email, CRO y dirección de marketing. Capacidades de Javier Concha López y del equipo de SANTACONCHA.",
    },
    contact: {
      title: "Contacto",
      description:
        "Contacta con Javier Concha López para dirección de marketing, SEO, Google Ads, Meta Ads o proyectos con SANTACONCHA desde Barcelona y con presencia en Miami.",
    },
    privacy: {
      title: "Política de privacidad",
      description:
        "Política de privacidad de javierconcha.com: qué datos se tratan, con qué finalidad y cómo ejercer tus derechos.",
    },
    cookies: {
      title: "Política de cookies",
      description:
        "Política de cookies de javierconcha.com: qué cookies se usan, para qué y cómo gestionarlas.",
    },
  },
  en: {
    path: {
      title: "Professional path",
      description:
        "Career of Javier Concha López: sales, finance and digital projects from Efecto Esponja in 2010 to marketing leadership at SANTACONCHA.",
    },
    expertise: {
      title: "Digital marketing expertise",
      description:
        "SEO, Ads (Google, Meta, Amazon, ChatGPT Ads), social, copy, email, CRO and marketing leadership. Capabilities of Javier Concha López and the SANTACONCHA team.",
    },
    contact: {
      title: "Contact",
      description:
        "Contact Javier Concha López for marketing leadership, SEO, Google Ads, Meta Ads or projects with SANTACONCHA from Barcelona, with presence in Miami.",
    },
    privacy: {
      title: "Privacy policy",
      description:
        "Privacy policy of javierconcha.com: what data is processed, for what purpose, and how to exercise your rights.",
    },
    cookies: {
      title: "Cookie policy",
      description:
        "Cookie policy of javierconcha.com: which cookies are used, why, and how to manage them.",
    },
  },
  ca: {
    path: {
      title: "Recorregut professional",
      description:
        "Trajectòria de Javier Concha López: vendes, finances i projectes digitals des d’Efecto Esponja el 2010 fins a la direcció de màrqueting de SANTACONCHA.",
    },
    expertise: {
      title: "Expertise en màrqueting digital",
      description:
        "SEO, Ads (Google, Meta, Amazon, ChatGPT Ads), xarxes, copy, email, CRO i direcció de màrqueting. Capacitats de Javier Concha López i de l’equip de SANTACONCHA.",
    },
    contact: {
      title: "Contacte",
      description:
        "Contacta amb Javier Concha López per a direcció de màrqueting, SEO, Google Ads, Meta Ads o projectes amb SANTACONCHA des de Barcelona, amb presència a Miami.",
    },
    privacy: {
      title: "Política de privadesa",
      description:
        "Política de privadesa de javierconcha.com: quines dades es tracten, amb quina finalitat i com exercir els teus drets.",
    },
    cookies: {
      title: "Política de cookies",
      description:
        "Política de cookies de javierconcha.com: quines cookies s’usen, per a què i com gestionar-les.",
    },
  },
};
