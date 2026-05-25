import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { m as maybeRenderHead, n as renderSlot, r as renderTemplate, h as addAttribute, u as unescapeHTML, o as renderComponent } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BGl6nG9d.mjs';
import { $ as $$Hero } from './Hero_Cdt9pGFP.mjs';

const $$GridPrestaciones = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="pb-18.75 bg-sand-100"> <div class="wrapper"> <div class="grid grid-cols-12 py-7 border-t border-b border-navy-950 max-sm:py-5"> ${renderSlot($$result, $$slots["default"])} </div> </div> </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/presentaciones/GridPrestaciones.astro", void 0);

const $$CardPresentacionCol = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardPresentacionCol;
  const { url, fecha, titulo, obra, lugar, direccion, hora } = Astro2.props;
  const dateParts = fecha.split(" ");
  const dia = dateParts.find((p) => /\d/.test(p)) || "";
  const mes = dateParts.find((p) => !/\d/.test(p)) || "";
  return renderTemplate`${maybeRenderHead()}<article class="col-span-full md:col-span-6 lg:col-span-4"> <a${addAttribute(url, "href")} target="_blank" class="relative p-5 flex flex-col gap-5 group hover:bg-navy-950 focus:bg-navy-950 transition-all ease-in"> <div class="flex flex-col"> <span class="text-[64px] text-navy-950 font-heading-2 group-hover:text-white group-focus:text-white transition-colors ease-in">${dia}</span> <span class="uppercase text-[16px] text-gold-700 font-heading-2 group-hover:text-gold-500 group-focus:text-gold-500 transition-colors ease-in">${mes}</span> </div> <div class="flex flex-col gap-4"> <h2 class="text-[38px] text-navy-950 group-hover:text-white group-focus:text-white">${unescapeHTML(titulo)}</h2> <p class="text-base text-navy-800 italic group-hover:text-gold-500 group-focus:text-gold-500">${unescapeHTML(obra)}</p> </div> <div class="flex flex-col gap-2"> <p class="text-[20px] font-heading-2! text-navy-950 group-hover:text-white group-focus:text-white"> ${lugar} </p> <p class="text-[20px] font-light font-heading-2! text-navy-800 group-hover:text-gold-500 group-focus:text-gold-500"> ${direccion} </p> </div> <div> <p class="text-[20px] font-heading-2! text-navy-950 group-hover:text-white group-focus:text-white"> ${hora} </p> </div> <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-gold-700 absolute bottom-0 right-0 w-6 m-5 group-hover:stroke-gold-500 group-hover:rotate-320 group-focus:stroke-gold-500 group-focus:rotate-320"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg> </span> </a> </article>`;
}, "/home/tom/Proyectos/antumapu/src/components/cards/CardPresentacionCol.astro", void 0);

const $$Presentaciones = createComponent(async ($$result, $$props, $$slots) => {
  const pagePresentaciones = await wpApi.getPageBySlug("presentaciones");
  const dataPresentaciones = await wpApi.getPresentaciones();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Presentaciones" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "theme": "light" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "title": pagePresentaciones.title.rendered, "bajada": pagePresentaciones.content.rendered, "theme": "light" })} ${renderComponent($$result2, "GridPrestaciones", $$GridPrestaciones, {}, { "default": async ($$result3) => renderTemplate`${dataPresentaciones.map((presentacion) => renderTemplate`${renderComponent($$result3, "CardPresentacionCol", $$CardPresentacionCol, { "url": presentacion.acf.url, "fecha": presentacion.acf.fecha_source.formatted_value, "titulo": presentacion.title.rendered, "obra": presentacion.acf.obra, "lugar": presentacion.acf.lugar, "direccion": presentacion.acf.direccion, "hora": presentacion.acf.hora_source.formatted_value })}`)}` })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/tom/Proyectos/antumapu/src/pages/presentaciones.astro", void 0);

const $$file = "/home/tom/Proyectos/antumapu/src/pages/presentaciones.astro";
const $$url = "/presentaciones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Presentaciones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
