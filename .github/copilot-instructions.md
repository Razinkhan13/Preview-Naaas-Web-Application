# Copilot Instructions for NAAAS Holding Group Web Application

## Project Overview

This is a **Next.js 16 + Tailwind CSS 4** web application preview for the **NAAAS Holding Group**. It is a single-page marketing/landing site showcasing the group's subsidiaries with a responsive layout inspired by the official NAAAS Holding Group brand.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Language**: TypeScript (strict mode via `tsconfig.json`)
- **Linting**: ESLint 9 with `eslint-config-next`
- **Runtime**: Node.js / React 19

## Project Structure

```
app/
  components/
    Navbar.tsx        — Sticky header with hamburger menu and centered NAAAS SVG logo
    MobileMenu.tsx    — Full-screen overlay navigation for mobile
    HeroSlider.tsx    — Auto-advancing full-screen image carousel for subsidiaries
    BusinessGrid.tsx  — Responsive card grid highlighting all business units
    AboutSection.tsx  — Brand story section with animated stat counters
    Footer.tsx        — Social media icons and copyright footer
  globals.css         — Global styles and Tailwind CSS imports
  layout.tsx          — Root layout with metadata and font configuration
  page.tsx            — Main page composition (assembles all components)
public/               — Static assets (images, icons)
```

## Brand & Design Guidelines

- **Primary brand color**: Gold/amber `#C9A84C` — use for accents, labels, borders, and highlights
- **Background**: Clean white (`#ffffff`) with dark text for contrast
- **Typography**: Modern, clean sans-serif fonts; use Tailwind utility classes
- **Layout**: Fully responsive — mobile-first design; test at both mobile and desktop breakpoints
- **Component style**: Functional React components using Tailwind utility classes (no CSS modules or styled-components)

## Coding Conventions

- Use **TypeScript** for all new files; add proper type annotations
- Use **Tailwind CSS utility classes** for all styling — avoid inline styles
- Components are **client-side React** where interactivity is needed (`"use client"` directive); otherwise use server components by default (Next.js App Router convention)
- Use **named exports** for components; the main page uses default exports
- Keep components focused on a single responsibility; one component per file
- File names use **PascalCase** for React components (e.g., `HeroSlider.tsx`)
- Prefer `const` over `let`; avoid `var`

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Business Units Showcased

1. NAAAS Logistics
2. NAAAS Events & Marketing
3. Medical Tech for Medicines
4. NAAAS Real Estate
5. NAAAS Agriculture
6. NAAAS Travel & Hospitality

## Key Patterns

- **Hero Slider**: Uses `useState` and `useEffect` for auto-advancing carousel; supports manual navigation
- **Mobile Menu**: Toggled via state in `Navbar.tsx`; renders full-screen overlay
- **Stat Counters**: Animated number counters in `AboutSection.tsx` using `useEffect` with `IntersectionObserver`
- **Responsive grid**: `BusinessGrid.tsx` uses Tailwind's `grid-cols` responsive variants

## Notes for Copilot

- When adding new components, place them in `app/components/` and import them in `app/page.tsx`
- Always maintain the gold `#C9A84C` brand color for new UI elements
- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`) for responsive layouts
- When adding images, place them in the `public/` directory and reference with `/image-name.ext`
- Do not add unnecessary dependencies; the stack intentionally stays minimal
