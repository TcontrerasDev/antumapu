import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BGl6nG9d.mjs';
import { $ as $$Hero } from './Hero_Cdt9pGFP.mjs';
import { $ as $$Noticias$1 } from './Noticias_CuDw3bZc.mjs';

const $$Noticias = createComponent(async ($$result, $$props, $$slots) => {
  const pageNoticias = await wpApi.getPageBySlug("noticias");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Noticias" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "theme": "dark" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "title": pageNoticias.title.rendered, "bajada": pageNoticias.content.rendered, "theme": "dark" })} ${renderComponent($$result2, "Noticia", $$Noticias$1, { "title": " ", "bajada": " ", "theme": "dark" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/tom/Proyectos/antumapu/src/pages/noticias.astro", void 0);

const $$file = "/home/tom/Proyectos/antumapu/src/pages/noticias.astro";
const $$url = "/noticias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Noticias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
