# Plan de Implementación: Filtro de Actividades (Calendario + Tipo)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implementar un sistema de filtrado client-side interactivo en la página de actividades, combinando un minicalendario mensual y un dropdown de tipo.

**Architecture:** Modificar la definición de tipos de WordPress para exponer `class_list`. Pasar propiedades de fecha, mes y tipo a las tarjetas como atributos `data-*`. Insertar el HTML de filtros y la lógica de control en Vanilla JS dentro de la página de actividades.

**Tech Stack:** Astro, Tailwind CSS v4, TypeScript.

## Global Constraints
- Naming rules: Element IDs and classes must be clear and semantic (e.g. `#month-filter`, `#type-filter`, `.actividad-card`).
- Types: Maintain strict TypeScript typings.
- Astro Check: Verify compilation using `pnpm exec astro check` and `pnpm build`.

---

### Task 1: Actualizar Tipo WPActividad en wp.ts

**Files:**
- Modify: `src/types/wp.ts:130-135`

**Interfaces:**
- Produces: `WPActividad` interface updated to include `class_list?: string[];`

- [ ] **Step 1: Modificar `src/types/wp.ts`**
  Add the `class_list` property to `WPActividad`:
  ```typescript
  export interface WPActividad {
    id: number;
    slug: string;
    title: RenderedText;
    acf: ActividadAcf;
    class_list?: string[];
  }
  ```

- [ ] **Step 2: Verificar la sintaxis de TypeScript**
  Run: `pnpm exec astro check`
  Expected: No errors related to `src/types/wp.ts`.

- [ ] **Step 3: Realizar el commit**
  ```bash
  git add src/types/wp.ts
  git commit -m "feat: add class_list to WPActividad type definition"
  ```

---

### Task 2: Modificar CardActividadCol para Soportar Atributos de Datos

**Files:**
- Modify: `src/components/ui/CardActividadCol.astro:1-20`

**Interfaces:**
- Consumes: `WPActividad` attributes.
- Produces: Updated `<CardActividadCol>` which forwards custom attributes `data-mes`, `data-fecha` and `data-tipo` to its root `<article>`.

- [ ] **Step 1: Modificar las Props y la Raíz del Componente en `src/components/ui/CardActividadCol.astro`**
  Modify interface and root tag to accept and render data attributes:
  ```astro
  ---
  interface Props {
    url: string;
    fecha: string;
    titulo: string;
    obra: string;
    lugar: string;
    direccion: string;
    hora: string;
    mes?: string;
    fechaFull?: string;
    tipo?: string;
  }

  const { url, fecha, titulo, obra, lugar, direccion, hora, mes, fechaFull, tipo } = Astro.props;

  // Separar fecha
  const dateParts = fecha.split(" ");
  const dia = dateParts.find((p) => /\d/.test(p)) || "";
  const mesLabel = dateParts.find((p) => !/\d/.test(p)) || "";
  ---

  <article 
    class="col-span-full md:col-span-6 lg:col-span-4 actividad-card"
    data-mes={mes}
    data-fecha={fechaFull}
    data-tipo={tipo}
  >
  ```

- [ ] **Step 2: Verificar que el componente compila correctamente**
  Run: `pnpm exec astro check`
  Expected: Astro check succeeds without errors in `CardActividadCol.astro`.

- [ ] **Step 3: Realizar el commit**
  ```bash
  git add src/components/ui/CardActividadCol.astro
  git commit -m "feat: update CardActividadCol to support filter data attributes"
  ```

---

### Task 3: Implementar la Interfaz de Filtros y la Lógica del Cliente en la Página de Actividades

**Files:**
- Modify: `src/pages/[...lang]/actividades.astro`

**Interfaces:**
- Consumes: Updated `WPActividad` object, `CardActividadCol` with new data properties.
- Produces: The final page with a dynamic interactive minicalendario and type dropdown, functioning in both languages (`es` and `en`).

