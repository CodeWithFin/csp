# Siscom Connect

Marketing site for Siscom Connect: bulk SMS, USSD, WhatsApp, shortcodes and sender IDs, and M-Pesa. Built with Next.js and shipped as a Docker image.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Contact form messages are saved for the admin dashboard at [http://localhost:3000/admin](http://localhost:3000/admin). Copy `.env.example` to `.env.local` and set `ADMIN_PASSWORD` before signing in.

```bash
cp .env.example .env.local
```

Contact details live in `lib/site.ts` (`email`, `phoneDisplay`, `phoneTel`, `whatsapp`). Fill those before go-live.

## Production (Docker)

On the server:

```bash
ADMIN_PASSWORD=your-strong-password docker compose up -d --build
```

The app listens on port **3000**. Admin responses live at `/admin`. Inquiries are stored in the `inquiries-data` Docker volume.

Put Nginx or Caddy in front of it:

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
