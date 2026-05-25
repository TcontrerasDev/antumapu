const WP_DOMAIN = import.meta.env.WP_DOMAIN;

async function wpFetch(endpoint: string): Promise<any> {
  if (!WP_DOMAIN) {
    throw new Error("WP_DOMAIN is not defined in environment variables. Check your .env file.");
  }
  const baseUrl = WP_DOMAIN.endsWith('/') ? WP_DOMAIN : `${WP_DOMAIN}/`;
  const response = await fetch(`${baseUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }
  const data = await response.json();

  // Extract the root domain of the WordPress installation
  const wpRootUrl = WP_DOMAIN.replace(/\/wp-json\/wp\/v2\/?$/, "").replace(/\/$/, "");

  // If we are running in production (where WP_DOMAIN is not localhost),
  // dynamically replace any localhost references inside the returned data
  if (wpRootUrl && !wpRootUrl.includes("localhost")) {
    const jsonStr = JSON.stringify(data);
    // Replace http://localhost/cms-antumapu references with the actual production domain root
    const fixedJsonStr = jsonStr.replace(/http:\/\/localhost\/cms-antumapu/g, wpRootUrl);
    return JSON.parse(fixedJsonStr);
  }

  return data;
}

export const wpApi = {
  getNav: async (nav: string): Promise<any> => {
    const data = await wpFetch(`menu/${nav}`);
    return data
  },

  getWidget: async (widget: string): Promise<any> => {
    const data = await wpFetch(`widget-area/${widget}`);
    return data
  },

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
