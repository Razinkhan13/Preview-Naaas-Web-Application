# CLAUDE.md — NAAAS Holding Group Web Application

This file provides guidance for AI assistants (Claude, Copilot, etc.) working in this repository.

---

## Project Overview

A **Next.js 16 + Tailwind CSS 4** single-page marketing/landing site for **NAAAS Building and Venture BD Ltd.** (trading as NAAAS Holding Group), a diversified conglomerate with six business subsidiaries. The application showcases the group's business units with premium animations, smooth scrolling, and a responsive layout.

**License**: MIT (Copyright 2026 Rizum)

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19.2.3 |
| Language | TypeScript (strict) | ^5 |
| Styling | Tailwind CSS | ^4 |
| Animation | GSAP + @gsap/react | 3.14.2 / 2.1.2 |
| Animation | Framer Motion | ^12.38.0 |
| Smooth Scroll | Lenis | ^1.3.21 |
| Linting | ESLint 9 + eslint-config-next | ^9 / 16.1.6 |
| PostCSS | @tailwindcss/postcss | ^4 |

---

## Development Commands

```bash
npm install        # Install all dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

There are **no test files or test runner configuration** in this project. Do not assume Jest, Vitest, or Cypress is available.

---

## Directory Structure

```
Preview-Naaas-Web-Application/
├── .github/
│   └── copilot-instructions.md   # Legacy AI assistant guidelines
├── public/
│   ├── naaas-logo.svg            # Primary brand logo (SVG)
│   └── *.svg                     # Other static icons
├── app/
│   ├── layout.tsx                # Root layout — metadata, fonts, ThemeProvider
│   ├── page.tsx                  # Main page — composes all sections (client component)
│   ├── globals.css               # Global CSS variables, Tailwind imports, animations
│   ├── favicon.ico
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky nav with scroll-hide/show, theme toggle, CTA
│   │   ├── MobileMenu.tsx        # Full-screen mobile overlay with clip-path animation
│   │   ├── HeroSlider.tsx        # 6-slide auto-advancing carousel with parallax
│   │   ├── Marquee.tsx           # Dual-direction scrolling text with scroll velocity
│   │   ├── BusinessGrid.tsx      # 3-col responsive cards for 6 business units
│   │   ├── AboutSection.tsx      # Brand story, animated stat counters, value cards
│   │   ├── ContactSection.tsx    # Contact form + info; success state on submit
│   │   ├── Footer.tsx            # Social links, link columns, copyright
│   │   ├── SmoothScroll.tsx      # Lenis wrapper for page-level smooth scrolling
│   │   ├── CustomCursor.tsx      # Gold cursor dot + ring (desktop only)
│   │   ├── Preloader.tsx         # Character-reveal loading screen (~2.8s)
│   │   └── ThemeToggle.tsx       # Sun/Moon button (uses ThemeContext)
│   └── contexts/
│       └── ThemeContext.tsx      # Light/dark theme — persists to localStorage
├── next.config.ts                # Next.js config (minimal)
├── tsconfig.json                 # TypeScript strict config; path alias @/* → ./*
├── eslint.config.mjs             # ESLint config
├── postcss.config.mjs            # PostCSS with Tailwind v4
├── package.json
└── package-lock.json
```

---

## Architecture & Key Patterns

### Component Model

- All components are **functional React components with TypeScript**.
- Interactive components (those using `useState`, `useEffect`, `useRef`, event handlers, GSAP, Lenis) must have the **`"use client"` directive** at the top.
- Non-interactive wrapping components (e.g., `layout.tsx`) are server components by default.
- **One component per file**. PascalCase filenames for components (e.g., `HeroSlider.tsx`).
- Use **named exports** for all components. `app/page.tsx` uses a default export.

### Styling

- **Tailwind CSS v4 utility classes exclusively**. Do not use CSS modules, styled-components, or inline styles.
- Responsive design uses Tailwind prefixes in mobile-first order: `sm:` → `md:` → `lg:`.
- Theme colors and spacing live in **CSS custom properties** in `globals.css`. Reference them via Tailwind's `var()` or the defined utility classes — do not hard-code hex values in JSX.
- The primary gold brand variable is `--gold: #C9A84C`.

### Theming

- `ThemeContext.tsx` provides `{ theme, toggleTheme }` via `useContext`.
- The active theme is applied as `data-theme="light"` or `data-theme="dark"` on the `<html>` element.
- Theme persists to `localStorage` under the key `theme`. System preference is used as the initial fallback.
- Do not manipulate `document.documentElement.classList` for theming — use the `data-theme` attribute instead.

### Animation

- **GSAP** is the primary animation library. Use `@gsap/react` hooks (`useGSAP`) for component-scoped animations with automatic cleanup.
- **ScrollTrigger** is used for scroll-based reveals across multiple components. Always pin `scroller` to the document body (not the Lenis wrapper element) unless specifically required.
- **Lenis** provides smooth scrolling. The `SmoothScroll` wrapper in `page.tsx` initialises Lenis globally. Do not create additional Lenis instances.
- **Framer Motion** is a declared dependency but is only used minimally. Prefer GSAP for new animations to maintain consistency.
- Always clean up GSAP contexts and ScrollTrigger instances in `useEffect` cleanup functions or via `useGSAP`'s built-in cleanup.

