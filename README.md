# NAAAS Holding Group — Web Application Preview

A static preview / base template for the **NAAAS Holding Group** web application, built with **Next.js** and **Tailwind CSS**.

![Preview](https://github.com/user-attachments/assets/d7d8d327-71d1-4fde-8888-7e11c1953da0)

## Features

- **Navbar** — Fixed header with centered NAAAS logo (SVG calligraphic style + Arabic & English branding) and hamburger menu trigger
- **Mobile Menu** — Full-screen overlay with social icons and navigation links matching the original site
- **Hero Slider** — Full-viewport image carousel showcasing 6 NAAAS business divisions with auto-advance, prev/next arrows, dot indicators and a golden "CLICK HERE" CTA
- **Business Cards** — Horizontally scrollable on mobile, grid on desktop — each card shows the subsidiary logo and a golden label band
- **About Section** — Company description with 4 highlight stats
- **Contact Form** — Static contact form (no backend)
- **Footer** — Copyright line + social media icons

## Design

- Gold color scheme (`#C8A951`, `#9A7C3A`) inspired by the NAAAS Holding Group branding
- Supports **light and dark themes** via Tailwind `dark:` variants
- Fully **responsive** — mobile-first layout

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16 (App Router) |
| React | 19 |
| Tailwind CSS | 4 |
| TypeScript | 5 |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles & CSS custom properties
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Landing page
├── components/
│   ├── Navbar.tsx        # Fixed header with logo & hamburger
│   ├── MobileMenu.tsx    # Full-screen menu overlay
│   ├── HeroSlider.tsx    # Auto-advancing image carousel
│   ├── BusinessCards.tsx # Subsidiary card grid/scroll
│   ├── AboutSection.tsx  # About + stats
│   ├── ContactSection.tsx# Contact form
│   └── Footer.tsx        # Copyright & social links
└── data/
    └── businesses.ts     # Mock data for businesses & nav links
```

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
