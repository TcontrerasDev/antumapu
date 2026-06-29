// WordPress and ACF Type Definitions for Antumapu Project

export interface RenderedText {
  rendered: string;
}

export interface FeaturedMedia {
  source_url: string;
}

export interface WordPressEmbedded {
  "wp:featuredmedia"?: FeaturedMedia[];
  "wp:term"?: Array<Array<{ name: string }>>;
}

// ----------------------------------------------------
// PAGE TYPE
// ----------------------------------------------------
export interface PageAcf {
  antetitulo?: string;
  titulo_historia?: string;
  resumen?: string;
  imagen_seccion?: {
    url: string;
    alt: string;
  };
  estadisticas?: {
    titulo_estadistica: string;
    titulo_estadistica_2: string;
    titulo_estadistica_3: string;
    numero_estadistica: string;
    numero_estadistica_2: string;
    numero_estadistica_3: string;
  };
  botones?: {
    text_boton: string;
    pagina: string;
    text_boton_2: string;
    pagina_2: string;
  };
  titulo_presentaciones?: string;
  bajada_presentaciones?: string;
  titulo_obras?: string;
  bajada_obras?: string;
  titulo_noticias?: string;
  bajada_noticias?: string;

  // Historia Page ACF Fields
  destacadas?: Array<{
    titulo: string;
    descripcion: string;
    img: {
      url: string;
    };
  }>;
  titulo_1?: string;
  texto_1?: string;
  imagen_1?: {
    url: string;
    alt: string;
  };
  titulo_2?: string;
  texto_2?: string;
  titulo_3?: string;
  texto_3?: string;
  imagen_3?: {
    url: string;
    alt: string;
  };
  conclusion?: string;
  imagen_conclusion?: {
    url: string;
    alt: string;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  title: RenderedText;
  content: RenderedText;
  acf: PageAcf;
  _embedded?: WordPressEmbedded;
}

// ----------------------------------------------------
// OBRA TYPE
// ----------------------------------------------------
export interface ObraAcf {
  fecha_estreno_source?: {
    formatted_value: string;
  };
  director: string;
  duracion: string;
  descripcion_obra: string;
  video_source?: {
    formatted_value: string;
  };
  repertorio?: Array<{
    nombre: string;
  }>;
}

export interface WPObra {
  id: number;
  slug: string;
  title: RenderedText;
  content: RenderedText;
  excerpt: RenderedText;
  acf: ObraAcf;
  _embedded?: WordPressEmbedded;
}

// ----------------------------------------------------
// ACTIVIDAD TYPE
// ----------------------------------------------------
export interface ActividadAcf {
  url: string;
  fecha_source: {
    formatted_value: string;
  };
  obra: string;
  lugar: string;
  direccion: string;
  hora_source: {
    formatted_value: string;
  };
}

export interface WPActividad {
  id: number;
  slug: string;
  title: RenderedText;
  acf: ActividadAcf;
}

// ----------------------------------------------------
// NOTICIA TYPE
// ----------------------------------------------------
export interface NoticiaAcf {
  autor?: string;
}

export interface WPNoticia {
  id: number;
  slug: string;
  date: string;
  title: RenderedText;
  content: RenderedText;
  excerpt: RenderedText;
  acf?: NoticiaAcf;
  _embedded?: WordPressEmbedded;
}
