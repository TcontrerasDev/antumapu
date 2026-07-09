# Antumapu

**Antumapu** es una moderna y elegante aplicación web construida sobre el framework **Astro v7**, diseñada para alojar el sitio oficial del **Ballet Folklórico Antumapu** de la Universidad de Chile.

El sitio web sirve como plataforma de difusión cultural, presentando la rica historia de la agrupación, su destacado repertorio folklórico de obras, noticias de actualidad y la programación de sus próximas actividades artísticas.

---

## Características Principales

*   **Arquitectura Ultra-Rápida:** Desarrollada con **Astro v7** aprovechando la generación de sitios estáticos (SSG) e hidratación selectiva.
*   **Soporte Multilingüe (i18n):** Internacionalización completa con enrutamiento y contenido dinámico adaptado para español e inglés bajo `src/pages/[...lang]/`.
*   **Estética Refinada:**
    *   Diseño personalizado utilizando **Tailwind CSS v4** con integración nativa en Vite.
    *   Paleta de colores elegante inspirada en la identidad de la agrupación: azul marino (`navy`), dorado (`gold`) y arena (`sand`).
    *   Tipografía premium cuidadosamente seleccionada: **Italiana** para encabezados principales, **Oswald** para subtítulos y **Fraunces** para el cuerpo de texto.
*   **Integración Headless CMS (WordPress):** Consumo dinámico de contenidos (obras, noticias y actividades) a través de la API REST de WordPress.
*   **Navegación Fluida:** Experiencia de usuario inmersiva con desplazamiento suave implementado mediante **Lenis** y animaciones potentes con **GSAP**.
*   **Diseño Responsivo:** Completamente adaptado a dispositivos móviles con menús interactivos modernos y layouts fluidos.

---

## Stack Tecnológico

*   **Framework:** Astro (v7.x)
*   **Adaptador y Alojamiento:** Vercel (`@astrojs/vercel`)
*   **Estilado:** Tailwind CSS (v4.x) y `@tailwindcss/vite`
*   **Tipografía y Estilos:** `@tailwindcss/typography`
*   **Animación y Scroll:** GSAP & Lenis
*   **Gestor de Paquetes:** pnpm
*   **Runtime:** Node.js (>=22.12.0)

---

## Estructura del Proyecto

El código fuente principal reside dentro del directorio `src/`, organizado bajo las siguientes convenciones:

```text
src/
├── assets/          # Recursos estáticos como imágenes y logotipos
├── components/      # Componentes reutilizables de Astro organizados en tres directorios principales:
│   ├── common/      # Componentes globales del sitio (Header, Navbar, Footer, etc.)
│   ├── features/    # Componentes específicos de cada página divididos por dominio lógico
│   └── ui/          # Componentes primitivos de interfaz de usuario y esqueletos de carga
├── layouts/         # Layout base global (Layout.astro)
├── lib/             # Funciones de utilidad, cliente API de WordPress e i18n
├── types/           # Tipados TypeScript estrictos para la API de WordPress y ACF
├── pages/           # Estructura de enrutamiento internacionalizado
│   └── [...lang]/   # Enrutador dinámico de idiomas (index, historia, dirección, noticias, obras, actividades)
├── scripts/         # Scripts del lado del cliente (smoothScroll.js)
└── styles/          # Hojas de estilo globales (global.css) con configuración Tailwind v4
```

## Sobre el Ballet Folklórico Antumapu

Fundado en 1971 en la Universidad de Chile, el **Ballet Folklórico Antumapu** es una de las instituciones artísticas más representativas del folklore chileno. A través de la danza y la música, rescata, difunde y mantiene vivas las tradiciones de los diversos pueblos y regiones de Chile, logrando un reconocimiento tanto a nivel nacional como internacional. Este sitio web busca plasmar su trayectoria histórica y su vasto legado cultural de una manera interactiva y adaptada a los estándares de la web moderna.
