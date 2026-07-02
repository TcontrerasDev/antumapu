# Antumapu

**Antumapu** es una moderna y elegante aplicación web construida sobre el framework **Astro v6**, diseñada para alojar el sitio oficial del **Ballet Folklórico Antumapu** de la Universidad de Chile. 

El sitio web sirve como plataforma de difusión cultural, presentando la rica historia de la agrupación, su destacado repertorio folklórico de obras, noticias de actualidad y la programación de sus próximas actividades artísticas.

---

## Características Principales

*   **Arquitectura Ultra-Rápida:** Desarrollada con **Astro v6** aprovechando la generación de sitios estáticos (SSG) e hidratación selectiva.
*   **Estética Refinada:** 
    *   Diseño personalizado utilizando **Tailwind CSS v4** con integración nativa en Vite.
    *   Paleta de colores elegante inspirada en la identidad de la agrupación: azul marino (`navy`), dorado (`gold`) y arena (`sand`).
    *   Tipografía premium cuidadosamente seleccionada: **Italiana** para encabezados principales, **Oswald** para subtítulos y **Fraunces** para el cuerpo de texto.
*   **Integración Headless CMS (WordPress):** Consumo dinámico de contenidos (obras, noticias y actividades) a través de la API REST de WordPress.
*   **Navegación Fluida:** Experiencia de usuario inmersiva con desplazamiento suave implementado mediante **Lenis** y animaciones potentes con **GSAP**.
*   **Diseño Responsivo:** Completamente adaptado a dispositivos móviles con menús interactivos modernos y layouts fluidos.

---

## Stack Tecnológico

*   **Framework:** Astro (v6.x)
*   **Estilado:** Tailwind CSS (v4.x) y `@tailwindcss/vite`
*   **Tipografía & Estilos:** `@tailwindcss/typography`
*   **Animación & Scroll:** GSAP (v3.x) & Lenis (v1.x)
*   **Gestor de Paquetes:** pnpm
*   **Runtime:** Node.js (>=22.12.0)
*   **Despliegue:** Preparado para Vercel (`@astrojs/vercel`)

---

## Estructura del Proyecto

El código fuente principal reside dentro del directorio `src/`, organizado bajo las siguientes convenciones:

```text
src/
├── assets/          # Recursos estáticos como imágenes y logotipos
├── components/      # Componentes reutilizables de Astro organizados por secciones:
│   ├── buttons/     # Botones interactivos y decorativos
│   ├── cards/       # Tarjetas de presentación para noticias, obras y eventos
│   ├── historia/    # Componentes específicos de la página de historia
│   ├── index/       # Componentes clave de la página de inicio (Hero, Repertorio, etc.)
│   ├── actividades/ # Componentes para la grilla de actividades
│   ├── single-obra/ # Detalle de obras individuales
│   ├── layout/      # Componentes estructurales de diseño (Footer, Noticias)
│   ├── Header.astro # Cabecera del sitio
│   └── Navbar.astro # Menú de navegación interactivo responsivo
├── layouts/         # Layout base global (Layout.astro)
├── lib/             # Funciones de utilidad y cliente API de WordPress (wp.ts, utils.ts)
├── pages/           # Enrutamiento dinámico y páginas estáticas de la aplicación
│   ├── index.astro  # Página de inicio
│   ├── historia.astro # Sección de historia de la agrupación
│   ├── noticias.astro # Listado de noticias
│   ├── obras.astro    # Catálogo de obras y repertorio
│   ├── actividades.astro # Agenda de eventos y actividades
│   ├── noticias/[slug].astro # Detalle dinámico de noticias
│   └── obras/[slug].astro    # Detalle dinámico de cada obra
├── scripts/         # Scripts en el lado del cliente (como smoothScroll.js)
└── styles/          # Hojas de estilo globales (global.css) con configuración Tailwind v4
```

---

## Instalación y Desarrollo Local

### 1. Clonar el repositorio e instalar dependencias

Asegúrate de contar con [Node.js](https://nodejs.org/) (>=22.12.0) y [pnpm](https://pnpm.io/) instalado en tu sistema.

```bash
pnpm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto (o edita el existente) especificando la ruta base de la API de WordPress REST:

```env
WP_DOMAIN="http://localhost/cms-antumapu/wp-json/wp/v2/"
```

### 3. Levantar el Servidor de Desarrollo

Inicia el entorno local con recarga rápida (HMR):

```bash
pnpm dev
```

El sitio estará disponible por defecto en [http://localhost:4321](http://localhost:4321).

### 4. Construcción y Producción

Para generar el sitio optimizado para producción en el directorio `dist/`:

```bash
pnpm build
```

Puedes previsualizar localmente el build de producción antes de desplegar usando:

```bash
pnpm preview
```

---

## Sobre el Ballet Folklórico Antumapu

Fundado en 1971 en la Universidad de Chile, el **Ballet Folklórico Antumapu** es una de las instituciones artísticas más representativas del folklore chileno. A través de la danza y la música, rescata, difunde y mantiene vivas las tradiciones de los diversos pueblos y regiones de Chile, logrando un reconocimiento tanto a nivel nacional como internacional. Este sitio web busca plasmar su trayectoria histórica y su vasto legado cultural de una manera interactiva y adaptada a los estándares de la web moderna.