### State Management

- Local `useState` and `useRef` for component state.
- `ThemeContext` for global theme state.
- No external state library (Redux, Zustand, etc.) is used or needed.

---

## Brand & Design Guidelines

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--gold` | `#C9A84C` | Primary accent — borders, labels, highlights |
| `--gold-dark` | `#A8892A` | Hover/pressed states for gold elements |
| `--gold-light` | `#E8C96A` | Lighter gold, gradient endpoints |

**Never hard-code these hex values in JSX.** Use CSS variables or Tailwind's `var()` syntax.

### Business Unit Accent Colors

Each of the 6 units has a unique accent used in the HeroSlider and BusinessGrid:

| Business Unit | Accent Color |
|---|---|
| NAAAS Logistics | Sky blue `#38BDF8` |
| Events & Marketing | Purple `#E879F9` |
| Medical Technology | Cyan `#22D3EE` |
| Real Estate | Indigo `#818CF8` |
| Agriculture | Emerald `#34D399` |
| Travel & Hospitality | Amber `#FBBF24` |

### Typography

- **Sans-serif (body/UI)**: Inter
- **Display (headings)**: Georgia (serif)
- Rely on the font stack defined in `globals.css` and `layout.tsx`.

### Layout

- Mobile-first responsive design.
- Navbar height: `--navbar-height: 80px` (CSS variable).
- Standard section padding: `py-24 lg:py-32` (follow the pattern in existing sections).

---

## CSS Utility Reference (`globals.css`)

Key custom classes available globally:

| Class | Effect |
|---|---|
| `.gradient-text` | Gold gradient text |
| `.glass` | Glassmorphism with backdrop blur |
| `.glass-gold` | Gold-tinted glass |
| `.shadow-gold` | Gold box shadow |
| `.biz-card` | Business card hover lift transform |
| `.magnetic-btn` | Fill sweep on hover |
| `.marquee-track` | Left-to-right marquee animation |
| `.marquee-track-reverse` | Right-to-left marquee animation |
| `.reveal` | Scroll-triggered reveal (add via GSAP) |
| `.divider-gold` | Gold gradient horizontal divider |
| `.bg-grid-pattern` | Subtle grid background |
| `.bg-dot-pattern` | Dot matrix background |

Key `@keyframes` available as Tailwind `animate-*` utilities:

`animate-fade-in-up`, `animate-slide-left`, `animate-slide-right`, `animate-float`, `animate-float-slow`, `animate-shimmer`, `animate-pulse-border`, `animate-spin-slow`, `animate-counter-in`, `animate-glow-pulse`, `animate-scale-in`

---

## Coding Conventions

- **TypeScript**: All new files must be `.tsx` or `.ts`. Add proper type annotations; avoid `any`.
- **`const` over `let`**: Never use `var`.
- **Named exports** for components; default export only for `page.tsx`.
- **Tailwind only** for styles. No inline `style={{}}` attributes except for truly dynamic CSS values that Tailwind cannot express (e.g., a runtime hex color).
- **No new dependencies** without a strong justification. The stack is intentionally minimal.
- **No backend or API routes** are present. The contact form is frontend-only (no email sending).
- **Images** go in `public/` and are referenced as `/image-name.ext`. Use Next.js `<Image>` component for images that benefit from optimization.
- **GSAP cleanup**: Always return a cleanup function from `useEffect` when using GSAP, or use the `useGSAP` hook which handles cleanup automatically.

---

## Adding New Components

1. Create the file in `app/components/YourComponent.tsx`.
2. Add `"use client"` if the component uses any browser APIs, hooks (except `use`, `cache`), or event handlers.
3. Export as a named export: `export function YourComponent() { ... }`.
4. Import and render in `app/page.tsx` in the correct section order.
5. Use existing CSS variables and Tailwind classes — do not introduce new color values.

---

## Adding New Business Units

Business unit data is defined locally in each component (`HeroSlider.tsx`, `BusinessGrid.tsx`, `Marquee.tsx`). If a new unit is added:

1. Add its data to all three components to keep them in sync.
2. Choose a unique accent color that does not clash with the existing six.
3. Add the unit name to the `Marquee.tsx` keywords array.

---

## What This Project Does Not Have

Be aware of these intentional omissions — do not add them without explicit instruction:

- No backend API routes (`app/api/`)
- No database or ORM
- No authentication
- No analytics or tracking scripts
- No email service integration (contact form is a UI prototype)
- No test files or test runner
- No CI/CD workflows (`.github/workflows/`)
- No environment variable files (`.env.example`)
- No image files in `public/` beyond SVGs
- No Storybook or component documentation

---

## Git & Branch Conventions

- Development branch for AI-driven documentation changes: `claude/add-claude-documentation-NF0me`
- Main production branch: `main`
- Commit messages should be concise and imperative (e.g., `Add ContactSection smooth reveal animation`).
- Do not push directly to `main` without an explicit instruction.
