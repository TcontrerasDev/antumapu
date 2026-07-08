# Antumapu - Project Documentation

## Project Overview
**Antumapu** is a web application built using the [Astro](https://astro.build/) framework. It focuses on a clean, modern aesthetic, utilizing [Tailwind CSS v4](https://tailwindcss.com/) for styling and [pnpm](https://pnpm.io/) for package management. The application features full internationalization (i18n) support for Spanish and English.

### Tech Stack
- **Framework:** Astro (v7.x)
- **Adapter & Hosting:** Vercel (@astrojs/vercel)
- **Styling:** Tailwind CSS (v4.x) with `@tailwindcss/vite` and `@tailwindcss/typography`
- **Package Manager:** pnpm
- **Smooth Scrolling:** Lenis
- **Animations:** GSAP
- **Fonts:** Italiana (Headings), Oswald (Subheadings), Fraunces (Body)
- **Runtime:** Node.js (>=22.12.0)

---

## Project Structure
The project follows an organized Astro directory layout split by scope:

- `src/`: Core source code.
    - `assets/`: Static assets like images (`bg-image.png`, `logo-light.png`, `chiliche.webp`, `img-historia.png`).
    - `components/`: Reusable Astro components organized into three main directories:
        - `common/`: Site-wide navigation and layout wrappers.
            - `Header.astro`: Base header wrapper.
            - `Navbar.astro`: Desktop navigation bar.
            - `MobileMenu.astro`: Comprehensive mobile navigation overlays.
            - `Hero.astro`: Reusable hero banner.
            - `Footer.astro`: Main page footer.
            - `ColFooter.astro`: Subcomponents for the footer columns.
        - `features/`: Feature-specific sections divided by logical page/context:
            - `home/`: Components for the home page (`HeroIndex.astro`, `Historia.astro`, `Actividades.astro`, `Repertorio.astro`, `ActividadesList.astro`).
            - `historia/`: Components specifically for the "Historia" page (`Section.astro`, `GridSection.astro`, `FeatureSplit.astro`, `Conclusion.astro`).
            - `obras/`: Components for the "Obras" page (`RepObras.astro`, `descripcion.astro`).
            - `actividades/`: Components for the "Actividades" page (`GridActividades.astro`).
            - `noticias/`: Components for the news pages (`Noticias.astro`, `NoticiasList.astro`, `NoticiaDetalle.astro`).
        - `ui/`: Global, reusable visual primitives, buttons, cards, and skeleton loaders.
            - `ButtonBg.astro` / `ButtonTransparent.astro`: Primary and secondary buttons.
            - `CardNoticia.astro` / `CardNoticiaDestacada.astro`: News card elements.
            - `CardObra.astro` / `Cardrep.astro`: Work/Repertoire card elements.
            - `CardActividad.astro` / `CardActividadCol.astro`: Presentation card elements.
            - `CardInfo.astro`: Simple content container cards.
            - `ActividadesSkeleton.astro` / `NoticiasSkeleton.astro`: Tailwind skeleton loading placeholders.
    - `layouts/`: Page layouts (e.g., `Layout.astro` which handles metadata, Lenis smooth scroll, page headers).
    - `lib/`: Utility functions, API clients, and translations:
        - `utils.ts`: General helper functions.
        - `wp.ts`: WordPress API client using `fetch` to interact with the CMS (`wpApi`).
        - `i18n.ts`: Translation dictionary and helper (`useTranslations`) for static UI strings.
    - `types/`: Custom TypeScript models:
        - `wp.ts`: Strict typings for WordPress Custom Post Types, ACF fields, and page payloads.
    - `pages/`: Site pages and internationalized routing structure:
        - `[...lang]/`: Dynamic locale router wrapping all routes:
            - `index.astro`: Homepage.
            - `historia.astro`: History page.
            - `direccion.astro`: Direction page.
            - `noticias.astro`: News listing page.
            - `noticias/[slug].astro`: Dynamic route for individual news articles.
            - `obras.astro`: Repertoire/Works page.
            - `obras/[slug].astro`: Dynamic route for individual work details.
            - `actividades.astro`: Activities listing page.
    - `scripts/`: Client-side scripts (e.g., `smoothScroll.js`).
    - `styles/`: Global CSS files (`global.css`).
- `public/`: Static files served directly.
- `astro.config.mjs`: Astro configuration, Vercel adapter, static output, multi-locale i18n settings, and Tailwind v4 Vite plugin setup.
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
- Organize components based on their role:
    - **`src/components/ui/`** for visual primitives, cards, buttons, and skeletons.
    - **`src/components/features/`** for complex, feature-specific parts of a page.
    - **`src/components/common/`** for global layouts, headers, and navigation menus.
- Follow the naming convention `ComponentName.astro`.

### Styling
- **Tailwind CSS v4:** Use utility classes directly in Astro components.
- **Global Styles:** Located in `src/styles/global.css`. It includes theme variables for colors (navy, gold, sand), typography, and custom utilities.
- **Theme Variables:** Custom colors and fonts are defined in the `@theme` block of `global.css`.
    - Colors: `navy` (various shades), `gold` (500, 700), `sand-100`, `white-soft`.
    - Fonts: `Italiana` (Heading 1), `Oswald` (Heading 2), `Fraunces` (Body).
- **Smooth Scrolling:** Lenis is integrated for smooth scrolling behavior.

### Internationalization (i18n)
- The site uses dynamic paths under `[...lang]/`.
- Fetch and pass the current locale `lang` (usually derived from `Astro.params.lang`) to retrieve localized content from WordPress or static translations.
- Static UI string translations are managed via `useTranslations` in `src/lib/i18n.ts`:
  ```astro
  ---
  import { useTranslations } from '../../lib/i18n';
  const { lang } = Astro.params;
  const t = useTranslations(lang);
  ---
  <h1>{t('repertorio')}</h1>
  ```

### Data Fetching
- **WordPress Integration:** The project uses a WordPress backend with Advanced Custom Fields (ACF) for content management.
- **API Client:** `src/lib/wp.ts` contains the `wpApi` object, which provides methods for fetching pages, works (obras), presentations, and news. Pass the `lang` locale as an optional argument to query localized endpoints.
- **Types:** Always import and utilize strict TypeScript typings defined in `src/types/wp.ts` when handling raw JSON data returned from the WordPress API.
- **Environment Variables:** Ensure `WP_DOMAIN` is correctly configured in the `.env` file (locally) or deployment settings.

---

## Key Files
- `src/layouts/Layout.astro`: The main layout wrapper for all pages.
- `src/pages/[...lang]/index.astro`: The homepage.
- `src/pages/[...lang]/historia.astro`: The history page.
- `src/pages/[...lang]/direccion.astro`: The direction page.
- `src/pages/[...lang]/noticias.astro`: The news page.
- `src/pages/[...lang]/obras.astro`: The works (repertoire) page.
- `src/pages/[...lang]/actividades.astro`: The activities page.
- `src/lib/wp.ts`: WordPress API client.
- `src/lib/i18n.ts`: Static translations dictionary and helper.
- `src/types/wp.ts`: Typings for WordPress and ACF entities.
- `src/styles/global.css`: Entry point for global CSS, Tailwind directives, and theme configuration.
- `astro.config.mjs`: Configuration for Astro and its integrations.
