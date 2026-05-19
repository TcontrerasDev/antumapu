const WP_DOMAIN = import.meta.env.WP_DOMAIN;

async function wpFetch(endpoint: string): Promise<any> {
  const url = `${WP_DOMAIN}${endpoint}`;
  console.log(`Fetching: ${url}`); // Esto aparecerá en los logs de Vercel
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Error en respuesta (${response.status}): ${response.statusText}`);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`Error crítico haciendo fetch a ${url}:`, error);
    return null;
  }
}

export const wpApi = {
  getPageBySlug: async (slug: string): Promise<any> => {
    const data = await wpFetch(`pages?slug=${slug}&_embed`);
    return data?.[0] || null;
  },

  getObras: async (): Promise<any[]> => {
    return wpFetch("obras?_embed&per_page=100&orderby=date&order=asc");
  },

  getObraBySlug: async (slug: string): Promise<any> => {
    const data = await wpFetch(`obras?slug=${slug}&_embed`);
    return data?.[0] || null;
  },

  getSlugObras: async (): Promise<string[]> => {
    const data = await wpFetch("obras?_fields=slug&per_page=100");
    return data.map((obra: any) => obra.slug);
  },

  getPresentaciones: async (): Promise<any[]> => {
    const data = await wpFetch("presentaciones");
    return data.sort((a: any, b: any) => {
      const fechaA = a.acf?.fecha || "";
      const fechaB = b.acf?.fecha || "";
      return fechaA.localeCompare(fechaB);
    });
  },

  getNoticias: async (): Promise<any[]> => {
    return wpFetch("noticias?_embed");
  },

  getNoticiaBySlug: async (slug: string): Promise<any> => {
    const data = await wpFetch(`noticias?slug=${slug}&_embed`);
    return data?.[0] || null;
  },
};