- [ ] **Step 1: Modificar `src/pages/[...lang]/actividades.astro`**
  We will update the template script block to map `mes`, `fechaFull` and `tipo` for each activity:
  - If `acf.fecha` is `"20260905"`, `mes` is `"09"` and `fechaFull` is `"2026-09-05"`.
  - Extract the `class_list` element starting with `"tipo-"`.
  Then insert the HTML filter bar and the dynamic client-side script.

  Update lines in the page layout from:
  ```astro
  <GridActividades>
    {
      dataActividades.map((actividad) => (
        <CardActividadCol
          url={actividad.acf.url}
          fecha={actividad.acf.fecha_source.formatted_value}
          titulo={actividad.title.rendered}
          obra={actividad.acf.obra}
          lugar={actividad.acf.lugar}
          direccion={actividad.acf.direccion}
          hora={actividad.acf.hora_source.formatted_value}
        />
      ))
    }
  </GridActividades>
  ```

  To:
  ```astro
  <!-- FILTROS -->
  <div class="wrapper py-8 bg-sand-100 border-t border-navy-950 flex flex-col md:flex-row gap-8 items-start justify-between">
    <!-- Minicalendario -->
    <div class="w-full md:max-w-sm">
      <div class="flex justify-between items-center mb-4">
        <h3 class="font-heading-2 text-[20px] text-navy-950 uppercase tracking-wider">
          {lang === "en" ? "Activities Calendar" : "Calendario de Actividades"}
        </h3>
        <div class="flex gap-2 items-center">
          <button id="btn-prev-month" class="px-2 py-1 border border-navy-950 text-navy-950 font-heading-2 font-bold cursor-pointer hover:bg-navy-950 hover:text-white transition-colors" aria-label="Mes anterior">&lt;</button>
          <span id="label-month-year" class="font-heading-2 text-[16px] text-navy-950 uppercase min-w-[120px] text-center font-bold"></span>
          <button id="btn-next-month" class="px-2 py-1 border border-navy-950 text-navy-950 font-heading-2 font-bold cursor-pointer hover:bg-navy-950 hover:text-white transition-colors" aria-label="Siguiente mes">&gt;</button>
        </div>
      </div>

      <!-- Cuadrícula del Calendario -->
      <div class="grid grid-cols-7 gap-1 text-center bg-white border border-navy-950 p-3 rounded-sm shadow-sm select-none">
        <div class="font-heading-2 text-xs font-bold text-gold-700 py-1">{lang === "en" ? "MO" : "LU"}</div>
        <div class="font-heading-2 text-xs font-bold text-gold-700 py-1">{lang === "en" ? "TU" : "MA"}</div>
        <div class="font-heading-2 text-xs font-bold text-gold-700 py-1">{lang === "en" ? "WE" : "MI"}</div>
        <div class="font-heading-2 text-xs font-bold text-gold-700 py-1">{lang === "en" ? "TH" : "JU"}</div>
        <div class="font-heading-2 text-xs font-bold text-gold-700 py-1">{lang === "en" ? "FR" : "VI"}</div>
        <div class="font-heading-2 text-xs font-bold text-gold-700 py-1">{lang === "en" ? "SA" : "SÁ"}</div>
        <div class="font-heading-2 text-xs font-bold text-gold-700 py-1">{lang === "en" ? "SU" : "DO"}</div>
        <div id="container-calendar-days" class="contents"></div>
      </div>
      
      <div class="mt-2 flex justify-between items-center text-[12px] text-navy-800 font-sans italic">
        <span>* {lang === "en" ? "Gold-bordered days have events." : "Días con borde dorado tienen actividades."}</span>
        <button id="btn-clear-date" class="hidden text-gold-700 underline font-heading-2 text-[12px] uppercase cursor-pointer hover:text-gold-500">{lang === "en" ? "View all days" : "Ver todos los días"}</button>
      </div>
    </div>

    <!-- Dropdown de Tipo -->
    <div class="w-full md:w-auto">
      <label for="select-type-filter" class="font-heading-2 text-[14px] text-navy-950 uppercase tracking-wider block mb-2 font-bold">
        {lang === "en" ? "Filter by Type" : "Filtrar por Tipo"}
      </label>
      <select id="select-type-filter" class="w-full md:min-w-[240px] bg-transparent border-0 border-b-2 border-navy-950 text-navy-950 font-heading-2 text-[16px] uppercase py-2 pr-8 focus:outline-none cursor-pointer">
        <option class="bg-sand-100 text-navy-950" value="all">{lang === "en" ? "ALL TYPES" : "TODOS LOS TIPOS"}</option>
        <option class="bg-sand-100 text-navy-950" value="tipo-presentaciones">{lang === "en" ? "PRESENTATIONS" : "PRESENTACIONES"}</option>
        <option class="bg-sand-100 text-navy-950" value="tipo-eventos">{lang === "en" ? "EVENTS" : "EVENTOS"}</option>
        <option class="bg-sand-100 text-navy-950" value="tipo-tertulias">{lang === "en" ? "TERTULIAS" : "TERTULIAS"}</option>
      </select>
    </div>
  </div>

  <!-- Mensaje Sin Actividades -->
  <div id="msg-no-activities" class="hidden wrapper py-16 bg-sand-100 border-b border-navy-950 text-center">
    <p class="font-body italic text-[20px] text-navy-800">
      {lang === "en" ? "There are no activities matching your selection." : "No hay actividades para el día o tipo seleccionado."}
    </p>
  </div>

  <GridActividades>
    {
      dataActividades.map((actividad) => {
        const fechaRaw = actividad.acf.fecha || "";
        const mesVal = fechaRaw.length >= 6 ? fechaRaw.substring(4, 6) : "";
        const fechaFullVal = fechaRaw.length === 8 ? `${fechaRaw.substring(0, 4)}-${fechaRaw.substring(4, 6)}-${fechaRaw.substring(6, 8)}` : "";
        const tipoClass = actividad.class_list?.find((cls) => cls.startsWith("tipo-")) || "";
        
        return (
          <CardActividadCol
            url={actividad.acf.url}
            fecha={actividad.acf.fecha_source.formatted_value}
            titulo={actividad.title.rendered}
            obra={actividad.acf.obra}
            lugar={actividad.acf.lugar}
            direccion={actividad.acf.direccion}
            hora={actividad.acf.hora_source.formatted_value}
            mes={mesVal}
            fechaFull={fechaFullVal}
            tipo={tipoClass}
          />
        );
      })
    }
  </GridActividades>

  <script is:inline define:vars={{ lang }}>
    // --- LÓGICA DE FILTRADO CLIENTE ---
    
    // Obtener los datos de las actividades desde el DOM
    const cards = Array.from(document.querySelectorAll(".actividad-card"));
    
    // Recopilar las fechas y tipos de las actividades presentes
    const activeEvents = cards.map(card => ({
      date: card.getAttribute("data-fecha"),
      type: card.getAttribute("data-tipo"),
    })).filter(evt => evt.date);

    // Estado del Filtro
    let selectedDate = null;
    let selectedType = "all";
    
    // Determinar la fecha inicial para enfocar el calendario
    // Usamos el mes del primer evento futuro, o la fecha actual
    let initialDate = new Date();
    if (activeEvents.length > 0) {
      // Ordenar por fecha cronológica y encontrar la primera
      const dates = activeEvents.map(e => new Date(e.date)).sort((a,b) => a.getTime() - b.getTime());
      initialDate = dates[0];
    }
    
    let currentYear = initialDate.getFullYear();
    let currentMonth = initialDate.getMonth(); // 0-11

    const monthNamesEs = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    
    const monthNamesEn = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const monthNames = lang === "en" ? monthNamesEn : monthNamesEs;

    // Elementos DOM
    const containerDays = document.getElementById("container-calendar-days");
    const labelMonthYear = document.getElementById("label-month-year");
    const btnPrevMonth = document.getElementById("btn-prev-month");
    const btnNextMonth = document.getElementById("btn-next-month");
    const btnClearDate = document.getElementById("btn-clear-date");
    const selectType = document.getElementById("select-type-filter");
    const msgNoActivities = document.getElementById("msg-no-activities");

    function renderCalendar() {
      if (!containerDays || !labelMonthYear) return;
      
      labelMonthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
      containerDays.innerHTML = "";
      
      // Primer día de la semana (1 de este mes)
      const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay(); // Dom = 0, Lun = 1...
      // Ajustar Dom = 0 a la última columna (index 6), y Lun = 1 a la primera (index 0)
      const adjustedOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
      
      // Cantidad de días del mes
      const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
      
      // Celdas vacías previas
      for (let i = 0; i < adjustedOffset; i++) {
        const empty = document.createElement("div");
        empty.className = "p-2";
        containerDays.appendChild(empty);
      }
      
      // Días del mes
      for (let day = 1; day <= totalDays; day++) {
        const dayStr = day < 10 ? `0${day}` : `${day}`;
        const monthStr = (currentMonth + 1) < 10 ? `0${currentMonth + 1}` : `${currentMonth + 1}`;
        const dateStr = `${currentYear}-${monthStr}-${dayStr}`;
        
        // Revisar si hay un evento este día que coincida con el tipo
        const hasActivity = activeEvents.some(evt => {
          return evt.date === dateStr && (selectedType === "all" || evt.type === selectedType);
        });
        
        const isSelected = selectedDate === dateStr;
        
        const dayCell = document.createElement("div");
        dayCell.className = "p-1 flex items-center justify-center font-heading-2 text-[14px]";
        
        if (hasActivity) {
          const btn = document.createElement("button");
          btn.textContent = day.toString();
          btn.type = "button";
          btn.className = `w-7 h-7 rounded-full border-2 border-gold-700 font-bold transition-all cursor-pointer hover:bg-gold-500 hover:text-navy-950 ${
            isSelected ? "bg-gold-500 text-navy-950" : "bg-transparent text-gold-700"
          }`;
          
          btn.addEventListener("click", () => {
            if (selectedDate === dateStr) {
              selectedDate = null;
            } else {
              selectedDate = dateStr;
            }
            renderCalendar();
            filterCards();
          });
          
          dayCell.appendChild(btn);
        } else {
          dayCell.textContent = day.toString();
          dayCell.className += " text-navy-950/20";
        }
        
        containerDays.appendChild(dayCell);
      }
      
      // Mostrar/ocultar botón de limpiar fecha
      if (selectedDate) {
        btnClearDate?.classList.remove("hidden");
      } else {
        btnClearDate?.classList.add("hidden");
      }
    }

    function filterCards() {
      let visibleCount = 0;
      
      cards.forEach(card => {
        const cardDate = card.getAttribute("data-fecha");
        const cardType = card.getAttribute("data-tipo");
        
        const matchesDate = !selectedDate || cardDate === selectedDate;
        const matchesType = selectedType === "all" || cardType === selectedType;
        
        if (matchesDate && matchesType) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      // Si hay un día seleccionado pero ya no tiene eventos con el nuevo filtro de tipo, limpiar la selección
      if (selectedDate) {
        const activeDateHasActivity = activeEvents.some(evt => {
          return evt.date === selectedDate && (selectedType === "all" || evt.type === selectedType);
        });
        if (!activeDateHasActivity) {
          selectedDate = null;
          renderCalendar();
          return filterCards(); // re-filtrar sin fecha seleccionada
        }
      }

      // Mostrar/ocultar mensaje sin actividades
      if (visibleCount === 0) {
        msgNoActivities?.classList.remove("hidden");
      } else {
        msgNoActivities?.classList.add("hidden");
      }
    }

    // Navegación del calendario
    btnPrevMonth?.addEventListener("click", () => {
      currentMonth--;
      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      }
      renderCalendar();
    });

    btnNextMonth?.addEventListener("click", () => {
      currentMonth++;
      if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }
      renderCalendar();
    });

    btnClearDate?.addEventListener("click", () => {
      selectedDate = null;
      renderCalendar();
      filterCards();
    });

    selectType?.addEventListener("change", (e) => {
      selectedType = e.target.value;
      renderCalendar();
      filterCards();
    });

    // Carga inicial
    renderCalendar();
  </script>
  ```

- [ ] **Step 2: Verificar el código con Astro Check y Astro Build**
  Run: `pnpm exec astro check`
  Expected: No TypeScript or syntax errors.
  Run: `pnpm build`
  Expected: Production build succeeds without errors.

- [ ] **Step 3: Realizar el commit**
  ```bash
  git add src/pages/[...lang]/actividades.astro
  git commit -m "feat: implement interactive calendar and type filters in activities page"
  ```
