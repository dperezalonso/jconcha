# javierconcha.com — instrucciones de puesta en marcha

Documento para el equipo que gestiona el servidor.  
Sitio: **https://javierconcha.com**  
Stack: **Next.js 16 + React 19** (Node.js, no PHP, no WordPress, no HTML estático).

No basta con copiar la carpeta a `public_html` / `htdocs`. Si se sirve como archivos estáticos, la web no funciona (rutas, idiomas, imágenes y SEO se rompen).

---

## 1. Requisitos

| Requisito | Valor |
| --- | --- |
| Node.js | **20.9.0 o superior** (LTS). Comprobar con `node -v` |
| npm | El que traiga esa versión de Node |
| Sistema | Linux (Ubuntu/Debian recomendado) |
| Proceso | Debe quedar **en marcha 24/7** (`next start`) |
| Proxy | Nginx o Apache delante, con HTTPS |
| Dominio | `javierconcha.com` (y `www` redirigido a apex, o al revés; la URL canónica es **https://javierconcha.com** sin `www`) |
| Puerto interno | `3000` (solo localhost; no exponerlo a internet) |
| Base de datos | **No hay** |
| Variables de entorno | **No hay** (no hace falta `.env`) |
| Red en el build | El servidor necesita **salida a internet durante `npm run build`** (descarga de fuentes) |

Memoria recomendada para el build: **al menos 1 GB RAM** libre. Con 512 MB el `next build` suele fallar.

---

## 2. Qué enviar / qué NO copiar

Enviar el proyecto **completo** (zip o git), **excepto**:

- `node_modules/`
- `.next/`
- `out/`
- `.git/` (opcional; si van por git, sí hace falta)

**Importante:** no subir un `.next` generado en Windows. Hay que instalar y **compilar en el propio Linux**.

Ruta sugerida en el servidor:

```text
/var/www/javierconcha
```

---

## 3. Instalación (paso a paso)

```bash
cd /var/www/javierconcha

# Node 20+ (ejemplo con NodeSource o nvm; usar el método de la casa)
node -v    # debe ser v20.9.0 o superior

npm ci
# si no hay package-lock usable: npm install

npm run build
```

El build tiene que terminar con éxito (código 0). Si falla por memoria:

```bash
NODE_OPTIONS=--max-old-space-size=1536 npm run build
```

Arranque de prueba (en primer plano):

```bash
npm start
# equivale a: next start --port 3000
```

En el propio servidor: `curl -I http://127.0.0.1:3000` debe devolver **200**.

Cuando eso funcione, dejar el proceso gestionado (apartado 4) y el proxy (apartado 5). **No dejar `npm run dev` en producción.**

---

## 4. Dejarlo en marcha (PM2)

```bash
sudo npm install -g pm2

cd /var/www/javierconcha
pm2 start npm --name javierconcha -- start
pm2 save
pm2 startup
```

Comandos útiles:

```bash
pm2 status
pm2 logs javierconcha
pm2 restart javierconcha
```

El proceso debe escuchar **127.0.0.1:3000**, no `0.0.0.0` público. Si hace falta forzar puerto:

```bash
PORT=3000 pm2 start npm --name javierconcha -- start
```

---

## 5. Nginx (proxy + HTTPS)

Ejemplo. Ajustar certificados al método de la casa (Certbot, panel, etc.).

```nginx
# Redirigir www → apex
server {
    listen 80;
    listen [::]:80;
    server_name www.javierconcha.com javierconcha.com;
    return 301 https://javierconcha.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.javierconcha.com;
    # ssl_certificate     …;
    # ssl_certificate_key …;
    return 301 https://javierconcha.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name javierconcha.com;

    # ssl_certificate     /etc/letsencrypt/live/javierconcha.com/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/javierconcha.com/privkey.pem;

    client_max_body_size 8m;

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
    }
}
```

Luego:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

Si el panel es **Apache + ProxyPass** (Plesk/cPanel):

```apache
ProxyPreserveHost On
ProxyPass        / http://127.0.0.1:3000/
ProxyPassReverse / http://127.0.0.1:3000/
RequestHeader    set X-Forwarded-Proto "https"
```

SSL en el proxy, no en Node.

---

## 6. DNS

| Tipo | Nombre | Destino |
| --- | --- | --- |
| A | `@` (javierconcha.com) | IP del servidor |
| A o CNAME | `www` | misma IP, o CNAME a `javierconcha.com` |

TTL bajo mientras se migra. Cuando HTTPS funcione, subir TTL.

Correo (`hola@javierconcha.com`): **no lo gestiona esta app**. MX/SPF/DKIM se dejan como estén.

---

## 7. Comprobar que está bien

Abrir (todas deben dar 200, no 404 ni 500):

- https://javierconcha.com/
- https://javierconcha.com/recorrido
- https://javierconcha.com/expertise
- https://javierconcha.com/expertise/seo-barcelona
- https://javierconcha.com/contacto
- https://javierconcha.com/en
- https://javierconcha.com/ca
- https://javierconcha.com/sitemap.xml
- https://javierconcha.com/robots.txt
- https://javierconcha.com/ideas → redirección **301** a `/`

También:

- `www.javierconcha.com` → **301** a `https://javierconcha.com/…`
- http → **301** a https
- La foto del hero se ve nítida (usa `/_next/image`; si sale rota, el proxy está cortando esa ruta)
- El selector ES / EN / CA funciona
- Cabecera `content-type` de `/` es `text/html`

---

## 8. Actualizar la web más adelante

```bash
cd /var/www/javierconcha
# sustituir archivos (o git pull)
npm ci
npm run build
pm2 restart javierconcha
```

Siempre **build en el servidor**, luego restart. No hace falta tocar Nginx si el puerto no cambia.

---

## 9. Errores frecuentes (no hacer)

| Mal | Bien |
| --- | --- |
| Copiar la carpeta a `public_html` y abrir index | Node + `npm start` detrás de Nginx |
| `npm run dev` en producción | `npm start` (`next start`) |
| Subir `node_modules` o `.next` de Windows | `npm ci` + `npm run build` en Linux |
| Exponer el puerto 3000 al mundo | Solo `127.0.0.1:3000` |
| PHP-FPM / `.htaccess` de WordPress sobre esta ruta | Proxy inverso a Node |
| Node 16 o 18 | Node **≥ 20.9** |
| Cortar `/_next/` en el firewall o WAF | Debe llegar a Node (estáticos + optimizador de imágenes) |

---

## 10. Resumen de una línea

Instalar Node 20+, copiar el código (sin `node_modules` ni `.next`), `npm ci && npm run build`, dejar `npm start` con PM2 en el puerto 3000 y poner Nginx/Apache con SSL haciendo proxy a `http://127.0.0.1:3000`.

Cualquier duda de aplicación (rutas, idiomas, contenido): el código ya incluye redirects, sitemap y hreflang; no hace falta configurar eso en el servidor más allá del proxy y el DNS.
