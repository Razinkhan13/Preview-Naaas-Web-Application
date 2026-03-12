# Naaas Web Application — Preview

A visually appealing, interactive front-end preview for **Naaas** — a fashion-forward e-commerce and lifestyle brand by **Naaas Holding Venture BD Ltd.**

Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4** as a static UI showcase — no backend or database required.

## ✨ Features

- **Landing Page** — Hero section with branding, CTAs, and animated scroll indicator
- **Navbar** — Sticky, scroll-aware navbar with mobile hamburger menu
- **Product Grid** — 8 mock products with interactive category filter tabs and sort dropdown
- **Product Cards** — Aspect-ratio image cards with hover quick-add overlay, tag badges, and BDT pricing
- **About Section** — Brand story with lifestyle imagery and stat counters
- **Footer** — Newsletter form, navigation links (Shop / Company / Help), social icons
- **Light / Dark Theme** — Respects system `prefers-color-scheme`
- **Fully Responsive** — Mobile-first design with Tailwind CSS

## 🗂 Folder Structure

```
├── app/
│   ├── globals.css       # Tailwind imports + CSS variables
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Home page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Sticky responsive navigation
│   ├── Hero.tsx          # Full-screen hero section
│   ├── ProductGrid.tsx   # Filtered product grid (client component)
│   ├── ProductCard.tsx   # Individual product card
│   ├── About.tsx         # Brand story section
│   └── Footer.tsx        # Footer with newsletter + links
├── lib/
│   └── mockData.ts       # Mock products and category data
├── public/               # Static assets
├── next.config.ts        # Next.js config (Unsplash image domains)
├── tsconfig.json         # TypeScript config
└── package.json          # Scripts and dependencies
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the preview.

## 🛠 Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |

## 📝 Notes

- This is a **static UI preview** — no backend, database, or API integrations.
- Product images are served from [Unsplash](https://unsplash.com/) via Next.js image optimization.
- Pricing is displayed in Bangladeshi Taka (BDT / ৳).