# Full-Stack Portfolio (React + Node/Express)

Deployment URL: <add-your-Netlify-URL-here>

A clean, responsive portfolio website with a React frontend and a Node.js/Express backend. The contact form uses Formspree for email handling.

## Structure

- `frontend/` — React app (Vite) + Tailwind CSS + React Router + Framer Motion
- `backend/` — Node.js + Express server with `/contact` endpoint and CORS (no email sending; reserved for future APIs). Backend is not deployed yet.

## Quick Start

### 1) Clone and install

```bash
# From project root
cd frontend
npm install

cd ../backend
npm install
```

### 2) Environment variables

- Frontend: copy `frontend/.env.example` to `frontend/.env` and set `VITE_API_BASE_URL` to your backend URL (only required if you add APIs), e.g. `http://localhost:5000`.
- Backend: copy `backend/.env.example` to `backend/.env` and set:
  - `PORT` (optional, defaults to 5000)
  - `CORS_ORIGIN` (e.g., `http://localhost:5173` in dev, or your Netlify domain in prod)

### 3) Run in development

In two terminals:

```bash
# Terminal A - frontend
cd frontend
npm run dev

# Terminal B - backend
cd backend
npm run dev
```

Frontend dev server will print a local URL (usually http://localhost:5173). Backend defaults to http://localhost:5000.

### 4) Build (frontend)

```bash
cd frontend
npm run build
```

This outputs to `frontend/dist/`.

## Deployment

### Frontend on Netlify

- Base directory: `frontend/`
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables (optional):
  - `VITE_API_BASE_URL` = your backend base URL (only if your frontend calls the backend)
- SPA routing is configured via `frontend/netlify.toml` (redirects all routes to `/index.html`).

Deploy via UI:
- New site from Git or manual deploy pointing to `frontend/`.

Quick checklist:
- Ensure `frontend/netlify.toml` exists with SPA redirect to `/index.html`.
- Ensure Contact form uses Formspree (form ID `mgvpwnpa`).
- No `VITE_API_BASE_URL` required unless you add backend APIs.

Deploy via CLI (optional):
- From `frontend/`: `npm run build` then `npx netlify deploy` (or `netlify deploy` if installed globally), and select `dist`.

### Backend on Render (or Railway) — optional (for future APIs)

- Create a new Web Service from the `backend/` directory or repository subfolder.
- Build Command: `npm install`
- Start Command: `npm start`
- Node version: default or your preference
- Environment variables:
  - `PORT` (platform typically sets this automatically)
  - `CORS_ORIGIN` = your Netlify site URL (e.g., `https://your-site.netlify.app`)

After backend is live, update your Netlify frontend env var `VITE_API_BASE_URL` to the Render/Railway backend URL and redeploy the frontend.

## Tech

- React 18, Vite, React Router, Framer Motion
- Tailwind CSS for styling
- Express, CORS (backend reserved for future APIs)

## Project Sections

- Hero, About, Projects, Skills, Contact
- Projects have title, image, GitHub/demo links
- Contact form uses Formspree (form ID `mgvpwnpa`)

## Notes

- The backend is intentionally lightweight and does not send emails; the contact form is handled by Formspree.
- Future APIs plan: endpoints like `/api/projects` and `/api/contact/analytics` are scaffolded as placeholders in `backend/server.js` and can be implemented later.
- Keep credentials in environment variables only. Never commit secrets.
