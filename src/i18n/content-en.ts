import { site } from "@/lib/site";

export const nav = [
  { href: "/recorrido", label: "Path" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contacto", label: "Contact" },
] as const;

export const chapters = {
  perspective: "01 · The perspective",
  receipts: "02 · The receipts",
  craft: "03 · The craft",
  venture: "04 · The agency",
  proof: "05 · Trust",
  arc: "06 · The arc",
  press: "07 · In the media",
  mission: "08 · Now",
} as const;

export const hero = {
  role: "Digital marketing specialist · Barcelona and Miami",
  brand: ["Javier", "Concha"],
  headline: "I make SEO and ads sell. Craft, not theatre.",
  support:
    "Digital marketing with a business lens. With SANTACONCHA we cover you from Barcelona and Miami to anywhere in the world.",
  ctas: [
    { href: "/contacto", label: "Let’s talk", variant: "solid" as const },
    {
      href: site.social.agency,
      label: "See SANTACONCHA",
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
  { value: "2010", label: "digital start · Efecto Esponja" },
  { value: "2019", label: "SANTACONCHA is born" },
  { value: site.socialReach, label: "social followers (total)" },
  { value: "5", label: "projects as partner" },
  { value: "BCN · MIA", label: "presence in two markets" },
  { value: "2000", label: "start of investing" },
];

export const home = {
  manifestoLabel: chapters.perspective,
  manifestoTitle: "I didn’t plan an agency. I planned results.",
  manifestoLead:
    "Before digital marketing I sold fruit, sofas, technology and financial products. That commercial stage taught me how expensive a “yes” is… and how cheap the smoke turns out to be.",
  manifestoBody: [
    "That is why I design strategy the other way around: business first, then the channel. Rankings, clicks and impressions are means. What I bring to the board are leads that close, margin, and customers who come back.",
    "Today I lead Marketing at SANTACONCHA: a boutique agency where every specialism works as one. And with a partner, Julián, who complements me on the development side at a level few people reach. **We are TEAM A, and we love it when plans actually work.**",
    "Since I created Efecto Esponja in 2010 I still do the same thing I did in those shops: listen, understand what blocks the sale, and get it out of the way. Now I do it with data, with a team that executes like few others, and at a different scale.",
    "My work does not end at recommending: I prioritize, I explain the why, and I stay with the execution — or I lead it — until the result can be measured. If something does not move the business, it does not deserve a place on the roadmap.",
  ],

  proofLabel: chapters.receipts,
  proofTitle: "The story, in numbers.",
  proofLead:
    "The big milestones arrive after many small wins. And the day-to-day fight never stops.",
  proof: [
    { value: "2010", label: "start of the digital craft · Efecto Esponja" },
    { value: "2019", label: "founding of SANTACONCHA" },
    { value: site.socialReach, label: "social followers (combined)" },
    {
      value: "5",
      label: "2 projects cofounded, 3 as partner (and more on the way)",
    },
  ],

  focusLabel: chapters.craft,
  focusTitle: "Four fronts. One standard.",
  focusLead:
    "I don’t do a bit of everything. I go deep where return is measurable and where I can stand behind the result.",
  focus: [
    {
      title: "Technical, local and international SEO",
      text: "Architecture, WPO, SEO content, link building, migrations, ASO and online reputation. Local and international SEO, GEO and reporting to attract people who can buy.",
      tags: ["WPO", "Link building", "GEO", "ASO", "Reputation", "Migrations"],
      href: "/expertise/seo-barcelona",
    },
    {
      title: "Paid advertising",
      text: "Google Ads, Bing, Shopping, PMax, YouTube, Meta, TikTok, LinkedIn, Amazon and ChatGPT Ads. Social ads, programmatic, branding, remarketing and campaign audits.",
      tags: ["Google Ads", "Meta", "Amazon", "ChatGPT Ads", "Programmatic", "Social ads"],
      href: "/expertise/google-ads-meta-ads",
    },
    {
      title: "Analytics, CRO and measurement",
      text: "GA4, Tag Manager, server-side measurement, funnels, landings and A/B tests. Dashboards, voice of customer, email, WhatsApp and CRM so leadership decides with real data.",
      tags: ["GA4", "Server-side", "CRO", "Dashboards", "Voice of customer"],
      href: "/expertise/analitica-cro",
    },
    {
      title: "Marketing leadership",
      text: "Strategy, consulting, inbound and 360° campaigns. Social, copy, email, WhatsApp, AI and the team (design, dev and marketing) at the same table. A roadmap with an owner and a metric.",
      tags: ["Strategy", "Inbound", "Social", "Copy", "WhatsApp", "Email"],
      href: "/expertise/direccion-de-marketing",
    },
  ],

  hobbiesLabel: "Outside the office",
  hobbiesTitle: "What keeps me alive (and curious).",
  hobbiesLead:
    "The craft is fed by what happens outside the spreadsheet. These are the things that occupy my head when I am not in campaigns.",
  hobbies: [
    {
      title: "Reading and research",
      text: "I absorb constantly: business, marketing, technology and whatever is brewing in the industry. Curiosity is the habit.",
    },
    {
      title: "Son, family and friends",
      text: "What actually matters: a good time with my son, with family and with friends.",
    },
    {
      title: "Competition",
      text: "Any game that involves competing. I like winning… and learning when I lose.",
    },
    {
      title: "Investing and business",
      text: "I have invested in the stock market since around 2000. Before digital marketing I was already reading markets, managing risk and writing about it. And on business, my mind never sits still: always analyzing any company and thinking about new projects and revenue streams.",
    },
    {
      title: "Cars",
      text: "I have always liked cars for the sensations, for the beauty, for being one of the most complex machines anyone can reach. From when I was 5 and knew every brand and model, to now, when I can enjoy some of them.",
    },
  ],

  agencyLabel: chapters.venture,
  agencyTitle: "SANTACONCHA: where this actually scales.",
  agencyText:
    "Since 2019 I have led marketing with Julián Santamaría. The team works from Granollers (Barcelona), with commercial presence and service for the American market from Miami.",
  agencyText2:
    "When a project needs more than strategy (web, ecommerce, software, brand or production), a team that already knows how I work steps in. That is the multiplier.",
  agencyPoints: [
    { k: "Digital marketing", v: "SEO, SEM, Social Ads, email, CRO and analytics" },
    { k: "Design and brand", v: "Identity, UX/UI and creative direction" },
    { k: "Development", v: "Web, ecommerce, custom software and AI" },
    { k: "And the offline side", v: "Trade shows, packaging, ON/OFF when the project asks for it" },
  ],

  quotesLabel: chapters.proof,
  quotesTitle: "The people who have lived it say so.",
  quotes: [
    {
      quote:
        "I have worked with Javier in a thousand settings: as master’s classmates, on joint projects and, finally, hiring him for my own venture; a DTC sportswear ecommerce. After these years, I can say he is one of the most complete digital profiles I know. His business focus and his ability to understand the challenges of a DTC brand set him apart from the average. He is honest, he knows what he is talking about and, above all, he knows how to grow a project. 100% recommended for any serious digital challenge.",
      author: "Darío González Martínez",
      role: "Cofounder and Marketing Manager · Monbel",
    },
    {
      quote:
        "I have collaborated with Javier and his team on several projects and my experience has been very positive. I would especially highlight his deep knowledge of digital marketing, his analytical ability and his strategic approach when proposing results-oriented solutions. Beyond his professionalism, I greatly value his closeness, availability and how easy he is to work with. He always brings ideas with judgment, quickly understands the project’s needs and looks for the best way to add value. In short, he is a great professional it is a pleasure to collaborate with. I would definitely recommend him to any company looking for a trusted partner in the digital space.",
      author: "Gonzalo Giménez-Salinas Vidal",
      role: "Digital marketing · MGS",
    },
    {
      quote:
        "Santaconcha is the best online services provider I have had in my entire career as CMO at Windoor. Their performance is extremely high and the results show. But beyond that, their strategic vision and support is vital to optimizing the performance of any online campaign. Javier is a reference in the digital field and, together with the rest of the team, a genuine dream team.",
      author: "Sergi Ponsa",
      role: "Marketing & Sales Director · Windoor",
    },
    {
      quote:
        "Working at Raventós Codorníu I decided to open a pitch among digital agencies to run our Google campaigns. After a year of optimization we have generated a 40% increase in paid traffic and ROI. Javier is a digital professional with a great deal of knowledge across all Google tools and technical SEO. Close and proactive: you don’t have to chase him.",
      author: "Andrea Lorca",
      role: "Ecommerce & Digital Marketing Manager · Codorníu",
    },
    {
      quote:
        "I met Javier Concha because he took an interest in one of my training programs. Then he presented a proposal and the results of the pilot were so exceptional that we started working together. Since we have had him with us results have doubled and lead quality has improved markedly. He is the partner I needed.",
      author: "Héctor Arderius",
      role: "Founder · Tristán el Subastero",
    },
    {
      quote:
        "Thank SANTACONCHA for four exceptional years. From creating our blog to managing development and content, their dedication has been vital to Sportium’s success. Thanks to Arnau, Julián and Javier: they have been more than an agency — creative, reliable and efficient partners.",
      author: "Jaouad Berrissoul",
      role: "Marketing Director · Sportium",
    },
    {
      quote:
        "We have had a very good experience working with Javier from Santa Concha, they are fast and very professional. I recommend them.",
      author: "Laura Herrero",
      role: "Client",
    },
    {
      quote:
        "The level of service from Javier at SantaConcha and his commitment to the client stands out in the level of detail of the reports, his ability to go deep in presenting results and his perseverance when investigating to solve complex technical problems. A very close relationship, I recommend him without hesitation.",
      author: "Vanessa O'Bree",
      role: "Codorníu",
    },
    {
      quote:
        "After years with several Barcelona online marketing companies with questionable results, in 2018 we were recommended Javier’s services. From the first moment he has shown us his knowledge and extensive experience in SEM campaigns: better lead quality, better CTR, more conversion and lower costs. I recommend him 100%.",
      author: "Maarten Moolenbeek",
      role: "Next Destinium",
    },
    {
      quote:
        "SANTACONCHA is an agency with extensive experience in digital marketing. They have been advising us for some time on SEO/SEM with great accuracy and professionalism. It is a company of great trust and seriousness.",
      author: "Sonia Morera",
      role: "Marketing · Canaletas",
    },
    {
      quote:
        "For the first time I can say I work with a digital marketing company that knows what it is doing. Great professionals and very responsible.",
      author: "Felip Andanuche",
      role: "Marketing & Communication · MGS",
    },
    {
      quote:
        "SANTACONCHA is much more than an agency: it is your partner and business advisor. Their global vision of digital strategy helps you improve results, with performance well above what was expected.",
      author: "Sérgio Claudino",
      role: "Holmes Place España",
    },
    {
      quote:
        "I was looking for a dynamic, proactive and digitally cutting-edge agency to support our digital marketing strategy, but small, close and committed. Santa Concha understood our dynamics immediately. Very satisfied with the results and with the team.",
      author: "Cécile Canivet",
      role: "Marketing & Communication Director · Mateco",
    },
    {
      quote:
        "I have usually had to stay on top of agencies to get results. With Santa Concha that is not the case: they keep proposing improvements and they commit. I have brought them into the marketing strategy on different projects.",
      author: "Orlando Marín",
      role: "Digital Business Director · Balvi",
    },
    {
      quote:
        "I contacted them because they were a reference in digital marketing and we have not been apart since. Honesty, professionalism, flexibility and efficiency. A safe bet.",
      author: "Daniel Ruiz",
      role: "Digital Transformation · Ferrer",
    },
    {
      quote:
        "SANTACONCHA is a partner more than a typical agency: an extension of our department. One of the best Digital and Performance Marketing agencies in Barcelona. Close, kind, personal and direct.",
      author: "Gemma Pascual",
      role: "Digital Marketing · Alliance Healthcare",
    },
    {
      quote:
        "They were not just another marketing agency, and I was not wrong. Delighted with the rebranding, the website and the digital strategy, which has given us very positive results from day one.",
      author: "Marta Bonet",
      role: "Marketing · Chromessence",
    },
    {
      quote:
        "The best partner to trust with a brand’s digital strategy.",
      author: "Maite del Mundo",
      role: "Cofounder · Creatique",
    },
    {
      quote:
        "The whole team are outstanding professionals. High-quality deliverables, 100% optimized for SEO and usability. Real pros.",
      author: "Marc Gaja",
      role: "General Manager · ISEP",
    },
    {
      quote: "Service of 10. I work with them to run my marketing campaigns.",
      author: "David Gutierrez",
      role: "Master’s classmate · KSchool",
    },
    {
      quote:
        "Hiring Santaconcha for the development, expansion and maintenance of our ecommerce was a before and after. There are no words to thank what Javier and Julián have done for the success of our online store.",
      author: "Carlos Junyent",
      role: "General Manager · Copytop",
    },
  ],

  arcLabel: chapters.arc,
  arcTitle: "Effort and passion got me here. There is still a long way to go.",
  arcLead: "From selling on the shop floor to running a boutique agency.",

  pressLabel: chapters.press,
  pressTitle: "When the work is told out loud.",
  pressLead:
    "Interviews, workshops and classrooms. Judgment sharpens when you have to explain it in public.",
  press: [
    {
      name: "PPCCast",
      detail: "Interview · PPC agencies from the inside",
    },
    {
      name: "SEO Clinic",
      detail: "Talk · Positioning",
    },
    {
      name: "Barcelona Digital Talent",
      detail: "Twitch interview · SEO and career",
    },
    {
      name: "4YFN · Mobile World Congress",
      detail: "SEO/SEM workshop with KSchool",
    },
    {
      name: "PPC Fest",
      detail: "Sponsorship · Paid advertising",
    },
    {
      name: "Semrush",
      detail: "Collaborations and conversations in the SEO/SEM industry",
    },
    {
      name: "Borsadiner",
      detail: "Talk · Investing",
    },
    {
      name: "Barcelona Trading Point",
      detail: "Cofounder · Stock-market event",
    },
  ],

  ctaLabel: chapters.mission,
  ctaTitle: "Since 2010 growing projects. The next one can be yours.",
  ctaText:
    "Marketing leadership, a serious second opinion on SEO and SEM, or a full project with SANTACONCHA. No endless forms.",
  ctaSign: "Signed,",
  ctaName: site.fullName,
};

/** Digital / marketing track (featured) */
export const timelineDigital = [
  {
    year: "2019 — today",
    title: "Cofounder and Head of Marketing · SANTACONCHA",
    text: "I cofounded the agency with Julián. I run marketing: acquisition, SEO/GEO, campaigns and the conversation with the client. The team covers design and development. No helicopter. Coffee, a plan, and the habit of making it land.",
  },
  {
    year: "2025 — today",
    title: "Partner & CMO · Academia de Pensamiento Diferencial",
    text: "Pep Torres has spent decades proving that extraordinary results are method, not magic. As partner and CMO I help that method reach more people: product, acquisition and the Academy’s digital layer.",
  },
  {
    year: "2023 — today",
    title: "Cofounder · CAPTAMOS TU LEAD",
    text: "A looser way to tell what we already know how to do: acquisition, communication and performance for projects that want less of a straitjacket. Same standard, different tone. Even REME, the chat mascot, is part of the game.",
  },
  {
    year: "2017 — 2024",
    title: "Teaching · KSchool, UAB, UB and TeamLabs",
    text: "SEO for CMS module on KSchool’s SEO-SEM Master’s (WordPress, PrestaShop, Magento). Classes at UAB, the UB pharmaceutical marketing postgraduate, and analytics on TeamLabs’ LEINN degree. Teaching forces you to make daily work explicit.",
  },
  {
    year: "2017 — 2020",
    title: "Reactiva · from specialist to partner and CMO",
    text: "I came in on SEO, WPO, SEM and analytics. I left as partner and CMO: strategy for clients (NGOs, leisure, ecommerce, industry, telco) and for the agency itself. That is where Julián and I set off to build SANTACONCHA, still sistered with them.",
  },
  {
    year: "2016 — 2017",
    title: "Traffic Manager · Clinmoo",
    text: "A real-estate agency. SEO audits, landing-page WPO, PPC on Google and Facebook/Instagram, and an attribution system with automated reporting. Developers such as Núñez y Navarro, Aelca or Forcadell, and projects like BADI.",
  },
  {
    year: "2013 — 2015",
    title: "CMO · Trustivity",
    text: "An ecommerce reviews startup: I was part of the founding team. Everything that was not code: product, content, acquisition, trade shows, partnerships, legal and internationalization. Clients such as Movistar, Promofarma or Electrocosto.",
  },
  {
    year: "2010 — 2013",
    title: "Efecto Esponja and the leap into digital",
    text: "Finance and economics blog: Top 10 “Best business blog” at Premios Bitácoras 2011, 42nd in the Coguan ranking and 78th in ebuzzing/wikio Spain. A talk at Borsadiner, a community on bolsa.com… and the push that took me into digital marketing.",
  },
];

/** Alias for home (first digital milestones) */
export const timeline = timelineDigital;

/**
 * Earlier experience (sales, events, finance…).
 * Not hidden: summarized for what it brings to marketing today.
 */
export const timelineRoots = {
  label: "Before digital marketing",
  title: "What you don’t see on an SEO CV… and it changes everything.",
  lead: "Sales, family business, finance and events before entering the digital world. They are not decoration: they are the foundation of how I think about acquisition, margin and people.",
  items: [
    {
      title: "Street-level and B2B sales",
      text: "Family fruit shop, luxury sofas (Natuzzi, Grassoler, Divatto), electronics (MediaMarkt, LG, Garmin), cold-calling in banking and training. You learn to hear real objections.",
    },
    {
      title: "What they bring today",
      text: "Empathy with whoever is selling, rigor with money and patience with the process. That is why in marketing I start with the business, not the tool.",
    },
  ],
};

/** Stock-market / investing milestones — own block on the path page */
export const marketsArc = {
  label: "The stock-market world",
  title: "Before SEO, I was already reading the market.",
  lead: "I have invested in the stock market since around 2000. That stage is not nostalgia: it is the judgment with which I look at risk, signal and patience in any campaign.",
  milestones: [
    {
      title: "Efecto Esponja",
      detail: "Blog · economics and finance",
      text: "Top 10 «Best business blog» at Premios Bitácoras 2011, 42nd in the Coguan ranking of economics/finance blogs and 78th in ebuzzing/wikio Spain. The blog that pushed me into digital marketing.",
    },
    {
      title: "bolsa.com",
      detail: "Community · selected as guru",
      text: "Active profile with thousands of followers (more than 1.800 already in 2011; close to 4.600 in 2015). Daily conversation with traders and investors, not just standalone articles.",
    },
    {
      title: "Borsadiner 2011",
      detail: "Speaker · Bolsa.com stand",
      text: "Talk «Especular de forma fácil y consistente» at the money, stock market and investment fair (Palacio de Congresos de Cataluña). A real stage in front of the industry.",
    },
    {
      title: "Barcelona Trading Point",
      detail: "Cofounder · CCO",
      text: "Trader event for traders: +90 conferences, +1.000 attendees and +60 sponsors. A meeting point still alive online.",
      href: "http://bcntradingpoint.com/",
    },
    {
      title: "elmundobursatil.es",
      detail: "Technical analysis",
      text: "I wrote technical analysis for the outlet. Translating the chart into a clear thesis — the same muscle I use today to prioritize campaigns.",
    },
    {
      title: "Invertia · moneycall",
      detail: "Forum · ~2002–2006",
      text: "Active forum member under the nick moneycall. A few years of daily conversation about markets before «personal brand» existed.",
    },
  ],
};

export const stages = [
  { name: "PPC Fest", detail: "Sponsorship · Paid advertising" },
  { name: "4YFN · MWC", detail: "SEO/SEM workshop · KSchool" },
  { name: "Barcelona Digital Talent", detail: "Twitch interview" },
  { name: "Borsadiner", detail: "Talk · investing" },
  { name: "PPCCast", detail: "Interview · PPC agencies" },
  { name: "Semrush", detail: "Industry collaborations" },
  { name: "SEO Clinic", detail: "Talk · positioning" },
  { name: "Barcelona Trading Point", detail: "Cofounder · stock-market event" },
];

export const expertise = {
  intro:
    "Digital marketing is only worth it if it moves the business. These are the areas I go deep on, and where SANTACONCHA adds design and development when the project asks for it.",
  areas: [
    {
      title: "Technical, local and international SEO",
      href: "/expertise/seo-barcelona",
      cta: "SEO expert in Barcelona",
      items: [
        "Technical and content audits",
        "Information architecture and crawl budget",
        "Local and international SEO",
        "GEO: visibility in search with AI",
        "WPO and Core Web Vitals",
      ],
    },
    {
      title: "Paid advertising (PPC / SEM)",
      href: "/expertise/google-ads-meta-ads",
      cta: "Google Ads and Meta Ads",
      items: [
        "Google Ads: Search, Shopping, Performance Max and YouTube",
        "Meta Ads: Facebook and Instagram",
        "Bing, TikTok, LinkedIn and remarketing",
        "Account structure and naming",
        "CPA, ROAS and lead quality control",
      ],
    },
    {
      title: "Analytics, CRO and measurement",
      href: "/expertise/analitica-cro",
      cta: "Analytics and CRO",
      items: [
        "Google Analytics 4 and Tag Manager",
        "Search Console and executive reporting",
        "Funnels, landings and A/B tests",
        "Attribution, email and WhatsApp",
        "CRM and ecommerce integrations",
      ],
    },
    {
      title: "Marketing strategy and leadership",
      href: "/expertise/direccion-de-marketing",
      cta: "Marketing leadership",
      items: [
        "End-to-end digital plans",
        "Coordination of design, dev and marketing",
        "Budget and channel prioritization",
        "Trade shows and offline actions when needed",
        "Reporting for the leadership committee",
      ],
    },
  ],
  brands:
    "Brands I have worked with, directly or indirectly: Codorníu, Nestlé, Ferrer, Sanofi, Mateco, Sportium, Synlab, Optimus, Holmes Place, Sotheby's, Mary Kay, Comics Barcelona, Windoor, Balvi, Chromessence and Training Park, among others.",
};

export const contact = {
  title: "Tell me what needs to move.",
  text: "Marketing leadership, a serious second opinion on SEO and SEM, or a project with SANTACONCHA. I reply myself.",
  note: "For agency projects you can also go to santaconcha.com. For a direct conversation, better here, LinkedIn or X.",
};
