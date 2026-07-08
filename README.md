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

### 5. Astro CLI

Ejecuta comandos de Astro CLI directamente:

```bash
pnpm astro [comando]
```

---

## Convenciones de Desarrollo

### Organización de Componentes

- Coloca los componentes reutilizables en `src/components/`.
- Organiza los componentes según su propósito en las siguientes subcarpetas:
    - **`src/components/ui/`** para primitivas visuales, tarjetas, botones y placeholders/esqueletos.
    - **`src/components/features/`** para partes complejas y específicas de cada sección o página.
    - **`src/components/common/`** para navegación global, cabeceras, menús móviles y pie de página.
- Sigue la convención de nombres `NombreComponente.astro`.

### Estilado

- **Tailwind CSS v4:** Usa clases utilitarias directamente en los componentes de Astro.
- **Estilos Globales:** Se ubican en `src/styles/global.css`. Incluye las variables de tema para colores (navy, gold, sand), tipografía y utilidades personalizadas.
- **Variables de Tema:** Los colores y fuentes personalizados se definen en el bloque `@theme` de `global.css`.
    - Colores: `navy` (varios tonos), `gold` (500, 700), `sand-100`, `white-soft`.
    - Fuentes: `Italiana` (Encabezados 1), `Oswald` (Encabezados 2), `Fraunces` (Cuerpo).
- **Desplazamiento Suave:** Lenis está integrado para controlar el comportamiento del scroll.

### Internacionalización (i18n)

- El sitio utiliza rutas dinámicas bajo `src/pages/[...lang]/`.
- Obtén y pasa el idioma actual `lang` (generalmente derivado de `Astro.params.lang`) para recuperar el contenido localizado desde WordPress o traducciones estáticas.
- Las traducciones de cadenas estáticas de la interfaz de usuario se gestionan mediante `useTranslations` en `src/lib/i18n.ts`:
  ```astro
  ---
  import { useTranslations } from '../../lib/i18n';
  const { lang } = Astro.params;
  const t = useTranslations(lang);
  ---
  <h1>{t('repertorio')}</h1>
  ```

### Obtención de Datos (Data Fetching)

- **Integración con WordPress:** El proyecto utiliza un backend de WordPress con Advanced Custom Fields (ACF) para la gestión de contenidos.
- **Cliente API:** `src/lib/wp.ts` contiene el objeto `wpApi`, que proporciona métodos para consultar páginas, obras, presentaciones y noticias. Pasa el locale `lang` como argumento opcional para realizar consultas a los endpoints localizados.
- **Tipos:** Importa y utiliza siempre los tipados estrictos de TypeScript definidos en `src/types/wp.ts` al manipular los datos JSON devueltos por la API de WordPress.
- **Variables de Entorno:** Asegúrate de que `WP_DOMAIN` esté configurado correctamente en el archivo `.env` (en desarrollo local) o en la configuración de despliegue.

---

## Archivos Clave

- `src/layouts/Layout.astro`: El contenedor de diseño principal para todas las páginas.
- `src/pages/[...lang]/index.astro`: La página de inicio.
- `src/pages/[...lang]/historia.astro`: La página de historia.
- `src/pages/[...lang]/direccion.astro`: La página de dirección/directorio.
- `src/pages/[...lang]/noticias.astro`: La página de listado de noticias.
- `src/pages/[...lang]/obras.astro`: La página de obras (repertorio).
- `src/pages/[...lang]/actividades.astro`: La página de listado de actividades.
- `src/lib/wp.ts`: Cliente de la API de WordPress.
- `src/lib/i18n.ts`: Diccionario de traducciones estáticas y helper de internacionalización.
- `src/types/wp.ts`: Definición de tipos para las entidades de WordPress y ACF.
- `src/styles/global.css`: Punto de entrada para el CSS global, directivas de Tailwind y configuración del tema.
- `astro.config.mjs`: Configuración de Astro y sus integraciones.

---

## Sobre el Ballet Folklórico Antumapu

Fundado en 1971 en la Universidad de Chile, el **Ballet Folklórico Antumapu** es una de las instituciones artísticas más representativas del folklore chileno. A través de la danza y la música, rescata, difunde y mantiene vivas las tradiciones de los diversos pueblos y regiones de Chile, logrando un reconocimiento tanto a nivel nacional como internacional. Este sitio web busca plasmar su trayectoria histórica y su vasto legado cultural de una manera interactiva y adaptada a los estándares de la web moderna.
