import type { Locale } from "@/i18n/config";

export const legalCopy: Record<
  Locale,
  {
    privacyLead: string;
    cookiesLead: string;
    privacy: { title: string; body: string }[];
    cookies: { title: string; body: string[] }[];
  }
> = {
  es: {
    privacyLead:
      "Información clara sobre el tratamiento de datos personales en este sitio.",
    cookiesLead: "Qué cookies puede usar este sitio y cómo puedes controlarlas.",
    privacy: [
      {
        title: "1. Responsable",
        body: "El responsable del tratamiento es {name} ({short}), con actividad profesional en marketing digital desde {location}. Contacto: {email}.",
      },
      {
        title: "2. Qué datos trato",
        body: "Solo trato los datos que tú me envías de forma voluntaria al contactar (por correo electrónico, LinkedIn u otros canales enlazados): nombre, email, empresa y el contenido del mensaje. No recojo formularios automatizados en esta web ni compro bases de datos.",
      },
      {
        title: "3. Finalidad y base legal",
        body: "Finalidad: responder a tu consulta, valorar un posible encargo profesional o mantener la relación comercial si trabajamos juntos. Base legal: ejecución de medidas precontractuales o contractuales (art. 6.1.b RGPD) y, cuando aplique, interés legítimo en atender solicitudes profesionales (art. 6.1.f RGPD).",
      },
      {
        title: "4. Conservación",
        body: "Conservo la conversación el tiempo necesario para gestionar la consulta y, si hay relación profesional, el plazo exigido por obligaciones legales o contractuales. Después, se elimina o se anonimiza.",
      },
      {
        title: "5. Destinatarios",
        body: "No vendo ni cedo tus datos a terceros con fines comerciales. Pueden intervenir proveedores técnicos estrictamente necesarios (hosting, correo) bajo obligaciones de confidencialidad. Si el proyecto se gestiona con SANTACONCHA, tus datos pueden tratarse en ese marco contractual, informándote cuando corresponda.",
      },
      {
        title: "6. Derechos",
        body: "Puedes ejercer acceso, rectificación, borrado, oposición, limitación y portabilidad escribiendo a {email}. También puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es).",
      },
      {
        title: "7. Cookies",
        body: "El detalle del uso de cookies está en la Política de cookies.",
      },
    ],
    cookies: [
      {
        title: "1. Qué es una cookie",
        body: [
          "Una cookie es un pequeño archivo que el navegador guarda en tu dispositivo. Permite recordar preferencias, mantener sesiones o medir el uso de un sitio, según su finalidad.",
        ],
      },
      {
        title: "2. Cookies en este sitio",
        body: [
          "{url} es un sitio informativo y de contacto. En su configuración actual no instala cookies de publicidad ni de analítica de terceros. Pueden generarse cookies o almacenamiento técnico estrictamente necesarios para el funcionamiento del servidor o del navegador (por ejemplo, preferencias de accesibilidad del sistema).",
          "Si en el futuro se incorporan herramientas de medición (p. ej. analítica), se actualizará esta política y, cuando la normativa lo exija, se solicitará tu consentimiento previo.",
        ],
      },
      {
        title: "3. Cómo gestionarlas",
        body: [
          "Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Ten en cuenta que desactivar cookies técnicas puede afectar a algunas funciones básicas de cualquier web.",
        ],
      },
      {
        title: "4. Más información",
        body: [
          "El tratamiento de datos personales se describe en la Política de privacidad. Para cualquier duda: {email}.",
        ],
      },
    ],
  },
  en: {
    privacyLead: "Clear information on how personal data is processed on this site.",
    cookiesLead: "Which cookies this site may use and how you can control them.",
    privacy: [
      {
        title: "1. Controller",
        body: "The data controller is {name} ({short}), working in digital marketing from {location}. Contact: {email}.",
      },
      {
        title: "2. What data I process",
        body: "I only process the data you send voluntarily when you contact me (email, LinkedIn or other linked channels): name, email, company and the message. This site has no automated forms and I do not buy databases.",
      },
      {
        title: "3. Purpose and legal basis",
        body: "Purpose: answering your enquiry, assessing a possible professional engagement, or maintaining a commercial relationship if we work together. Legal basis: pre-contractual or contractual steps (Art. 6.1.b GDPR) and, where applicable, legitimate interest in handling professional requests (Art. 6.1.f GDPR).",
      },
      {
        title: "4. Retention",
        body: "I keep the conversation for as long as needed to handle the enquiry and, if there is a professional relationship, for the period required by legal or contractual duties. After that it is deleted or anonymised.",
      },
      {
        title: "5. Recipients",
        body: "I do not sell or share your data with third parties for commercial purposes. Strictly necessary technical providers (hosting, email) may be involved under confidentiality duties. If the project is run with SANTACONCHA, your data may be processed in that contractual frame, and you will be informed when relevant.",
      },
      {
        title: "6. Rights",
        body: "You can request access, rectification, erasure, objection, restriction and portability by writing to {email}. You may also lodge a complaint with the Spanish Data Protection Agency (aepd.es).",
      },
      {
        title: "7. Cookies",
        body: "Cookie use is described in the Cookie policy.",
      },
    ],
    cookies: [
      {
        title: "1. What a cookie is",
        body: [
          "A cookie is a small file the browser stores on your device. It can remember preferences, keep sessions or measure site use, depending on its purpose.",
        ],
      },
      {
        title: "2. Cookies on this site",
        body: [
          "{url} is an informational and contact site. In its current setup it does not install advertising or third-party analytics cookies. Strictly necessary technical cookies or storage may be created for the server or the browser (for example system accessibility preferences).",
          "If measurement tools (e.g. analytics) are added later, this policy will be updated and, where the law requires it, prior consent will be requested.",
        ],
      },
      {
        title: "3. How to manage them",
        body: [
          "You can block or delete cookies in your browser settings. Turning off technical cookies may affect basic functions on any website.",
        ],
      },
      {
        title: "4. More information",
        body: [
          "Personal data processing is described in the Privacy policy. For any question: {email}.",
        ],
      },
    ],
  },
  ca: {
    privacyLead:
      "Informació clara sobre el tractament de dades personals en aquest lloc.",
    cookiesLead:
      "Quines cookies pot usar aquest lloc i com les pots controlar.",
    privacy: [
      {
        title: "1. Responsable",
        body: "El responsable del tractament és {name} ({short}), amb activitat professional en màrqueting digital des de {location}. Contacte: {email}.",
      },
      {
        title: "2. Quines dades tracto",
        body: "Només tracto les dades que m’envies de forma voluntària en contactar (correu electrònic, LinkedIn o altres canals enllaçats): nom, email, empresa i el contingut del missatge. No recullo formularis automatitzats en aquest web ni compro bases de dades.",
      },
      {
        title: "3. Finalitat i base legal",
        body: "Finalitat: respondre a la consulta, valorar un possible encàrrec professional o mantenir la relació comercial si treballem junts. Base legal: execució de mesures precontractuals o contractuals (art. 6.1.b RGPD) i, quan escaigui, interès legítim a atendre sol·licituds professionals (art. 6.1.f RGPD).",
      },
      {
        title: "4. Conservació",
        body: "Conservo la conversa el temps necessari per gestionar la consulta i, si hi ha relació professional, el termini exigit per obligacions legals o contractuals. Després s’elimina o s’anonimitza.",
      },
      {
        title: "5. Destinataris",
        body: "No venc ni cedeixo les teves dades a tercers amb finalitats comercials. Poden intervenir proveïdors tècnics estrictament necessaris (hosting, correu) sota obligacions de confidencialitat. Si el projecte es gestiona amb SANTACONCHA, les dades es poden tractar en aquest marc contractual, informant-te quan correspongui.",
      },
      {
        title: "6. Drets",
        body: "Pots exercir accés, rectificació, esborrat, oposició, limitació i portabilitat escrivint a {email}. També pots reclamar davant l’Agència Espanyola de Protecció de Dades (aepd.es).",
      },
      {
        title: "7. Cookies",
        body: "El detall de l’ús de cookies és a la Política de cookies.",
      },
    ],
    cookies: [
      {
        title: "1. Què és una cookie",
        body: [
          "Una cookie és un petit arxiu que el navegador desa al teu dispositiu. Permet recordar preferències, mantenir sessions o mesurar l’ús d’un lloc, segons la finalitat.",
        ],
      },
      {
        title: "2. Cookies en aquest lloc",
        body: [
          "{url} és un lloc informatiu i de contacte. En la configuració actual no instal·la cookies de publicitat ni d’analítica de tercers. Es poden generar cookies o emmagatzematge tècnic estrictament necessaris per al funcionament del servidor o del navegador (per exemple, preferències d’accessibilitat del sistema).",
          "Si en el futur s’incorporen eines de mesura (p. ex. analítica), s’actualitzarà aquesta política i, quan la normativa ho exigeixi, es demanarà el consentiment previ.",
        ],
      },
      {
        title: "3. Com gestionar-les",
        body: [
          "Pots bloquejar o eliminar cookies des de la configuració del navegador. Desactivar cookies tècniques pot afectar algunes funcions bàsiques de qualsevol web.",
        ],
      },
      {
        title: "4. Més informació",
        body: [
          "El tractament de dades personals es descriu a la Política de privadesa. Per a qualsevol dubte: {email}.",
        ],
      },
    ],
  },
};
