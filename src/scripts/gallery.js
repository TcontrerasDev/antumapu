import lightGallery from 'lightgallery';

let lgInstance = null;

function destroyGallery() {
  if (lgInstance) {
    try {
      lgInstance.destroy(true);
    } catch (e) {}
    lgInstance = null;
  }

  const container = document.getElementById('galeria-obra');
  if (container && container._lgInstance) {
    try {
      container._lgInstance.destroy(true);
    } catch (e) {}
    container._lgInstance = null;
  }

  // Limpiar elementos de lightGallery que hayan quedado adjuntos en document.body
  document.querySelectorAll('.lg-container, .lg-backdrop').forEach((el) => el.remove());
}

function initGallery() {
  const container = document.getElementById('galeria-obra');
  if (!container) {
    destroyGallery();
    return;
  }

  destroyGallery();

  const instance = lightGallery(container, {
    selector: '.galeria-item',
    speed: 400,
    download: false,
  });

  lgInstance = instance;
  container._lgInstance = instance;
}

// Limpiar antes de la navegación del ClientRouter de Astro
document.addEventListener('astro:before-preparation', destroyGallery);
document.addEventListener('astro:before-swap', destroyGallery);

// Inicializar en astro:page-load (carga inicial y transiciones entre páginas)
document.addEventListener('astro:page-load', initGallery);

// Fallback por si la página ya se cargó antes de registrar el listener
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initGallery();
} else {
  document.addEventListener('DOMContentLoaded', initGallery);
}