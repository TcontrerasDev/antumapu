# Design Spec: GEMINI.md Documentation Update

## Objective
Update the `GEMINI.md` project documentation file to align with the current architecture, packages, files, routing patterns, and conventions of the Antumapu codebase.

## Current State vs. Desired State

### 1. Framework Version
*   **Current Doc:** Astro (v6.x)
*   **Desired Doc:** Astro (v7.x) (specifically Astro v7.0.3 per package.json)

### 2. Component Directory
*   **Current Doc:** Flat structure or legacy subdirectories (`buttons/`, `cards/`, `historia/`, `index/`, `repertorio/`, `actividades/`, `single-obra/`, `layout/`).
*   **Desired Doc:** Re-organized structure under `src/components/`:
    *   `common/`: Site-wide layout wrappers (Header, Footer, Navbar, MobileMenu, Hero, ColFooter).
    *   `features/`: Feature-specific sections divided by logical page/feature boundaries (actividades, historia, home, noticias, obras).
    *   `ui/`: Global reusable visual primitives, cards, and skeletons (buttons, cards, skeletons).

### 3. Pages & Routing
*   **Current Doc:** Flat `src/pages/` files.
*   **Desired Doc:** Multilingual dynamic routing using `src/pages/[...lang]/` to handle localization (supporting paths like `index`, `historia`, `direccion`, `noticias`, `obras`, etc.).

### 4. Code Utilities & API Client
*   **Current Doc:** Mentions `src/lib/wp.ts` and `src/lib/utils.ts`.
*   **Desired Doc:** Add `src/lib/i18n.ts` for localization dictionary/utilities and `src/types/wp.ts` for WordPress/ACF typescript definitions.

## Key Changes to GEMINI.md
We will rewrite `GEMINI.md` to:
1. Specify Astro v7.
2. Outline the updated `src/` layout.
3. Detail the dynamic language routing under `src/pages/[...lang]`.
4. Document the `src/types/wp.ts` and `src/lib/i18n.ts` files.
5. Provide code examples/conventions for components and localization usage.
