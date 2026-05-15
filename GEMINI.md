# Antumapu - Project Documentation

## Project Overview
**Antumapu** is a web application built using the [Astro](https://astro.build/) framework. It focuses on a clean, modern aesthetic, utilizing [Tailwind CSS v4](https://tailwindcss.com/) for styling and [pnpm](https://pnpm.io/) for package management.

### Tech Stack
- **Framework:** Astro (v6.x)
- **Styling:** Tailwind CSS (v4.x) with `@tailwindcss/vite`
- **Package Manager:** pnpm
- **Fonts:** Fraunces, Italiana, Oswald (via Google Fonts)
- **Runtime:** Node.js (>=22.12.0)

---

## Project Structure
The project follows a standard Astro directory layout:

- `src/`: Core source code.
    - `assets/`: Static assets like images (`bg-image.png`, `logo-light.png`).
    - `components/`: Reusable Astro components (e.g., `Header.astro`, `Navbar.astro`).
    - `layouts/`: Page layouts (e.g., `Layout.astro`).
    - `pages/`: Site pages and routing (e.g., `index.astro`).
    - `styles/`: Global CSS files (`global.css`).
- `public/`: Static files served directly (e.g., `favicon.ico`).
- `astro.config.mjs`: Astro configuration and integration settings.
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
- For page-specific components, consider subdirectories within `src/components/` (e.g., `src/components/index/`).

### Styling
- Use Tailwind CSS utility classes directly in Astro components.
- Global styles and Tailwind imports are located in `src/styles/global.css`.

### Layouts
- Use the `Layout.astro` component in `src/layouts/` to wrap page content and ensure consistent structure (head tags, fonts, etc.).

---

## Key Files
- `src/layouts/Layout.astro`: The main layout wrapper for all pages.
- `src/pages/index.astro`: The homepage of the application.
- `astro.config.mjs`: Configuration for Astro and its plugins (like Tailwind).
- `src/styles/global.css`: Entry point for global CSS and Tailwind directives.
