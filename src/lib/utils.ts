/**
 * Generates breadcrumb data from a pathname.
 * @param pathname The current URL pathname (e.g., Astro.url.pathname)
 * @returns Array of objects containing breadcrumb name, url, and isLast status
 */
export function getBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  // Función interna para formatear nombres (guiones a espacios y capitalizar)
  const formatName = (name: string) => {
    const withSpaces = name.replace(/-/g, " ");
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
  };

  return segments.map((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join("/")}`;
    return {
      name: formatName(segment),
      url,
      isLast: index === segments.length - 1,
    };
  });
}
