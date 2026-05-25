import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { m as maybeRenderHead, h as addAttribute, u as unescapeHTML, r as renderTemplate, o as renderComponent } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi } from './Footer_BGl6nG9d.mjs';

const $$CardNoticia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardNoticia;
  const { url, imgSrc, fecha, titulo, descripcion, theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="col-span-full lg:col-span-4 hover:[&_h3]:underline"> <a${addAttribute(`/noticias/${url}`, "href")} class="flex flex-col gap-5"> <div class="h-80"> <img${addAttribute(imgSrc, "src")}${addAttribute(titulo, "alt")} class="w-full h-full object-cover"> </div> <div class="flex flex-col gap-1"> <span class="uppercase text-gold-700 text-base font-heading-2">${fecha}</span> <h3${addAttribute([
    "text-h3",
    {
      "text-navy-950": theme === "light",
      "text-sand-100": theme === "dark"
    }
  ], "class:list")}> ${titulo} </h3> <div${addAttribute([
    "text-base",
    {
      "text-navy-950": theme === "light",
      "text-white-soft": theme === "dark"
    }
  ], "class:list")}>${unescapeHTML(descripcion)}</div> </div> </a> </article>`;
}, "/home/tom/Proyectos/antumapu/src/components/cards/CardNoticia.astro", void 0);

const $$CardNoticiaDestacada = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardNoticiaDestacada;
  const { url, imgSrc, fecha, titulo, descripcion, theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="col-span-full lg:col-span-8 hover:[&_h3]:underline"> <a${addAttribute(`/noticias/${url}`, "href")} class="flex flex-col gap-5"> <div> <img${addAttribute(imgSrc, "src")}${addAttribute(titulo, "alt")} class="w-full h-full object-cover"> </div> <div class="flex flex-col gap-1"> <span class="uppercase text-gold-700 text-base font-heading-2">${fecha}</span> <h3${addAttribute([
    "text-h3",
    {
      "text-navy-950": theme === "light",
      "text-white": theme === "dark"
    }
  ], "class:list")}> ${titulo} </h3> <div${addAttribute([
    "text-base",
    {
      "text-navy-950": theme === "light",
      "text-white-soft": theme === "dark"
    }
  ], "class:list")}>${unescapeHTML(descripcion)}</div> </div> </a> </article>`;
}, "/home/tom/Proyectos/antumapu/src/components/cards/CardNoticiaDestacada.astro", void 0);

const $$Noticias = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Noticias;
  const noticias = await wpApi.getNoticias();
  const { title, bajada, theme = "light" } = Astro2.props;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "padding-section",
    {
      "bg-sand-100": theme === "light",
      "bg-navy-950": theme === "dark"
    }
  ], "class:list")}> <div class="wrapper"> <div class="pb-8 flex flex-col gap-4"> <h2${addAttribute([
    "h2-heading",
    {
      "text-navy-950": theme === "light",
      "text-sand-100": theme === "dark"
    }
  ], "class:list")}> ${title} </h2> <p${addAttribute([
    {
      "text-navy-950/80": theme === "light",
      "text-white-soft/80": theme === "dark"
    },
    "max-w-2xl"
  ], "class:list")}> ${bajada} </p> </div> <div class="grid gap-5 lg:grid-cols-12 items-baseline pb-8"> ${noticias.map((noticias2, index) => {
    if (index === 0) {
      return renderTemplate`${renderComponent($$result, "CardDestacada", $$CardNoticiaDestacada, { "url": noticias2.slug, "imgSrc": noticias2._embedded?.["wp:featuredmedia"]?.[0]?.source_url, "fecha": formatDate(noticias2.date), "titulo": noticias2.title.rendered, "descripcion": noticias2.excerpt.rendered, "theme": theme })}`;
    }
  })} ${noticias.map((noticias2, index) => {
    if (index === 1) {
      return renderTemplate`${renderComponent($$result, "CardNoticia", $$CardNoticia, { "url": noticias2.slug, "imgSrc": noticias2._embedded?.["wp:featuredmedia"]?.[0]?.source_url, "fecha": formatDate(noticias2.date), "titulo": noticias2.title.rendered, "descripcion": noticias2.excerpt.rendered, "theme": theme })}`;
    }
  })} </div> <div class="grid gap-5 lg:grid-cols-12"> ${noticias.map((noticia, index) => {
    if (index !== 0 && index !== 1) {
      return renderTemplate`${renderComponent($$result, "CardNoticia", $$CardNoticia, { "url": noticia.slug, "imgSrc": noticia._embedded?.["wp:featuredmedia"]?.[0]?.source_url, "fecha": formatDate(noticia.date), "titulo": noticia.title.rendered, "descripcion": noticia.excerpt.rendered, "theme": theme })}`;
    }
  })} </div> </div> </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/layout/Noticias.astro", void 0);

export { $$Noticias as $ };
