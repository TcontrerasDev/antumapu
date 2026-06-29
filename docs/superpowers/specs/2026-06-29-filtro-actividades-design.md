# Especificación de Diseño: Filtro de Actividades (Calendario + Tipo)

Este documento detalla el diseño técnico para implementar un sistema de filtrado en la página de Actividades del proyecto Antumapu. El filtro permitirá seleccionar un día interactivo usando un minicalendario mensual (obtenido del campo `acf.fecha`) y un tipo de actividad (obtenido del campo `class_list` con prefijo `tipo-`).

---

## 1. Contexto y Objetivos

- **Página de destino:** [actividades.astro](file:///home/tom/Proyectos/antumapu/src/pages/[...lang]/actividades.astro)
- **Objetivo:** Permitir a los usuarios filtrar la cuadrícula de actividades por día (usando un minicalendario del mes) y por tipo (usando un selector dropdown).
- **Enfoque técnico:** Filtrado del lado del cliente (client-side) en JavaScript Vanilla para mantener el rendimiento y compatibilidad con la arquitectura SSG (Astro pre-generado).

---

## 2. Cambios en Estructuras de Datos

### 2.1 Ampliación de Tipos en [wp.ts](file:///home/tom/Proyectos/antumapu/src/types/wp.ts)
El tipo `WPActividad` debe incorporar el campo `class_list` para que podamos acceder a los nombres de clases dinámicos asignados por WordPress (como `tipo-eventos`, `tipo-tertulias`, etc.).

```typescript
export interface WPActividad {
  id: number;
  slug: string;
  title: RenderedText;
  acf: ActividadAcf;
  class_list?: string[];
}
```

---

## 3. Diseño de Componentes

### 3.1 Modificación de [CardActividadCol.astro](file:///home/tom/Proyectos/antumapu/src/components/ui/CardActividadCol.astro)
Para que JavaScript pueda filtrar las tarjetas en el cliente, cada tarjeta debe portar atributos de datos:
1. `data-mes`: El mes de la actividad extraído de `acf.fecha` (formato MM, ej: `"08"` o `"09"`).
2. `data-fecha`: La fecha completa de la actividad en formato `YYYY-MM-DD` (ej: `"2026-08-19"`).
3. `data-tipo`: El tipo de actividad extraído de las clases que comienzan con `tipo-` (ej: `"tipo-tertulias"`).

Modificaremos la firma del componente para aceptar estas propiedades opcionales o usar `Astro.props` y agregarlas al elemento `<article>` raíz:
```astro
<article 
  class="col-span-full md:col-span-6 lg:col-span-4 actividad-card"
  data-mes={mesNum}
  data-fecha={fechaFull}
  data-tipo={tipoVal}
>
```

### 3.2 Implementación en [actividades.astro](file:///home/tom/Proyectos/antumapu/src/pages/[...lang]/actividades.astro)

#### A. Extracción de Datos en el Servidor (Astro/AFT)
Calcularemos las propiedades necesarias para cada actividad antes de renderizarlas:
- **Fecha completa (`fechaFull`):** Si `acf.fecha` es `"20260819"`, se convierte a `"2026-08-19"`.
- **Mes (`mesNum`):** Se obtiene como `acf.fecha.substring(4, 6)` (ej. `"08"`).
- **Tipo (`tipoVal`):** Se busca en `class_list` el string que comience con `"tipo-"` (ej: `"tipo-tertulias"`).

#### B. Componentes del Filtro en el HTML
Agregaremos la barra de filtros arriba de `<GridActividades>`. Esta barra incluirá:
- **Selector de Tipo:** Un elemento `<select>` alineado al estilo del sitio.
- **Minicalendario:** Un contenedor para el calendario con botones `<` y `>` de navegación de mes, una cabecera de días (LU, MA, MI...) y un contenedor dinámico `#calendar-days` donde se renderizarán los días del mes actual.
- **Mensaje de No Resultados:** Un div `#no-activities-msg` oculto por defecto que se muestra si no hay coincidencias de filtrado.

#### C. Lógica del Cliente (`<script>`)
Un script del lado del cliente manejará el estado interactivo:
- **Estado:**
  - `currentYear` (año mostrado en el calendario).
  - `currentMonth` (mes mostrado en el calendario, 0-11).
  - `selectedDate` (fecha `YYYY-MM-DD` seleccionada actualmente, o `null` si ninguna).
  - `selectedType` (tipo seleccionado actualmente, o `"all"`).
- **Renderizado del Calendario:**
  - Calcula el desfase del primer día del mes.
  - Itera sobre los días del mes correspondiente.
  - Verifica si cada día tiene al menos una actividad registrada en el dataset para el mes/año actual y que cumpla con el tipo de filtro seleccionado.
  - Si tiene actividades, dibuja un botón interactivo dorado (`border-gold-700`). Si no, dibuja el día como deshabilitado/gris.
- **Filtrado de Tarjetas:**
  - Al cambiar el tipo de dropdown o seleccionar/deseleccionar una fecha en el calendario, se recorren todos los elementos `.actividad-card`.
  - Se ocultan o muestran según coincidan con `selectedDate` y `selectedType`.
  - Si no queda ninguna visible, se muestra el mensaje de "sin resultados".

---

## 4. Estilos y Estética (Tailwind CSS v4)

- **Fondo de los Filtros:** `bg-sand-100` con un borde superior/inferior para separarlo limpiamente de la cabecera.
- **Dropdown:** Borde inferior en lugar de caja completa (`border-b border-navy-950 bg-transparent`), tipografía Oswald (`font-heading-2`) en mayúsculas, y cursor pointer.
- **Calendario:** 
  - Ancho máximo controlado para evitar que rompa la diagramación.
  - Días activos: Borde circular dorado y hover suave con transición.
  - Días seleccionados: Relleno dorado (`bg-gold-500`) y texto azul oscuro (`text-navy-950`).

---

## 5. Pruebas y Criterios de Aceptación

1. **Navegación mensual:** Al presionar `<` y `>` en el calendario, los días deben corresponder correctamente al mes correspondiente y mantener el comportamiento interactivo.
2. **Días activos correctos:** Solo los días que tengan actividades deben ser clickeables.
3. **Filtro combinado:** Al filtrar por Tipo (ej. "Tertulias") y Día (ej. "19"), solo debe aparecer la tarjeta de ese día y tipo. Además, el calendario debe actualizarse para mostrar activos solo los días del tipo seleccionado.
4. **Mensaje sin resultados:** Si se elige una combinación inexistente, debe mostrarse el cartel indicativo de que no hay actividades.
5. **Responsivo:** El diseño de los filtros debe verse correcto tanto en desktop como en dispositivos móviles (flex-col en móvil, flex-row en desktop).
