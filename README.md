<div align="center">

# Yonatan Kibrom Mezgebe — Full‑Stack Developer 🚀

Modern, responsive developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Contact is powered by Formspree.

[Frontend (Live)](https://portfolio743.netlify.app) · [Backend (Live – placeholder APIs)](https://portfolio-v2-ekae.onrender.com) · [Project Repo](https://github.com/yoni743/portfolio-v2)

</div>

---

## 🔗 Live Demos

- **Frontend:** https://portfolio743.netlify.app
- **Backend (placeholder APIs):** https://portfolio-v2-ekae.onrender.com

The backend currently serves placeholder endpoints and is reserved for future features. The contact form uses Formspree (no backend dependency).

## 🧱 Project Structure

```
Portfolio/
├── frontend/               # React + Vite + Tailwind + Framer Motion
│   ├── src/
│   │   ├── components/
│   │   ├── sections/
│   │   ├── data/
│   │   └── utils/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── netlify.toml        # SPA redirects
└── backend/                # Node.js + Express (placeholder APIs)
    ├── server.js
    ├── package.json
    └── .env.example        # PORT, CORS_ORIGIN
```

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite, Tailwind CSS, Framer Motion, React Router
- **Contact:** Formspree (Form ID: `mgvpwnpa`)
- **Backend:** Node.js, Express (CORS enabled; placeholder routes)
- **Deployment:** Netlify (frontend), Render (backend)

## ✉️ Contact Form (Formspree)

The portfolio uses Formspree for secure, serverless form handling.

- Form ID: `mgvpwnpa`
- Frontend posts directly to Formspree using `@formspree/react`
- Success and validation states are handled in `frontend/src/sections/Contact.jsx`

No backend is required for email delivery. You can switch to your own backend in the future if desired.

## 🧑‍💻 Local Development

Clone the repo and install dependencies for both apps.

```bash
# From project root
cd frontend && npm install
cd ../backend && npm install
```

Run dev servers in two terminals:

```bash
# Terminal A - frontend (Vite)
cd frontend
npm run dev  # http://localhost:5173

# Terminal B - backend (Express)
cd backend
npm run dev  # http://localhost:5000
```

Build the frontend:

```bash
cd frontend
npm run build  # outputs to frontend/dist
```

Environment variables:

- Frontend: `frontend/.env` (none required for Formspree)
- Backend: `backend/.env` supports `PORT` and `CORS_ORIGIN` only

## 🚀 Deployment

### Netlify (Frontend)

- Base directory: `frontend/`
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: `frontend/netlify.toml` contains `/* -> /index.html` redirect
- Env vars: none required (unless your frontend will call the backend)

Steps (UI):

- Create new site from Git and point to this repo
- Configure build settings above and deploy

### Render (Backend – optional, placeholder APIs)

- Service: Web Service, root at `backend/`
- Build command: `npm install`
- Start command: `npm start`
- Env vars:
  - `PORT` (Render sets it automatically)
  - `CORS_ORIGIN` = your Netlify domain

After the backend is live, you can wire your frontend to call it by adding `VITE_API_BASE_URL` in Netlify’s site settings (not needed for Formspree).

## 🔮 Future Enhancements

- Dynamic projects sourced from a CMS or database
- `/api/projects` returning curated project data
- `/api/contact/analytics` to track contact conversions
- Light/dark mode preference sync to user profile
- i18n/localization for multi‑language support

## 🎓 Education

**B.Sc. in Computer Science and Engineering**  
Mekelle Institute of Technology (MIT), Ethiopia  
*Expected Graduation:* July 2026  
*Focus:* Software Development, AI, Algorithms, and Full-Stack Engineering

## 👤 Author

- **Name:** Yonatan Kibrom Mezgebe
- **Title:** Full‑Stack Developer
- **Location:** Ethiopia
- **Email:** <yonatankibrom4@gmail.com>
- **GitHub:** https://github.com/yoni743
- **Live Site:** https://portfolio743.netlify.app
- **Backend (placeholder):** https://portfolio-v2-ekae.onrender.com

## 📄 License

MIT License — feel free to use this as a starter for your own portfolio. Attribution appreciated.
