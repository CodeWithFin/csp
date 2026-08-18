# Siscom Connect

Marketing site for Siscom Connect — bulk SMS, USSD, WhatsApp, shortcodes & sender IDs, and M-Pesa — built with Next.js and shipped as a Docker image.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Contact details live in `lib/site.ts` (`email`, `phoneDisplay`, `phoneTel`, `whatsapp`). Fill those before go-live.

## Production (Docker)

On the server:

```bash
docker compose up -d --build
```

The app listens on port **3000**. Put Nginx or Caddy in front of it:

```nginx
server {
    listen 80;
    server_name your-domain.ke;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

To publish on port 80 directly, change the compose mapping to `"80:3000"`.
