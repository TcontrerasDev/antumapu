import type { WPPage, WPObra, WPPresentacion, WPNoticia } from "../types/wp";

const WP_DOMAIN = import.meta.env.WP_DOMAIN;

async function wpFetch(endpoint: string, lang?: string): Promise<any> {
  if (!WP_DOMAIN) {
    throw new Error("WP_DOMAIN is not defined in environment variables. Check your .env file.");
  }
  const baseUrl = WP_DOMAIN.endsWith('/') ? WP_DOMAIN : `${WP_DOMAIN}/`;
  
  // Append language query parameter if provided
  let url = `${baseUrl}${endpoint}`;
  if (lang) {
    const separator = endpoint.includes('?') ? '&' : '?';
    url = `${url}${separator}lang=${lang}`;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }
  const data = await response.json();

  // Extract the root domain of the WordPress installation
  const wpRootUrl = WP_DOMAIN.replace(/\/wp-json\/wp\/v2\/?$/, "").replace(/\/$/, "");

  // If we are running in production (where WP_DOMAIN is not localhost),
  // dynamically replace any localhost references inside the returned data
  if (wpRootUrl && !wpRootUrl.includes("localhost")) {
    let jsonStr = JSON.stringify(data);
    
    // 1. Replace http://localhost/cms-antumapu references with the actual production domain root
    jsonStr = jsonStr.split("http://localhost/cms-antumapu").join(wpRootUrl);
    
    // 2. Force HTTPS for the production WordPress domain to avoid "Mixed Content" blocks
    const secureWpRoot = wpRootUrl.replace(/^http:\/\//, "https://");
    const insecureWpRoot = wpRootUrl.replace(/^https:\/\//, "http://");
    
    // Replace any http://your-domain with https://your-domain
    jsonStr = jsonStr.split(insecureWpRoot).join(secureWpRoot);
    
    return JSON.parse(jsonStr);
  }

  return data;
}

async function wpFetchAll(endpoint: string, lang?: string): Promise<any[]> {
  let allData: any[] = [];
  let page = 1;
  const perPage = 100;
  let hasMore = true;

  while (hasMore) {
    const separator = endpoint.includes('?') ? '&' : '?';
    const paginatedEndpoint = `${endpoint}${separator}per_page=${perPage}&page=${page}`;
    
    try {
      const data = await wpFetch(paginatedEndpoint, lang);
      if (Array.isArray(data) && data.length > 0) {
        allData = [...allData, ...data];
        if (data.length < perPage) {
          hasMore = false;
        } else {
          page++;
        }
      } else {
        hasMore = false;
      }
    } catch (error) {
      // If a page returns an error (e.g. page number out of bounds), stop fetching
      hasMore = false;
    }
  }

  return allData;
}

export const wpApi = {
  getNav: async (nav: string, lang?: string): Promise<any> => {
    const data = await wpFetch(`menu/${nav}`, lang);
    return data;
  },

  getWidget: async (widget: string, lang?: string): Promise<any> => {
    const data = await wpFetch(`widget-area/${widget}`, lang);
    return data;
  },

  getPageBySlug: async (slug: string, lang?: string): Promise<WPPage | null> => {
    const data = await wpFetch(`pages?slug=${slug}&_embed`, lang);
    return data?.[0] || null;
  },

  getObras: async (lang?: string, page?: number, perPage?: number): Promise<WPObra[]> => {
    if (page !== undefined) {
      const limit = perPage ?? 10;
      return wpFetch(`obras?_embed&orderby=date&order=asc&per_page=${limit}&page=${page}`, lang);
    }
    return wpFetchAll("obras?_embed&orderby=date&order=asc", lang);
  },

  getObraBySlug: async (slug: string, lang?: string): Promise<WPObra | null> => {
    const data = await wpFetch(`obras?slug=${slug}&_embed`, lang);
    return data?.[0] || null;
  },

  getSlugObras: async (lang?: string): Promise<string[]> => {
    const data = await wpFetchAll("obras?_fields=slug", lang);
    return data.map((obra: { slug: string }) => obra.slug);
  },

  getPresentaciones: async (lang?: string, page?: number, perPage?: number): Promise<WPPresentacion[]> => {
    const data = page !== undefined
      ? await wpFetch(`presentaciones?per_page=${perPage ?? 10}&page=${page}`, lang)
      : await wpFetchAll("presentaciones", lang);

    return data.sort((a: WPPresentacion, b: WPPresentacion) => {
      const fechaA = a.acf?.fecha_source?.formatted_value || "";
      const fechaB = b.acf?.fecha_source?.formatted_value || "";
      return fechaA.localeCompare(fechaB);
    });
  },

  getNoticias: async (lang?: string, page?: number, perPage?: number): Promise<WPNoticia[]> => {
    if (page !== undefined) {
      const limit = perPage ?? 10;
      return wpFetch(`noticias?_embed&per_page=${limit}&page=${page}`, lang);
    }
    return wpFetchAll("noticias?_embed", lang);
  },

  getNoticiaBySlug: async (slug: string, lang?: string): Promise<WPNoticia | null> => {
    const data = await wpFetch(`noticias?slug=${slug}&_embed`, lang);
    return data?.[0] || null;
  },
};
