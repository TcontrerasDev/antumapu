// Frontend UI translations dictionary for static labels

const translations: Record<string, Record<string, string>> = {
  es: {
    "director": "Director Artístico y Coreográfico",
    "duracion": "Duración",
    "estreno": "Estreno",
    "repertorio": "Repertorio",
    "inicio": "Inicio",
    "fecha_publicacion": "Fecha de Publicación",
    "autor": "Autor",
    "desliza": "Desliza",
    "volver": "Volver",
    "leer_mas": "Leer más",
    "noticias_recientes": "Noticias Recientes",
    "ver_obras": "Ver obras",
    "ver_presentaciones": "Ver presentaciones",
    "presentaciones_proximas": "Próximas Presentaciones",
    "social_media": "Redes Sociales",
    "contacto": "Contacto",
  },
  en: {
    "director": "Artistic & Choreographic Director",
    "duracion": "Duration",
    "estreno": "Premiere",
    "repertorio": "Repertoire",
    "inicio": "Home",
    "fecha_publicacion": "Date of Publication",
    "autor": "Author",
    "desliza": "Swipe",
    "volver": "Go Back",
    "leer_mas": "Read more",
    "noticias_recientes": "Recent News",
    "ver_obras": "View Repertoire",
    "ver_presentaciones": "View Presentations",
    "presentaciones_proximas": "Upcoming Presentations",
    "social_media": "Social Media",
    "contacto": "Contact",
  }
};

/**
 * Returns a translation helper function bound to the given locale
 * @param lang Active locale ('es' | 'en')
 */
export function useTranslations(lang: string) {
  const locale = lang === "en" ? "en" : "es";
  return function t(key: string): string {
    return translations[locale][key] || key;
  };
}
