import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { m as maybeRenderHead, n as renderSlot, r as renderTemplate, h as addAttribute, u as unescapeHTML, o as renderComponent } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BGl6nG9d.mjs';
import { $ as $$Hero } from './Hero_Cdt9pGFP.mjs';

const $$RepObras = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-navy-950 pb-18.75"> <div class="wrapper flex flex-col justify-center "> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/repertorio/RepObras.astro", void 0);

const $$Cardrep = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cardrep;
  const { url, numeracion, ano, titulo, description } = Astro2.props;
  const words = titulo.trim().split(/\s+/);
  const firstWord = words[0];
  const restOfTitle = words.slice(1).join(" ");
  const yearMatch = ano.match(/\d{4}/);
  const yearOnly = yearMatch ? yearMatch[0] : ano;
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-q6wtdgnk> <a${addAttribute(`/obras/${url}`, "href")} class="card-presentacion" data-astro-cid-q6wtdgnk> <div class="info-main" data-astro-cid-q6wtdgnk> <div class="flex flex-col justify-center" data-astro-cid-q6wtdgnk> <p class="ano" data-astro-cid-q6wtdgnk>${numeracion} - ${yearOnly}</p> </div> <div class="flex flex-col justify-center" data-astro-cid-q6wtdgnk> <h3 class="iniTitulo" data-astro-cid-q6wtdgnk>${unescapeHTML(firstWord)}</h3> <span class="termTitulo" data-astro-cid-q6wtdgnk>${unescapeHTML(restOfTitle)}</span> </div> </div> <div class="info-details" data-astro-cid-q6wtdgnk> <div class="flex flex-col justify-center w-1/2 description" data-astro-cid-q6wtdgnk>${unescapeHTML(description)}</div> <div class="flex justify-center gap-5" data-astro-cid-q6wtdgnk> <span class="icon-wrapper" data-astro-cid-q6wtdgnk> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon" data-astro-cid-q6wtdgnk> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-q6wtdgnk></path> <path d="M5 12l14 0" data-astro-cid-q6wtdgnk></path> <path d="M13 18l6 -6" data-astro-cid-q6wtdgnk></path> <path d="M13 6l6 6" data-astro-cid-q6wtdgnk></path> </svg> </span> </div> </div> </a> </article>`;
}, "/home/tom/Proyectos/antumapu/src/components/cards/Cardrep.astro", void 0);

const $$Obras = createComponent(async ($$result, $$props, $$slots) => {
  const pageObras = await wpApi.getPageBySlug("obras");
  const obras = await wpApi.getObras();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Obras" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "theme": "dark" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "title": pageObras.title.rendered, "bajada": pageObras.content.rendered, "theme": "dark" })} ${renderComponent($$result2, "RepObras", $$RepObras, {}, { "default": async ($$result3) => renderTemplate`${obras.map((obra, index) => renderTemplate`${renderComponent($$result3, "Cardrep", $$Cardrep, { "url": obra.slug, "numeracion": index + 1, "ano": obra.acf.fecha_estreno_source?.formatted_value || "", "titulo": obra.title.rendered, "description": obra.excerpt.rendered })}`)}` })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/tom/Proyectos/antumapu/src/pages/obras.astro", void 0);

const $$file = "/home/tom/Proyectos/antumapu/src/pages/obras.astro";
const $$url = "/obras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Obras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
