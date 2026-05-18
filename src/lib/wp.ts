const WP_DOMAIN = import.meta.env.WP_DOMAIN;

async function wpFetch(endpoint: string): Promise<any> {
  const response = await fetch(`${WP_DOMAIN}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }
  return response.json();
}

export const wpApi = {
  getPageBySlug: async (slug: string): Promise<any> => {
    const data = await wpFetch(`pages?slug=${slug}&_embed`);
    return data?.[0] || null;
  },
  getPresentaciones: async (): Promise<any[]> => {
    const data = await wpFetch("presentaciones");
    // Ordenar por el campo 'fecha' de ACF (asumiendo formato YYYYMMDD o similar)
    return data.sort((a: any, b: any) => {
      const fechaA = a.acf?.fecha || "";
      const fechaB = b.acf?.fecha || "";
      return fechaA.localeCompare(fechaB);
    });
  },
};
