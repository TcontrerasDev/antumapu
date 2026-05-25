import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { p as createRenderInstruction, h as addAttribute, r as renderTemplate, u as unescapeHTML, o as renderComponent, q as renderHead, n as renderSlot, m as maybeRenderHead, v as Fragment } from './entrypoint_CQkSUtmK.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/tom/Proyectos/antumapu/node_modules/.pnpm/astro@6.3.2_@vercel+functions@3.6.0_jiti@2.7.0_lightningcss@1.32.0_rollup@4.60.3_yaml@2.9.0/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/tom/Proyectos/antumapu/node_modules/.pnpm/astro@6.3.2_@vercel+functions@3.6.0_jiti@2.7.0_lightningcss@1.32.0_rollup@4.60.3_yaml@2.9.0/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Italiana&family=Oswald:wght@200..700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"><title>${unescapeHTML(title)}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "/home/tom/Proyectos/antumapu/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "/home/tom/Proyectos/antumapu/src/layouts/Layout.astro", void 0);

const Logo = new Proxy({"src":"/_astro/logo-light.wbOIzfDl.png","width":2219,"height":691,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/tom/Proyectos/antumapu/src/assets/logo-light.png";
							}
							
							return target[name];
						}
					});

const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MobileMenu;
  const { nav, navRrss = [], navContacto = [] } = Astro2.props;
  const fallbackNav = [
    { title: "Inicio", url: "/" },
    { title: "Historia", url: "/historia" },
    { title: "Repertorio", url: "/obras" },
    { title: "Cartelera", url: "/presentaciones" },
    { title: "Contacto", url: "#contacto" }
  ];
  const fallbackRrss = [
    { title: "Facebook", url: "https://www.facebook.com/balletantumapu", acf: { icono: "bi bi-facebook" } },
    { title: "Instagram", url: "https://www.instagram.com/ballet_antumapu", acf: { icono: "bi bi-instagram" } },
    { title: "YouTube", url: "https://www.youtube.com/user/AntumapuChile", acf: { icono: "bi bi-youtube" } }
  ];
  const fallbackContacto = [
    { title: "Llamar", url: "tel:+56229787500", acf: { icono: "bi bi-telephone" } }
  ];
  const menuItems = nav && nav.length > 0 ? nav : fallbackNav;
  const rrRssItems = navRrss && navRrss.length > 0 ? navRrss : fallbackRrss;
  const contactoItems = navContacto && navContacto.length > 0 ? navContacto : fallbackContacto;
  const currentPath = Astro2.url.pathname;
  const normalizePath = (p) => {
    if (!p) return "";
    let path = p.replace(/\/$/, "");
    return path === "" ? "/" : path;
  };
  const normalizedCurrent = normalizePath(currentPath);
  const checkActive = (itemUrl) => {
    const normalizedItem = normalizePath(itemUrl);
    if (normalizedItem === "/") {
      return normalizedCurrent === "/";
    }
    return normalizedCurrent === normalizedItem || normalizedCurrent.startsWith(normalizedItem + "/");
  };
  return renderTemplate`${maybeRenderHead()}<div id="mobile-overlay-menu" class="fixed inset-0 w-screen h-screen z-50 bg-[radial-gradient(ellipse_at_center,_var(--color-navy-800)_0%,_var(--color-navy-950)_100%)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out invisible opacity-0 pointer-events-none xl:hidden" role="dialog" aria-modal="true" aria-label="Menú de navegación móvil" data-astro-cid-6aabv5oc> <!-- Efecto de Brillo Central e Iluminación de Escenario (Spotlights con tonalidades de #e0b24a) --> <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(224,178,74,0.12)_0%,_transparent_70%)] pointer-events-none" data-astro-cid-6aabv5oc></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(224,178,74,0.22)_0%,_transparent_40%)] pointer-events-none" data-astro-cid-6aabv5oc></div> <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(224,178,74,0.18)_0%,_transparent_60%)] pointer-events-none" data-astro-cid-6aabv5oc></div> <!-- Logotipo Sutil en la Cabecera (Branding) --> <div class="absolute top-6 left-6 flex items-center gap-3 pointer-events-none select-none z-10" data-astro-cid-6aabv5oc> <div class="w-20 sm:w-24 opacity-30" data-astro-cid-6aabv5oc> <img${addAttribute(Logo.src, "src")} alt="Logo Antumapu" class="w-full filter drop-shadow-[0_0_8px_rgba(224,178,74,0.2)]" data-astro-cid-6aabv5oc> </div> </div> <!-- Botón de Cierre Grande y Accesible con Texto de Ayuda (Cierre Asistido) --> <button id="mobile-menu-close" class="absolute top-6 right-6 p-3 text-[#FCFCFC] hover:text-gold-500 focus:text-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500 rounded-none border border-white/10 hover:border-gold-500/30 transition-all duration-300 bg-white/5 hover:bg-white/10 active:scale-95 flex flex-col items-center justify-center cursor-pointer min-w-[76px] min-h-[76px] z-20" aria-label="Cerrar menú de navegación" data-astro-cid-6aabv5oc> <!-- Icono X de alta visibilidad --> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300" data-astro-cid-6aabv5oc> <line x1="18" y1="6" x2="6" y2="18" data-astro-cid-6aabv5oc></line> <line x1="6" y1="6" x2="18" y2="18" data-astro-cid-6aabv5oc></line> </svg> <!-- Texto de ayuda complementario para adultos mayores --> <span class="font-heading-2 text-[10px] tracking-[1.5px] uppercase mt-1 opacity-80 select-none" data-astro-cid-6aabv5oc>Cerrar</span> </button> <!-- Enlaces de Navegación Verticales Centrados --> <nav class="w-full max-w-lg px-8 menu-content z-10" data-astro-cid-6aabv5oc> <ul class="flex flex-col items-center justify-center space-y-5" data-astro-cid-6aabv5oc> ${menuItems.map((item) => {
    const isActive = checkActive(item.url);
    return renderTemplate`<li class="w-full text-center mobile-menu-item" data-astro-cid-6aabv5oc> <a${addAttribute(item.url, "href")}${addAttribute([
      "mobile-menu-link block py-3.5 px-8 w-full font-heading-2 text-3xl sm:text-4xl uppercase tracking-[3px] transition-all duration-300 rounded-none hover:bg-white/5 focus:bg-white/5 focus:outline-none active:scale-98",
      isActive ? "text-gold-500 font-bold bg-white/5" : "text-[#FCFCFC] hover:text-gold-500 focus:text-gold-500"
    ], "class:list")}${addAttribute(isActive ? "page" : void 0, "aria-current")} data-astro-cid-6aabv5oc> ${item.title} </a> </li>`;
  })} </ul> </nav> <!-- Enlaces Rápidos de Contacto y Redes Sociales (Base del Menú) --> <div class="mt-10 w-full max-w-md px-8 text-center z-10 select-none mobile-menu-footer" data-astro-cid-6aabv5oc> <!-- Línea decorativa sutil --> <div class="opacity-20 w-24 h-[1px] bg-gold-500 mx-auto mb-6" data-astro-cid-6aabv5oc></div> <!-- Botones de contacto de fácil acceso táctil --> <div class="flex justify-center gap-4 mb-6" data-astro-cid-6aabv5oc> ${contactoItems.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="mobile-contact-link flex items-center gap-2.5 py-2.5 px-5 bg-white/5 hover:bg-white/10 active:scale-95 text-[#FCFCFC] hover:text-gold-500 border border-white/10 hover:border-gold-500/30 rounded-none transition-all duration-300 font-heading-2 text-[13px] uppercase tracking-[1px] min-h-[48px] cursor-pointer" target="_blank" rel="noopener noreferrer" data-astro-cid-6aabv5oc> ${item.acf?.icono && renderTemplate`<i${addAttribute(`${item.acf.icono} text-[16px]`, "class")} data-astro-cid-6aabv5oc></i>`} <span data-astro-cid-6aabv5oc>${item.title}</span> </a>`)} </div> <!-- Iconos Redes Sociales --> <div class="flex justify-center gap-5" data-astro-cid-6aabv5oc> ${rrRssItems.map((item) => renderTemplate`<a${addAttribute(item.url, "href")} class="mobile-contact-link flex items-center justify-center w-11 h-11 bg-white/5 hover:bg-white/10 active:scale-90 text-[#FCFCFC] hover:text-gold-500 rounded-none border border-white/10 transition-all duration-300 cursor-pointer" target="_blank" rel="noopener noreferrer"${addAttribute(item.title, "title")}${addAttribute(`Visitar nuestro ${item.title}`, "aria-label")} data-astro-cid-6aabv5oc> ${item.acf?.icono && renderTemplate`<i${addAttribute(`${item.acf.icono} text-[18px]`, "class")} data-astro-cid-6aabv5oc></i>`} </a>`)} </div> </div> </div>  ${renderScript($$result, "/home/tom/Proyectos/antumapu/src/components/MobileMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/tom/Proyectos/antumapu/src/components/MobileMenu.astro", void 0);

const WP_DOMAIN = "http://localhost/cms-antumapu/wp-json/wp/v2/";
async function wpFetch(endpoint) {
  const baseUrl = WP_DOMAIN.endsWith("/") ? WP_DOMAIN : `${WP_DOMAIN}/`;
  const response = await fetch(`${baseUrl}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
  }
  return response.json();
}
const wpApi = {
  getNav: async (nav) => {
    const data = await wpFetch(`menu/${nav}`);
    return data;
  },
  getWidget: async (widget) => {
    const data = await wpFetch(`widget-area/${widget}`);
    return data;
  },
  getPageBySlug: async (slug) => {
    const data = await wpFetch(`pages?slug=${slug}&_embed`);
    return data?.[0] || null;
  },
  getObras: async () => {
    return wpFetch("obras?_embed&per_page=100&orderby=date&order=asc");
  },
  getObraBySlug: async (slug) => {
    const data = await wpFetch(`obras?slug=${slug}&_embed`);
    return data?.[0] || null;
  },
  getSlugObras: async () => {
    const data = await wpFetch("obras?_fields=slug&per_page=100");
    return data.map((obra) => obra.slug);
  },
  getPresentaciones: async () => {
    const data = await wpFetch("presentaciones");
    return data.sort((a, b) => {
      const fechaA = a.acf?.fecha || "";
      const fechaB = b.acf?.fecha || "";
      return fechaA.localeCompare(fechaB);
    });
  },
  getNoticias: async () => {
    return wpFetch("noticias?_embed");
  },
  getNoticiaBySlug: async (slug) => {
    const data = await wpFetch(`noticias?slug=${slug}&_embed`);
    return data?.[0] || null;
  }
};

const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const nav = await wpApi.getNav("menu-primary").catch(() => []);
  const navRrss = await wpApi.getNav("menu-rrss").catch(() => []);
  const navContacto = await wpApi.getNav("menu-contacto").catch(() => []);
  const currentPath = Astro2.url.pathname;
  const normalizePath = (p) => {
    if (!p) return "";
    let path = p.replace(/\/$/, "");
    return path === "" ? "/" : path;
  };
  const normalizedCurrent = normalizePath(currentPath);
  const checkActive = (itemUrl) => {
    const normalizedItem = normalizePath(itemUrl);
    if (normalizedItem === "/") {
      return normalizedCurrent === "/";
    }
    return normalizedCurrent === normalizedItem || normalizedCurrent.startsWith(normalizedItem + "/");
  };
  return renderTemplate`${maybeRenderHead()}<nav class="w-full flex justify-center"> <div class="wrapper flex justify-between py-4 items-center"> <a href="/" class="w-32"> <img${addAttribute(Logo.src, "src")} alt="Logo" class="w-full"> </a> <!-- Disparador Hamburguesa Grande e Interactivo (Accesible) --> <button id="mobile-menu-trigger" class="block xl:hidden text-white hover:text-gold-500 focus:text-gold-500 focus:outline-none p-2 rounded-lg transition-colors duration-200 cursor-pointer" aria-expanded="false" aria-controls="mobile-overlay-menu" aria-haspopup="dialog" aria-label="Abrir menú de navegación"> <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 6h16"></path> <path d="M7 12h13"></path> <path d="M10 18h10"></path> </svg> </button> <!-- Menú de Escritorio con Indicador de Página Activa --> <ul class="hidden xl:flex gap-8 items-center font-heading-2"> ${nav.map((item) => {
    const isActive = checkActive(item.url);
    return renderTemplate`<li> <a${addAttribute([
      "uppercase text-[16px] tracking-[1.4px] transition-colors duration-300",
      isActive ? "text-gold-500 font-bold" : "text-white-soft hover:text-gold-500"
    ], "class:list")}${addAttribute(item.url, "href")}${addAttribute(isActive ? "page" : void 0, "aria-current")}> ${item.title} </a> </li>`;
  })} </ul> </div> </nav> <!-- Menú Desplegable en Pantalla Completa con Datos de WordPress --> ${renderComponent($$result, "MobileMenu", $$MobileMenu, { "nav": nav, "navRrss": navRrss, "navContacto": navContacto })}`;
}, "/home/tom/Proyectos/antumapu/src/components/Navbar.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { theme = "dark" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="main-header"${addAttribute([
    "w-full fixed top-0 z-50 transition-all duration-300",
    {
      "bg-navy-800": theme === "light"
    }
  ], "class:list")}> ${renderComponent($$result, "Navbar", $$Navbar, {})} </header> ${renderScript($$result, "/home/tom/Proyectos/antumapu/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/tom/Proyectos/antumapu/src/components/Header.astro", void 0);

const $$ColFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ColFooter;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="col-span-12 lg:col-span-4 flex mb-20 lg:justify-end"> <div class="flex flex-col gap-5 items-start"> ${title && renderTemplate`<h3 class="text-2xl font-bold uppercase tracking-[1.4px] text-gold-500 w-max"> ${title} </h3>`} ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/tom/Proyectos/antumapu/src/components/layout/ColFooter.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const navRrss = await wpApi.getNav("menu-rrss");
  const navContacto = await wpApi.getNav("menu-contacto");
  const colWidget = await wpApi.getWidget("col-footer");
  return renderTemplate`${maybeRenderHead()}<footer id="contacto" class="pt-18.75 bg-navy-950 relative overflow-clip border-t border-gold-700/20"> <div class="wrapper grid grid-cols-12 gap-5"> ${renderComponent($$result, "ColFooter", $$ColFooter, { "title": "" }, { "default": async ($$result2) => renderTemplate`${unescapeHTML(colWidget.rendered)}` })} ${renderComponent($$result, "ColFooter", $$ColFooter, { "title": "Redes Sociales" }, { "default": async ($$result2) => renderTemplate` <ul class="flex flex-col gap-3"> ${navRrss.map((item) => renderTemplate`<li class="flex w-max"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(item.url, "href")} target="_blank" class="text-white-soft font-body text-[20px] hover:text-gold-500 hover:[&_i]:text-gold-500 transition-colors ease-in flex items-center gap-2"> <i${addAttribute(`text-white-soft ${item.acf.icono}`, "class")}></i> ${item.title} </a> ` })} </li>`)} </ul> ` })} ${renderComponent($$result, "ColFooter", $$ColFooter, { "title": "Contacto" }, { "default": async ($$result2) => renderTemplate` <ul class="flex flex-col gap-3"> ${navContacto.map((item) => renderTemplate`<li class="flex w-max"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(item.url, "href")} target="_blank" class="text-white-soft font-body text-[20px] hover:text-gold-500 hover:[&_i]:text-gold-500 transition-colors ease-in flex items-center gap-2"> <i${addAttribute(`text-white-soft ${item.acf.icono}`, "class")}></i> ${item.title} </a> ` })} </li>`)} </ul> ` })} <div class="col-span-12 border-t border-gold-500/10 py-5 mt-8"> <p class="text-white-soft font-heading-2! text-center tracking-[1.4px]">
© 2026 BALLET FOLKLÓRICO ANTUMAPU · UNIVERSIDAD DE CHILE
</p> </div> </div> <div class="w-full h-120 absolute -bottom-120 rounded-[1486px] bg-gold-700 blur-[150px] opacity-50 aspect-square"></div> </footer>`;
}, "/home/tom/Proyectos/antumapu/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b, renderScript as r, wpApi as w };
