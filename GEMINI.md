# Antumapu - Project Documentation

## Project Overview
**Antumapu** is a web application built using the [Astro](https://astro.build/) framework. It focuses on a clean, modern aesthetic, utilizing [Tailwind CSS v4](https://tailwindcss.com/) for styling and [pnpm](https://pnpm.io/) for package management.

### Tech Stack
- **Framework:** Astro (v6.x)
- **Styling:** Tailwind CSS (v4.x) with `@tailwindcss/vite` and `@tailwindcss/typography`
- **Package Manager:** pnpm
- **Smooth Scrolling:** Lenis
- **Fonts:** Italiana (Headings), Oswald (Subheadings), Fraunces (Body)
- **Runtime:** Node.js (>=22.12.0)

---

## Project Structure
The project follows a standard Astro directory layout with organized component subdirectories:

- `src/`: Core source code.
    - `assets/`: Static assets like images (`bg-image.png`, `logo-light.png`, `chiliche.webp`, `img-historia.png`).
    - `components/`: Reusable Astro components.
        - `buttons/`: Interactive button components (`ButtonBg.astro`, `ButtonTransparent.astro`).
        - `cards/`: UI cards for news, works, and presentations (`CardNoticia.astro`, `CardObra.astro`, `CardPresentacion.astro`, `CardPresentacionCol.astro`, `Cardrep.astro`).
        - `historia/`: Components specifically for the "Historia" page.
        - `index/`: Components specifically for the "Home" page (`HeroIndex.astro`, `Historia.astro`, `Presentaciones.astro`, `Repertorio.astro`).
        - `repertorio/`: Components for the "Obras" page (`RepObras.astro`).
        - `presentaciones/`: Components for the "Presentaciones" page (`GridPrestaciones.astro`).
        - `single-obra/`: Components for individual work pages (`descripcion.astro`).
        - `layout/`: Layout-specific components like `ColFooter.astro` and `Noticias.astro`.
        - `Header.astro`, `Navbar.astro`, `Footer.astro`, `Hero.astro`: Main navigation and layout elements.
    - `layouts/`: Page layouts (e.g., `Layout.astro`).
    - `lib/`: Utility functions and API clients.
        - `utils.ts`: General helper functions.
        - `wp.ts`: WordPress API client using `fetch` to interact with the CMS.
    - `pages/`: Site pages and routing:
        - `index.astro`: Homepage.
        - `historia.astro`: History page.
        - `noticias.astro`: News listing page.
        - `obras.astro`: Repertoire/Works page.
        - `presentaciones.astro`: Presentations listing page.
        - `noticias/[slug].astro`: Dynamic route for individual news articles.
        - `obras/[slug].astro`: Dynamic route for individual work details.
    - `scripts/`: Client-side scripts (e.g., `smoothScroll.js`).
    - `styles/`: Global CSS files (`global.css`).
- `public/`: Static files served directly.
- `astro.config.mjs`: Astro configuration and integration settings (Tailwind v4 Vite plugin).
- `package.json`: Project metadata, dependencies, and scripts.
- `tsconfig.json`: TypeScript configuration.

---

## Building and Running

### Development
Start the local development server with hot-reloading:
```bash
pnpm dev
```
The site will be available at `localhost:4321`.

### Production
Build the project for production:
```bash
pnpm build
```
The output will be generated in the `dist/` directory.

### Preview
Preview the production build locally:
```bash
pnpm preview
```

### Astro CLI
Run Astro CLI commands directly:
```bash
pnpm astro [command]
```

---

## Development Conventions

### Component Organization
- Place reusable components in `src/components/`.
- Use specific subdirectories for better organization (e.g., `src/components/cards/`, `src/components/index/`).
- Follow the naming convention `ComponentName.astro`.

### Styling
- **Tailwind CSS v4:** Use utility classes directly in Astro components.
- **Global Styles:** Located in `src/styles/global.css`. It includes theme variables for colors (navy, gold, sand), typography, and custom utilities.
- **Theme Variables:** Custom colors and fonts are defined in the `@theme` block of `global.css`.
    - Colors: `navy` (various shades), `gold` (500, 700), `sand-100`, `white-soft`.
    - Fonts: `Italiana` (Heading 1), `Oswald` (Heading 2), `Fraunces` (Body).
- **Smooth Scrolling:** Lenis is integrated for smooth scrolling behavior.

### Layouts
- Use the `Layout.astro` component in `src/layouts/` to wrap page content and ensure consistent structure (head tags, fonts, Lenis initialization, etc.).

### Data Fetching
- **WordPress Integration:** The project uses a WordPress backend for content management.
- **API Client:** `src/lib/wp.ts` contains the `wpApi` object, which provides methods for fetching pages, works (obras), presentations, and news using the WordPress REST API.
- **Environment Variables:** Ensure `WP_DOMAIN` is correctly configured in the `.env` file (locally) or deployment settings.

---

## Key Files
- `src/layouts/Layout.astro`: The main layout wrapper for all pages.
- `src/pages/index.astro`: The homepage.
- `src/pages/historia.astro`: The history page.
- `src/pages/noticias.astro`: The news page.
- `src/pages/obras.astro`: The works (repertoire) page.
- `src/pages/presentaciones.astro`: The presentations page.
- `src/lib/wp.ts`: WordPress API client.
- `src/styles/global.css`: Entry point for global CSS, Tailwind directives, and theme configuration.
- `astro.config.mjs`: Configuration for Astro and its plugins.
