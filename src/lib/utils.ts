import type { MenuItem } from "../types/wp";

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

/**
 * Normalizes a menu item URL. Handles full WP domain URLs, trailing slashes, and English i18n prefixing.
 */
export function normalizeMenuUrl(url: string, lang: string = "es"): string {
  if (!url || url === "#") return "#";

  let cleanUrl = url;

  // Extract relative path if full URL
  if (cleanUrl.startsWith("http://") || cleanUrl.startsWith("https://")) {
    try {
      const parsed = new URL(cleanUrl);
      let pathname = parsed.pathname;
      if (pathname.includes("/cms-antumapu")) {
        pathname = pathname.replace("/cms-antumapu", "");
      }
      cleanUrl = pathname || "/";
    } catch (e) {
      // keep cleanUrl as is
    }
  }

  // Remove trailing slash except for root "/"
  if (cleanUrl !== "/" && cleanUrl.endsWith("/")) {
    cleanUrl = cleanUrl.slice(0, -1);
  }

  // Handle English localization
  if (lang === "en" && cleanUrl.startsWith("/") && !cleanUrl.startsWith("/en")) {
    cleanUrl = `/en${cleanUrl === "/" ? "" : cleanUrl}`;
  }

  return cleanUrl;
}

/**
 * Builds a hierarchical tree from a flat array of menu items with 'id' and 'parent' properties.
 */
export function buildMenuTree(items: MenuItem[], lang: string = "es"): MenuItem[] {
  if (!items || !Array.isArray(items)) return [];

  // Deep clone and normalize items
  const clonedItems: MenuItem[] = items.map((item) => {
    const title = item.title || item.name || item.label || "";
    const rawUrl = item.url || item.link || item.href || "#";
    const url = normalizeMenuUrl(rawUrl, lang);
    const existingChildren = Array.isArray(item.children)
      ? item.children.map((c) => ({
          ...c,
          title: c.title || c.name || c.label || "",
          url: normalizeMenuUrl(c.url || c.link || c.href || "#", lang),
          children: c.children || [],
        }))
      : [];

    return {
      ...item,
      id: item.id !== undefined && item.id !== null ? String(item.id) : undefined,
      parent: item.parent !== undefined && item.parent !== null ? String(item.parent) : "0",
      title,
      url,
      children: existingChildren,
    };
  });

  const map = new Map<string, MenuItem>();
  clonedItems.forEach((item) => {
    if (item.id) {
      map.set(item.id, item);
    }
  });

  const roots: MenuItem[] = [];

  clonedItems.forEach((item) => {
    const parentId = item.parent;
    if (
      parentId &&
      parentId !== "0" &&
      parentId !== "null" &&
      parentId !== "undefined" &&
      map.has(parentId) &&
      parentId !== item.id
    ) {
      const parentNode = map.get(parentId)!;
      if (!parentNode.children) {
        parentNode.children = [];
      }
      if (!parentNode.children.some((c) => c.id === item.id)) {
        parentNode.children.push(item);
      }
    } else {
      roots.push(item);
    }
  });

  const sortTree = (nodes: MenuItem[]) => {
    nodes.sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
    nodes.forEach((node) => {
      if (node.children && node.children.length > 0) {
        sortTree(node.children);
      }
    });
  };

  sortTree(roots);
  return roots;
}

