# Plan de Implementación: Corregir Posicionamiento de Dropdown en Móvil

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corregir el error de posicionamiento del desplegable de tipo de actividad en la emulación de dispositivos móviles de Chrome.

**Architecture:** Envolver el `<select>` en un contenedor `relative` con ancho controlado, añadir `appearance-none` con una flecha SVG personalizada para control estricto de la UI, y definir un fondo sólido (`bg-white`) con borde completo para delimitar correctamente el cuadro del dropdown en pantallas móviles.

**Tech Stack:** Astro, Tailwind CSS v4.

## Global Constraints
- Types: Maintain strict TypeScript typings.
- Astro Check: Verify compilation using `pnpm exec astro check` and `pnpm build`.

---

### Task 1: Reestructurar y Estilizar el Dropdown en actividades.astro

**Files:**
- Modify: `src/pages/[...lang]/actividades.astro`

**Interfaces:**
- Consumes: The existing `#select-type-filter` DOM query and event listener.
- Produces: A custom-styled select dropdown layout with a relative wrapper and custom SVG arrow, resolving the Chrome mobile rendering glitch.

- [ ] **Step 1: Modificar el HTML del dropdown en `src/pages/[...lang]/actividades.astro`**
  Replace the old select HTML (around lines 69-80):
  ```astro
          <!-- Dropdown de Tipo -->
          <div class="w-full md:w-auto">
            <label for="select-type-filter" class="font-heading-2 text-[14px] text-navy-950 uppercase tracking-wider block mb-2 font-bold">
              {lang === "en" ? "Filter by Type" : "Filtrar por Tipo"}
            </label>
            <div class="relative w-full md:min-w-[240px]">
              <select id="select-type-filter" class="w-full appearance-none bg-white border border-navy-950 text-navy-950 font-heading-2 text-[16px] uppercase py-2 pl-3 pr-10 focus:outline-none cursor-pointer rounded-sm shadow-sm">
                <option value="all">{lang === "en" ? "ALL TYPES" : "TODOS LOS TIPOS"}</option>
                <option value="tipo-presentaciones">{lang === "en" ? "PRESENTATIONS" : "PRESENTACIONES"}</option>
                <option value="tipo-eventos">{lang === "en" ? "EVENTS" : "EVENTOS"}</option>
                <option value="tipo-tertulias">{lang === "en" ? "TERTULIAS" : "TERTULIAS"}</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg class="h-4 w-4 text-navy-950" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
  ```

- [ ] **Step 2: Verificar la compilación**
  Run: `pnpm exec astro check`
  Expected: No TypeScript or syntax errors.
  Run: `pnpm build`
  Expected: Build succeeds without errors.

- [ ] **Step 3: Realizar el commit**
  ```bash
  git add src/pages/[...lang]/actividades.astro
  git commit -m "fix(actividades): style dropdown with relative wrapper, solid background, and custom arrow to fix mobile alignment"
  ```
