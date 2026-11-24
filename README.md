# Cong Khanh — Engineering & Automation Portfolio Website

A fast, self-contained, zero-build static portfolio website showcasing **11 verified engineering case studies** across Full-Stack Web/Mobile, n8n AI & CRM Automation, Security Audits, Real-Device QA, Apache Kafka Streaming, and Heterogeneous Distributed Databases.

## Quick Local Preview
Open `index.html` directly in your browser, or run a local HTTP server:

```bash
cd D:\Project\Portfolio
python -m http.server 8080
# Open http://localhost:8080
```

## Free 1-Minute Deployment (Custom Link to Share With Clients)
1. **Vercel (Recommended):** Drag & drop `D:\Project\Portfolio` or push to a GitHub repo and import into https://vercel.com — instant HTTPS link (e.g., `congkhanh-portfolio.vercel.app`).
2. **Netlify Drop:** Drag & drop the `D:\Project\Portfolio` folder directly onto https://app.netlify.com/drop — live in 10 seconds with zero configuration.
3. **GitHub Pages:** Push `D:\Project\Portfolio` to a public GitHub repo (`ACEBILL/portfolio`), enable **Settings -> Pages -> Branch: main**, and share `https://acebill.github.io/portfolio/`.

## Structure
- `index.html` — Responsive single-page portfolio with interactive Case Study Modal & Lightbox
- `assets/css/style.css` — Dark emerald developer studio theme
- `assets/js/projects.js` — All 11 structured case studies (easy to add/edit projects)
- `assets/js/app.js` — Category filters, live keyword search, modal gallery & keyboard lightbox
- `assets/images/` — 28 web-optimized project screenshots & portrait
