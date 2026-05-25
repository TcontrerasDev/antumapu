import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, o as renderComponent } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BGl6nG9d.mjs';
import { $ as $$Hero } from './Hero_Cdt9pGFP.mjs';

const $$Descripcion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Descripcion;
  const { texto, video } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-10 col-span-full lg:col-span-7"> <p class="text-base text-navy-950 whitespace-pre-line">${unescapeHTML(texto)}</p> <div class="*:w-full *:h-120">${unescapeHTML(video)}</div> </div>`;
}, "/home/tom/Proyectos/antumapu/src/components/single-obra/descripcion.astro", void 0);

async function getStaticPaths() {
  const slugs = await wpApi.getSlugObras();
  return slugs.map((slug) => ({ params: { slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const obra = await wpApi.getObraBySlug(slug);
  if (!obra) return Astro2.redirect("/404");
  const rawFecha = obra.acf.fecha_estreno_source?.formatted_value || "";
  const formattedFecha = rawFecha.charAt(0).toUpperCase() + rawFecha.slice(1).replace(/\s+/g, " - ");
  const repertorio = obra.acf.repertorio || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": obra.title.rendered }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "title": obra.title.rendered, "bajada": obra.content.rendered }, { "default": async ($$result3) => renderTemplate` <div class="mt-8 border-t border-gold-500/20 flex flex-col gap-12 py-4 w-max md:gap-25 md:flex-row"> <div> <h2 class="text-[14px] tracking-[15%] text-gold-500">
Director Artístico y Coreográfico
</h2> <p class="text-[20px] mt-4 text-white">${obra.acf.director}</p> </div> <div> <h2 class="text-[14px] tracking-[15%] text-gold-500">Duración</h2> <p class="text-[20px] mt-4 text-white">${obra.acf.duracion}</p> </div> <div> <h2 class="text-[14px] tracking-[15%] text-gold-500">Estreno</h2> <p class="text-[20px] mt-4 text-white">${formattedFecha}</p> </div> </div> ` })} <section class="bg-sand-100 padding-section"> <div class="wrapper grid grid-cols-12"> ${renderComponent($$result2, "Descripcion", $$Descripcion, { "texto": obra.acf.descripcion_obra, "video": obra.acf.video_source?.formatted_value })} <div class="col-span-full lg:col-span-4 lg:col-start-9 xl:col-span-3 xl:col-start-10 bg-navy-950 px-5 h-max max-lg:mt-10"> <h3 class="uppercase text-h3 text-white py-3 flex flex-col">
Repertorio
</h3> <ul class="*:border-t *:border-dashed *:border-white"> ${repertorio.map((baile, index) => renderTemplate`<li class="py-5"> <p class="text-white font-heading-2! uppercase text-[20px]"> <span class="text-gold-500">${(index + 1).toString().padStart(2, "0")}</span> - ${baile.nombre} </p> </li>`)} </ul> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/tom/Proyectos/antumapu/src/pages/obras/[slug].astro", void 0);

const $$file = "/home/tom/Proyectos/antumapu/src/pages/obras/[slug].astro";
const $$url = "/obras/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
