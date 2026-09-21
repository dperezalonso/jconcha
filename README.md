# Javier Concha — javierconcha.com

Web personal de **Javier Concha López**, cofundador y Director de Marketing de [SANTACONCHA](https://santaconcha.com).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- SEO: metadata, sitemap, robots, JSON-LD (Person / WebSite / Article)
- Contenido editable en `src/lib/`

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Producción

```bash
npm run build
npm start
```

## Estructura útil

| Ruta | Qué es |
|------|--------|
| `/` | Landing principal |
| `/recorrido` | Trayectoria |
| `/expertise` | Capacidades |
| `/ideas` | Blog / audiencia |
| `/contacto` | Contacto |

Edita textos en:

- `src/lib/site.ts` — dominio, email, redes
- `src/lib/content.ts` — copy de páginas
- `src/lib/posts.ts` — artículos del blog

## Nota

El email `hola@javierconcha.com` y algunos detalles son placeholders editables. Sustituye foto, enlaces y datos cuando quieras.
