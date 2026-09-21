import { site } from "@/lib/site";

export const nav = [
  { href: "/recorrido", label: "Recorregut" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contacto", label: "Contacte" },
] as const;

export const chapters = {
  perspective: "01 · La perspectiva",
  receipts: "02 · Els rebuts",
  craft: "03 · L’ofici",
  venture: "04 · L’agència",
  proof: "05 · La confiança",
  arc: "06 · L’arc",
  press: "07 · En mitjans",
  mission: "08 · Ara",
} as const;

export const hero = {
  role: "Especialista en màrqueting digital · Barcelona i Miami",
  brand: ["Javier", "Concha"],
  headline: "Faig que el SEO i la publicitat venguin. Ofici, no teatre.",
  support:
    "Màrqueting digital amb criteri de negoci. Amb SANTACONCHA et donem cobertura des de Barcelona i Miami a qualsevol part del món.",
  ctas: [
    { href: "/contacto", label: "Parlem-ne", variant: "solid" as const },
    {
      href: site.social.agency,
      label: "Veure SANTACONCHA",
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
  { value: "2010", label: "inici digital · Efecto Esponja" },
  { value: "2019", label: "neix SANTACONCHA" },
  { value: site.socialReach, label: "seguidors a xarxes (total)" },
  { value: "5", label: "projectes com a soci" },
  { value: "BCN · MIA", label: "presència en dos mercats" },
  { value: "2000", label: "inici en inversió" },
];

export const home = {
  manifestoLabel: chapters.perspective,
  manifestoTitle: "No vaig planejar una agència. Vaig planejar resultats.",
  manifestoLead:
    "Abans del màrqueting digital vaig vendre fruita, sofàs, tecnologia i productes financers. Aquella etapa comercial em va ensenyar com de car és un “sí”… i com de barat resulta el fum.",
  manifestoBody: [
    "Per això dissenyo estratègies a l’inrevés de l’habitual: primer el negoci, després el canal. Rànquings, clics i impressions són mitjans. El que presento a direcció són leads que tanquen, marge i clients que tornen.",
    "Avui dirigeixo el Màrqueting de SANTACONCHA: una agència boutique on totes les especialitats van de la mà. I amb un soci, Julián, que em complementa en la part de desenvolupament a un nivell que pocs assoleixen. **Som l’EQUIP A i ens encanta que els plans surtin bé.**",
    "Des que vaig crear Efecto Esponja el 2010 continuo fent el mateix que en aquelles botigues: escoltar, entendre què frena la venda i treure-ho del mig. Ara ho faig amb dades, amb un equip que executa com pocs i a una altra escala.",
    "La meva feina no s’acaba en recomanar: prioritzo, explico el perquè i acompanyo l’execució o la lidero fins que el resultat es pot mesurar. Si alguna cosa no mou negoci, no mereix ocupar el roadmap.",
  ],

  proofLabel: chapters.receipts,
  proofTitle: "La història, en números.",
  proofLead:
    "Les grans fites arriben amb moltes petites victòries. I la batalla del dia a dia no cessa.",
  proof: [
    { value: "2010", label: "inici de l’ofici digital · Efecto Esponja" },
    { value: "2019", label: "fundació SANTACONCHA" },
    { value: site.socialReach, label: "seguidors a xarxes (suma)" },
    {
      value: "5",
      label: "2 projectes cofundats, 3 com a soci (i més en camí)",
    },
  ],

  focusLabel: chapters.craft,
  focusTitle: "Quatre fronts. Un mateix criteri.",
  focusLead:
    "No faig una mica de tot. Aprofundeixo on el retorn és mesurable i on puc respondre pel resultat.",
  focus: [
    {
      title: "SEO tècnic, local i internacional",
      text: "Arquitectura, WPO, continguts SEO, linkbuilding, migracions, ASO i reputació online. SEO local i internacional, GEO i reporting per atreure qui pot comprar.",
      tags: ["WPO", "Linkbuilding", "GEO", "ASO", "Reputació", "Migracions"],
      href: "/expertise/seo-barcelona",
    },
    {
      title: "Publicitat de pagament",
      text: "Google Ads, Bing, Shopping, PMax, YouTube, Meta, TikTok, LinkedIn, Amazon i ChatGPT Ads. Social Ads, programàtica, branding, remarketing i auditoria de campanyes.",
      tags: ["Google Ads", "Meta", "Amazon", "ChatGPT Ads", "Programàtica", "Social Ads"],
      href: "/expertise/google-ads-meta-ads",
    },
    {
      title: "Analítica, CRO i mesura",
      text: "GA4, Tag Manager, mesura en servidor, funnels, landings i tests A/B. Panells, veu del client, email, WhatsApp i CRM perquè direcció decideixi amb dades reals.",
      tags: ["GA4", "Server-side", "CRO", "Dashboards", "Veu del client"],
      href: "/expertise/analitica-cro",
    },
    {
      title: "Direcció de màrqueting",
      text: "Estratègia, consultoria, inbound i campanyes 360°. Xarxes, copy, email, WhatsApp, IA i l’equip (disseny, dev i màrqueting) a la mateixa taula. Roadmap amb responsable i mètrica.",
      tags: ["Estratègia", "Inbound", "Xarxes", "Copy", "WhatsApp", "Email"],
      href: "/expertise/direccion-de-marketing",
    },
  ],

  hobbiesLabel: "Fora de l’oficina",
  hobbiesTitle: "El que em manté viu (i curiós).",
  hobbiesLead:
    "L’ofici s’alimenta del que passa fora de l’Excel. Aquestes són les coses que m’ocupen el cap quan no estic en campanyes.",
  hobbies: [
    {
      title: "Llegir i investigar",
      text: "Absorbeixo sense parar: negocis, màrqueting, tecnologia i el que es cogui al sector. La curiositat és l’hàbit.",
    },
    {
      title: "Fill, família i amics",
      text: "El que importa de veritat: passar una bona estona amb el meu fill, amb la família i amb els amics.",
    },
    {
      title: "Competició",
      text: "Qualsevol joc que impliqui competir. M’agrada guanyar… i aprendre quan perdo.",
    },
    {
      title: "Inversions i negocis",
      text: "Inverteixo a borsa des de l’any 2000, aproximadament. Abans del màrqueting digital ja llegia mercats, gestionava risc i n’escrivia. I sobre els negocis, la meva ment no para quieta: sempre analitzant qualsevol empresa i pensant en nous projectes i vies d’ingressos.",
    },
    {
      title: "Cotxes",
      text: "Els cotxes sempre m’han agradat per les sensacions, per la bellesa, per ser una de les màquines més complexes a l’abast de qualsevol. Des que tenia 5 anys i em sabia totes les marques i models, fins ara que puc gaudir d’alguns.",
    },
  ],

  agencyLabel: chapters.venture,
  agencyTitle: "SANTACONCHA: on això escala de veritat.",
  agencyText:
    "Des del 2019 dirigeixo el màrqueting juntament amb Julián Santamaría. L’equip treballa des de Granollers (Barcelona), amb presència comercial i servei al mercat americà des de Miami.",
  agencyText2:
    "Quan un projecte necessita més que estratègia (web, ecommerce, software, marca o producció), entra un equip que ja sap com treballo. Aquest és el multiplicador.",
  agencyPoints: [
    { k: "Màrqueting digital", v: "SEO, SEM, Social Ads, email, CRO i analítica" },
    { k: "Disseny i marca", v: "Identitat, UX/UI i direcció creativa" },
    { k: "Desenvolupament", v: "Web, ecommerce, software a mida i IA" },
    { k: "I el de fora", v: "Fires, packaging, ON/OFF quan el projecte ho demana" },
  ],

  quotesLabel: chapters.proof,
  quotesTitle: "Ho diuen els qui ho han viscut.",
  quotes: [
    {
      quote:
        "He treballat amb Javier en mil escenaris: com a companys de màster, en projectes conjunts i, finalment, contractant-lo per a la meva pròpia emprenedoria; un ecommerce DTC de sportswear. Després d’aquests anys, puc dir que és un dels perfils digitals més complets que conec. El seu enfocament a negoci i la seva capacitat per entendre els reptes d’una marca DTC el fan destacar per sobre de la mitjana. És honest, sap de què parla i, sobretot, sap com fer créixer un projecte. Recomanable al 100% per a qualsevol repte digital seriós.",
      author: "Darío González Martínez",
      role: "Cofundador i Marketing Manager · Monbel",
    },
    {
      quote:
        "He col·laborat amb Javier i el seu equip en diversos projectes i la meva experiència ha estat molt positiva. Destacaria especialment el seu gran coneixement en màrqueting digital, la seva capacitat analítica i el seu enfocament estratègic a l’hora de plantejar solucions orientades a resultats. A més de la professionalitat, valoro molt la seva proximitat, disponibilitat i la facilitat per treballar amb ell. Sempre aporta idees amb criteri, entén ràpidament les necessitats del projecte i busca la millor manera d’aportar valor. En definitiva, és un gran professional amb qui és un plaer col·laborar. Sens dubte, el recomanaria a qualsevol empresa que busqui un partner de confiança en l’àmbit digital.",
      author: "Gonzalo Giménez-Salinas Vidal",
      role: "Màrqueting digital · MGS",
    },
    {
      quote:
        "Santaconcha és el millor proveïdor de serveis online que he tingut en tota la meva trajectòria com a CMO a Windoor. El seu rendiment és altíssim i els resultats es noten. Però més enllà d’això, la seva visió estratègica i acompanyament és vital per optimitzar el rendiment de qualsevol campanya online. Javier és un referent en el terreny digital i, juntament amb la resta de l’equip, un autèntic dream team.",
      author: "Sergi Ponsa",
      role: "Marketing & Sales Director · Windoor",
    },
    {
      quote:
        "Treballant a Raventós Codorníu vaig decidir obrir un pitch entre agències digitals perquè portessin les nostres campanyes a Google. Després d’un any d’optimització hem generat un increment del 40% en trànsit de pagament i ROI. Javier és un professional digital amb moltíssim coneixement en totes les eines de Google i SEO tècnic. Tractament proper i proactiu: no has d’anar-li al darrere.",
      author: "Andrea Lorca",
      role: "Ecommerce & Digital Marketing Manager · Codorníu",
    },
    {
      quote:
        "Vaig conèixer Javier Concha perquè es va interessar per una de les meves formacions. Després em va presentar una proposta i els resultats de la prova pilot van ser tan excepcionals que vam començar a treballar junts. Des que el tenim amb nosaltres els resultats s’han doblat i la qualitat dels leads ha millorat notablement. És el partner que necessitava.",
      author: "Héctor Arderius",
      role: "Fundador · Tristán el Subastero",
    },
    {
      quote:
        "Agrair a Santaconcha quatre anys excepcionals. Des de la creació del nostre blog fins a la gestió de desenvolupaments i continguts, la seva dedicació ha estat vital per a l’èxit de Sportium. Agrair a Arnau, Julián i Javier: han estat més que una agència, socis creatius, fiables i eficients.",
      author: "Jaouad Berrissoul",
      role: "Director de Màrqueting · Sportium",
    },
    {
      quote:
        "Hem tingut una molt bona experiència treballant amb Javier de Santa Concha, són ràpids i molt professionals. Els recomano.",
      author: "Laura Herrero",
      role: "Client",
    },
    {
      quote:
        "El nivell de servei de Javier de SantaConcha i el seu compromís cap al client es destaca pel nivell de detall dels informes, la seva capacitat per aprofundir en la presentació de resultats i la seva perseverança a l’hora d’investigar per resoldre problemes tècnics complexos. Tractament molt proper, el recomano sense dubte.",
      author: "Vanessa O'Bree",
      role: "Codorníu",
    },
    {
      quote:
        "Després d’anys amb diverses empreses de màrqueting online de Barcelona amb resultats qüestionables, el 2018 ens van recomanar els serveis de Javier. Des del primer moment ens ha demostrat el seu coneixement i gran experiència en campanyes SEM: més qualitat de leads, millor CTR, més conversió i reducció de costos. Us el recomano al 100%.",
      author: "Maarten Moolenbeek",
      role: "Next Destinium",
    },
    {
      quote:
        "SANTACONCHA és una agència amb gran experiència en màrqueting digital. Ens assessora des de fa temps en temes de SEO/SEM amb gran encert i professionalitat. És una empresa de gran confiança i serietat.",
      author: "Sonia Morera",
      role: "Màrqueting · Canaletas",
    },
    {
      quote:
        "Per primera vegada puc dir que treballo amb una empresa de màrqueting digital que sap el que fa. Grans professionals i molt responsables.",
      author: "Felip Andanuche",
      role: "Marketing & Communication · MGS",
    },
    {
      quote:
        "SANTACONCHA és molt més que una agència: és el teu partner i conseller de negoci. La seva visió global en estratègia digital t’ajuda a millorar resultats, amb un performance molt per sobre del que s’esperava.",
      author: "Sérgio Claudino",
      role: "Holmes Place España",
    },
    {
      quote:
        "Buscava una agència dinàmica, proactiva i digitalment puntera per donar suport a la nostra estratègia de màrqueting digital, però petita, propera i compromesa. Santa Concha va entendre la nostra dinàmica de seguida. Molt satisfets amb els resultats i amb l’equip.",
      author: "Cécile Canivet",
      role: "Marketing & Communication Director · Mateco",
    },
    {
      quote:
        "Normalment he hagut d’estar a sobre de les agències per obtenir resultats. Amb Santa Concha no és el cas: proposen millores contínuament i es comprometen. Els he sumat a l’estratègia de màrqueting en diferents projectes.",
      author: "Orlando Marín",
      role: "Digital Business Director · Balvi",
    },
    {
      quote:
        "Els vaig contactar perquè eren referents en el món del màrqueting digital i des d’aleshores no ens hem separat. Honestedat, professionalitat, flexibilitat i eficiència. Un valor segur.",
      author: "Daniel Ruiz",
      role: "Digital Transformation · Ferrer",
    },
    {
      quote:
        "SANTACONCHA és un partner més que una agència a l’ús: una extensió del nostre departament. Una de les millors agències en Digital i Performance Marketing de Barcelona. Tractament proper, amable, personal i directe.",
      author: "Gemma Pascual",
      role: "Digital Marketing · Alliance Healthcare",
    },
    {
      quote:
        "No eren una agència de màrqueting sense més, i no m’equivocava. Encantats amb el rebranding, la web i l’estratègia digital, que ens ha donat resultats molt positius des del primer dia.",
      author: "Marta Bonet",
      role: "Màrqueting · Chromessence",
    },
    {
      quote:
        "El millor partner per confiar en l’estratègia digital d’una marca.",
      author: "Maite del Mundo",
      role: "Cofundadora · Creatique",
    },
    {
      quote:
        "Tot l’equip són uns grans professionals. Lliurables d’alta qualitat, 100% optimització per a SEO i usabilitat. Uns cracks.",
      author: "Marc Gaja",
      role: "Gerent · ISEP",
    },
    {
      quote: "Un tracte de 10. Treballo amb ells per portar les meves campanyes de màrqueting.",
      author: "David Gutierrez",
      role: "Company de màster · KSchool",
    },
    {
      quote:
        "Haver contractat Santaconcha per al desenvolupament, expansió i manteniment del nostre ecommerce va suposar un abans i un després. No hi ha paraules per agrair el que Javier i Julián han fet per l’èxit de la nostra botiga online.",
      author: "Carlos Junyent",
      role: "Gerent · Copytop",
    },
  ],

  arcLabel: chapters.arc,
  arcTitle: "Amb esforç i passió he arribat fins aquí, i encara queda molt.",
  arcLead: "De la venda a peu de carrer a dirigir una agència boutique.",

  pressLabel: chapters.press,
  pressTitle: "Quan la feina s’explica en veu alta.",
  pressLead:
    "Entrevistes, tallers i aules. El criteri s’afila quan cal explicar-lo en públic.",
  press: [
    {
      name: "PPCCast",
      detail: "Entrevista · Agències de PPC per dins",
    },
    {
      name: "SEO Clinic",
      detail: "Ponència · Posicionament",
    },
    {
      name: "Barcelona Digital Talent",
      detail: "Entrevista Twitch · SEO i trajectòria",
    },
    {
      name: "4YFN · Mobile World Congress",
      detail: "Taller SEO/SEM amb KSchool",
    },
    {
      name: "PPC Fest",
      detail: "Patrocini · Publicitat de pagament",
    },
    {
      name: "Semrush",
      detail: "Col·laboracions i converses del sector SEO/SEM",
    },
    {
      name: "Borsadiner",
      detail: "Ponència · Inversió",
    },
    {
      name: "Barcelona Trading Point",
      detail: "Cofundador · Esdeveniment borsari",
    },
  ],

  ctaLabel: chapters.mission,
  ctaTitle: "Des del 2010 fent créixer projectes. El següent pot ser el teu.",
  ctaText:
    "Direcció de màrqueting, una segona opinió seriosa sobre SEO i SEM, o un projecte complet amb SANTACONCHA. Sense formularis eterns.",
  ctaSign: "Signat,",
  ctaName: site.fullName,
};

/** Eix digital / màrqueting (destacat) */
export const timelineDigital = [
  {
    year: "2019 — avui",
    title: "Cofundador i Director de Màrqueting · SANTACONCHA",
    text: "Vaig cofundar l’agència amb Julián. Jo porto la direcció de màrqueting: captació, SEO/GEO, campanyes i la conversa amb el client. L’equip cobreix disseny i desenvolupament. Sense helicòpter. Amb cafè, un pla i el costum que acabi bé.",
  },
  {
    year: "2025 — avui",
    title: "Partner & CMO · Academia de Pensamiento Diferencial",
    text: "Pep Torres fa dècades que demostra que el resultat extraordinari és mètode, no màgia. Com a partner i CMO ajudo que aquest mètode arribi a més gent: producte, captació i la peça digital de l’Acadèmia.",
  },
  {
    year: "2023 — avui",
    title: "Cofundador · CAPTAMOS TU LEAD",
    text: "Una manera més fluixa d’explicar el que ja sabem fer: captació, comunicació i performance per a projectes que volen menys cotilla. Mateixa exigència, un altre to. Fins i tot REME, la mascota del xat, forma part del joc.",
  },
  {
    year: "2017 — 2024",
    title: "Docència · KSchool, UAB, UB i TeamLabs",
    text: "Mòdul de SEO per a CMS al Màster SEO-SEM de KSchool (WordPress, PrestaShop, Magento). Classes a la UAB, el postgrau de màrqueting farmacèutic de la UB i analítica al grau LEINN de TeamLabs. Ensenyar obliga a deixar clar el que fas cada dia.",
  },
  {
    year: "2017 — 2020",
    title: "Reactiva · d’especialista a soci i CMO",
    text: "Vaig entrar traçant SEO, WPO, SEM i analítica. Vaig acabar soci i CMO: estratègia de clients (ONG, oci, ecommerce, indústria, telco) i de la pròpia agència. D’allà vam sortir Julián i jo a muntar SANTACONCHA, encara agermanats amb ells.",
  },
  {
    year: "2016 — 2017",
    title: "Traffic Manager · Clinmoo",
    text: "Agència de real estate. Auditoria SEO, WPO de landings, PPC a Google i Facebook/Instagram, i un sistema d’atribució amb reporting automàtic. Promotores com Núñez y Navarro, Aelca o Forcadell, i projectes com BADI.",
  },
  {
    year: "2013 — 2015",
    title: "CMO · Trustivity",
    text: "Startup de ressenyes per a ecommerce: vaig ser part de l’equip creador. Tot el que no era programar: producte, continguts, captació, fires, partnerships, legal i internacionalització. Clients com Movistar, Promofarma o Electrocosto.",
  },
  {
    year: "2010 — 2013",
    title: "Efecto Esponja i el salt al digital",
    text: "Blog de finances i economia: Top 10 «Millor blog de negocis» als Premios Bitácoras 2011, lloc 42 al rànquing Coguan i 78 a ebuzzing/wikio Espanya. Ponència a Borsadiner, comunitat a bolsa.com… i l’empenta que em va portar al màrqueting digital.",
  },
];

/** Àlies per a home (primeres fites digitals) */
export const timeline = timelineDigital;

/**
 * Experiències prèvies (vendes, esdeveniments, finances…).
 * No s’amaguen: es resumeixen pel que aporten al màrqueting actual.
 */
export const timelineRoots = {
  label: "Abans del màrqueting digital",
  title: "El que no es veu en un CV de SEO… i ho canvia tot.",
  lead: "Vendes, negoci familiar, finances i esdeveniments abans d’entrar en el món digital. No són un adorn: són la base de com penso captació, marge i persones.",
  items: [
    {
      title: "Vendes a peu de carrer i B2B",
      text: "Fruiteria familiar, sofàs de luxe (Natuzzi, Grassoler, Divatto), electrònica (MediaMarkt, LG, Garmin), porta freda a banca i formació. Aprens a escoltar objeccions de veritat.",
    },
    {
      title: "Què aporten avui",
      text: "Empatia amb qui ven, rigor amb els diners i paciència amb el procés. Per això en màrqueting començo pel negoci i no per l’eina.",
    },
  ],
};

/** Fites del món borsari / inversió — bloc propi al recorregut */
export const marketsArc = {
  label: "Món borsari",
  title: "Abans del SEO, ja llegia el mercat.",
  lead: "Inverteixo a borsa des de l’any 2000, aproximadament. Aquella etapa no és nostàlgia: és el criteri amb què miro risc, senyal i paciència en qualsevol campanya.",
  milestones: [
    {
      title: "Efecto Esponja",
      detail: "Blog · economia i finances",
      text: "Top 10 «Millor blog de negocis» als Premios Bitácoras 2011, lloc 42 al rànquing Coguan de blogs d’economia/finances i 78 a ebuzzing/wikio Espanya. El blog que em va empènyer al màrqueting digital.",
    },
    {
      title: "bolsa.com",
      detail: "Comunitat · seleccionat com a gurú",
      text: "Perfil actiu amb milers de seguidors (més de 1.800 ja el 2011; prop de 4.600 el 2015). Conversació diària amb traders i inversors, no només articles solts.",
    },
    {
      title: "Borsadiner 2011",
      detail: "Ponent · stand Bolsa.com",
      text: "Ponència «Especular de forma fácil y consistente» a la fira dels diners, la borsa i la inversió (Palacio de Congresos de Cataluña). Escenari real davant del sector.",
    },
    {
      title: "Barcelona Trading Point",
      detail: "Cofundador · CCO",
      text: "Esdeveniment de traders per a traders: +90 conferències, +1.000 assistents i +60 sponsors. Punt de trobada encara viu online.",
      href: "http://bcntradingpoint.com/",
    },
    {
      title: "elmundobursatil.es",
      detail: "Anàlisi tècnica",
      text: "Vaig escriure anàlisis tècniques per al mitjà. Traduir el gràfic a una tesi clara, el mateix múscul que avui faig servir per prioritzar campanyes.",
    },
    {
      title: "Invertia · moneycall",
      detail: "Fòrum · ~2002–2006",
      text: "Forer actiu amb el nick moneycall. Uns anys de conversa diària sobre mercats abans que existís «marca personal».",
    },
  ],
};

export const stages = [
  { name: "PPC Fest", detail: "Patrocini · Publicitat de pagament" },
  { name: "4YFN · MWC", detail: "Taller SEO/SEM · KSchool" },
  { name: "Barcelona Digital Talent", detail: "Entrevista Twitch" },
  { name: "Borsadiner", detail: "Ponència · inversió" },
  { name: "PPCCast", detail: "Entrevista · agències de PPC" },
  { name: "Semrush", detail: "Col·laboracions del sector" },
  { name: "SEO Clinic", detail: "Ponència · posicionament" },
  { name: "Barcelona Trading Point", detail: "Cofundador · esdeveniment borsari" },
];

export const expertise = {
  intro:
    "El màrqueting digital només val si mou negoci. Aquestes són les àrees en què aprofundeixo, i on SANTACONCHA suma disseny i desenvolupament quan el projecte ho demana.",
  areas: [
    {
      title: "SEO tècnic, local e internacional",
      href: "/expertise/seo-barcelona",
      cta: "Expert SEO a Barcelona",
      items: [
        "Auditories tècniques i de contingut",
        "Arquitectura de la informació i crawl budget",
        "SEO local e internacional",
        "GEO: visibilitat en cercadors amb IA",
        "WPO i Core Web Vitals",
      ],
    },
    {
      title: "Publicitat de pagament (PPC / SEM)",
      href: "/expertise/google-ads-meta-ads",
      cta: "Google Ads i Meta Ads",
      items: [
        "Google Ads: Search, Shopping, Performance Max i YouTube",
        "Meta Ads: Facebook i Instagram",
        "Bing, TikTok, LinkedIn i remarketing",
        "Estructura de comptes i naming",
        "Control de CPA, ROAS i qualitat de lead",
      ],
    },
    {
      title: "Analítica, CRO i mesura",
      href: "/expertise/analitica-cro",
      cta: "Analítica i CRO",
      items: [
        "Google Analytics 4 i Tag Manager",
        "Search Console i reporting executiu",
        "Funnels, landings i tests A/B",
        "Atribució, email i WhatsApp",
        "Integracions amb CRM i ecommerce",
      ],
    },
    {
      title: "Estratègia i direcció de màrqueting",
      href: "/expertise/direccion-de-marketing",
      cta: "Direcció de màrqueting",
      items: [
        "Plans digitals de punta a punta",
        "Coordinació de disseny, dev i màrqueting",
        "Priorització de pressupost i canals",
        "Fires i accions offline quan cal",
        "Reporting per a comitè de direcció",
      ],
    },
  ],
  brands:
    "Marques amb les quals he treballat, de manera directa o indirecta: Codorníu, Nestlé, Ferrer, Sanofi, Mateco, Sportium, Synlab, Optimus, Holmes Place, Sotheby's, Mary Kay, Comics Barcelona, Windoor, Balvi, Chromessence i Training Park, entre d’altres.",
};

export const contact = {
  title: "Explica’m què cal moure.",
  text: "Direcció de màrqueting, una segona opinió seriosa sobre SEO i SEM, o un projecte amb SANTACONCHA. Responc jo.",
  note: "Per a projectes d’agència també pots anar a santaconcha.com. Per a una conversa directa, millor per aquí, LinkedIn o X.",
};
