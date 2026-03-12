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
A Next.js + Tailwind CSS base template for the **NAAAS Holding Group** web application preview.

## ✨ Features

- **Navbar** — Sticky header with hamburger menu and centered NAAAS logo (SVG)
- **Hero Slider** — Full-screen image carousel showcasing NAAAS subsidiaries with auto-advance
- **Business Grid** — Responsive card grid highlighting all business units with golden labels
- **About Section** — Brand story with animated stat counters
- **Mobile Menu** — Full-screen overlay navigation (matching the original site's design)
- **Footer** — Social media icons + copyright

## 🎨 Design

- Inspired by the **NAAAS Holding Group** official website (naaasholdinggroup.com)
- Gold/amber (`#C9A84C`) brand color throughout
- Clean white background with modern typography
- Fully responsive for mobile and desktop

## 🚀 Getting Started

```bash
npm install
npm run dev        # Start development server at http://localhost:3000
npm run build      # Build for production
npm run start      # Start production server
```

## 🗂 Project Structure

```
app/
  components/
    Navbar.tsx        — Top navigation bar
    MobileMenu.tsx    — Full-screen mobile navigation overlay
    HeroSlider.tsx    — Auto-advancing hero carousel
    BusinessGrid.tsx  — Subsidiary business cards
    AboutSection.tsx  — Brand overview + stats
    Footer.tsx        — Social icons + copyright
  globals.css         — Global styles + Tailwind
  layout.tsx          — Root layout with metadata
  page.tsx            — Main page composition
```

## 🏢 Business Units Showcased

1. NAAAS Logistics
2. NAAAS Events & Marketing
3. Medical Tech for Medicines
4. NAAAS Real Estate
5. NAAAS Agriculture
6. NAAAS Travel & Hospitality
