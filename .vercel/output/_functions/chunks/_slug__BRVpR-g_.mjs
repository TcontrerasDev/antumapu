import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { o as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BGl6nG9d.mjs';
import { g as getBreadcrumbs } from './utils_C80Gqef0.mjs';

const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { theme = "light" } = Astro2.props;
  const { slug } = Astro2.params;
  if (!slug) return Astro2.redirect("/404");
  const noticia = await wpApi.getNoticiaBySlug(slug);
  if (!noticia) return Astro2.redirect("/404");
  const tags = noticia._embedded?.["wp:term"]?.[0] || [];
  const breadcrumbs = getBreadcrumbs(Astro2.url.pathname);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": noticia.title.rendered }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "theme": "light" })} ${maybeRenderHead()}<main class="bg-sand-100 pt-30"> <section> <div class="wrapper"> <span class="text-gold-500 font-heading-2 tracking-[1.4px]"> <a href="/"${addAttribute([
    {
      "text-white-soft!": theme === "dark",
      "text-navy-950": theme === "light"
    }
  ], "class:list")}>Inicio /
</a> ${breadcrumbs.map(
    (bc) => bc.isLast ? renderTemplate`<span${addAttribute([
      {
        "text-gold-500": theme === "dark",
        "text-gold-700": theme === "light"
      }
    ], "class:list")}> ${" "} ${bc.name} </span>` : renderTemplate`<a${addAttribute(bc.url, "href")}${addAttribute([
      {
        "text-white-soft!": theme === "dark",
        "text-navy-950": theme === "light"
      }
    ], "class:list")}> ${" "} ${bc.name} /
</a>`
  )} </span> <h1 class="text-navy-950 text-h2 lg:text-h1 font-heading-2">${unescapeHTML(noticia.title.rendered)}</h1> <div class="text-[18px] lg:text-2xl pt-5 text-navy-950 w-full lg:w-3/4">${unescapeHTML(noticia.excerpt.rendered)}</div> </div> </section> <section class="padding-section"> <div class="wrapper grid grid-cols-12 gap-5"> <div class="col-span-full lg:col-span-9 [&_p]:text-navy-950 [&_p]:text-base [&_p]:py-3 [&_figure]:mb-3">${unescapeHTML(noticia.content.rendered)}</div> <div class="col-span-full lg:col-span-3 flex flex-col gap-5 p-5 h-max bg-navy-950 lg:sticky lg:top-22.5"> <div class="flex flex-col gap-4"> <h3 class="text-[24px] text-gold-500 tracking-[15%]">Fecha de Publicación</h3> <p class="text-white text-base">${unescapeHTML(formatDate(noticia.date))}</p> </div> <div class="flex flex-col gap-4"> <h3 class="text-[24px] text-gold-500 tracking-[15%]">Autor</h3> <p class="text-white text-base">${unescapeHTML(noticia.acf?.autor || "Antumapu")}</p> </div> <div> ${tags.map((tag, index) => renderTemplate`<span class="text-white-soft w-max"> ${tag.name}${index < tags.length - 1 ? " / " : ""} </span>`)} </div> </div> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/tom/Proyectos/antumapu/src/pages/noticias/[slug].astro", void 0);

const $$file = "/home/tom/Proyectos/antumapu/src/pages/noticias/[slug].astro";
const $$url = "/noticias/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
