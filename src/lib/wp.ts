const WP_DOMAIN = import.meta.env.WP_DOMAIN;

if (!WP_DOMAIN) {
  console.error("⚠️ CRÍTICO: La variable de entorno WP_DOMAIN no está definida.");
}

async function wpFetch(endpoint: string): Promise<any> {
  if (!WP_DOMAIN) return null;

  const url = `${WP_DOMAIN}${endpoint}`;
  console.log(`[WP-API] Fetching: ${url}`);
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`[WP-API] Error (${response.status}): ${response.statusText} en ${url}`);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`[WP-API] Error de conexión a ${url}:`, error);
    return null;
  }
}

export const wpApi = {
  getPageBySlug: async (slug: string): Promise<any> => {
    const data = await wpFetch(`pages?slug=${slug}&_embed`);
    return Array.isArray(data) ? data[0] : null;
  },

  getObras: async (): Promise<any[]> => {
    const data = await wpFetch("obras?_embed&per_page=100&orderby=date&order=asc");
    return Array.isArray(data) ? data : [];
  },

  getObraBySlug: async (slug: string): Promise<any> => {
    const data = await wpFetch(`obras?slug=${slug}&_embed`);
    return Array.isArray(data) ? data[0] : null;
  },

  getSlugObras: async (): Promise<string[]> => {
    const data = await wpFetch("obras?_fields=slug&per_page=100");
    return Array.isArray(data) ? data.map((obra: any) => obra.slug) : [];
  },

  getPresentaciones: async (): Promise<any[]> => {
    const data = await wpFetch("presentaciones");
    if (!Array.isArray(data)) return [];
    
    return data.sort((a: any, b: any) => {
      const fechaA = a.acf?.fecha || "";
      const fechaB = b.acf?.fecha || "";
      return fechaA.localeCompare(fechaB);
    });
  },

  getNoticias: async (): Promise<any[]> => {
    const data = await wpFetch("noticias?_embed");
    return Array.isArray(data) ? data : [];
  },

  getNoticiaBySlug: async (slug: string): Promise<any> => {
    const data = await wpFetch(`noticias?slug=${slug}&_embed`);
    return Array.isArray(data) ? data[0] : null;
  },
};
