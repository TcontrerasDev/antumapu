# Spec de Diseño: Actualización de README.md

## Objetivo
Actualizar el archivo `README.md` del proyecto en español para alinear la documentación con la arquitectura, dependencias, archivos, enrutamiento i18n y estructura física actual de la base de código.

## Estado de README.md

### 1. Versión del Framework
*   **Actual:** Astro v6
*   **Nuevo:** Astro v7 (específicamente Astro v7.0.3 per package.json)

### 2. Estructura de Componentes
*   **Actual:** Muestra directorios obsoletos (`buttons/`, `cards/`, etc.).
*   **Nuevo:** Mostrar la estructura real bajo `src/components/`:
    *   `common/`: Navbar, Header, Footer, MobileMenu, Hero, ColFooter.
    *   `features/`: historia, home, obras, actividades, noticias.
    *   `ui/`: Botones, tarjetas y esqueletos de carga.

### 3. Páginas y Enrutamiento i18n
*   **Actual:** Enrutamiento plano en la raíz de `pages/`.
*   **Nuevo:** Enrutamiento multilenguaje bajo `src/pages/[...lang]/` que soporta traducción a español (es) e inglés (en).
*   Documentar páginas agregadas como `direccion.astro`.

### 4. Nuevos Módulos y Tipos
*   Documentar el cliente API de WordPress (`src/lib/wp.ts`), los diccionarios de internacionalización (`src/lib/i18n.ts`) y los tipos estrictos (`src/types/wp.ts`).

## Cambios Clave
Realizaremos una reescritura de `README.md` en español alineada con la versión de `GEMINI.md` pero enfocada en la presentación pública del proyecto.
