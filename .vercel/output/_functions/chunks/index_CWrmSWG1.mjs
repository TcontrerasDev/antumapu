import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, u as unescapeHTML, o as renderComponent } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi, r as renderScript, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BGl6nG9d.mjs';
import { $ as $$Noticias } from './Noticias_CuDw3bZc.mjs';

const $$ButtonBg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ButtonBg;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="w-fit font-heading-2 uppercase text[14px] px-8 py-4 bg-gold-500 border rounded-sm border-gold-500 text-navy-950 tracking-[1.4px] font-semibold hover:bg-transparent hover:text-gold-500 transition-colors duration-300 max-sm:text-[12px]"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/tom/Proyectos/antumapu/src/components/buttons/ButtonBg.astro", void 0);

const $$ButtonTransparent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ButtonTransparent;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="w-fit font-heading-2 uppercase text[14px] px-8 py-4 border rounded-sm border-gold-500 text-gold-500 tracking-[1.4px] font-semibold hover:bg-gold-500 hover:text-navy-950 transition-colors duration-300 max-sm:text-[12px]"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/home/tom/Proyectos/antumapu/src/components/buttons/ButtonTransparent.astro", void 0);

const $$HeroIndex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$HeroIndex;
  const { antetitulo, title, bajada, txtBtn1, linkBtn1, txtBtn2, linkBtn2, imgBack } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="h-screen w-full flex items-center bg-hero-gradient relative overflow-clip"> <img${addAttribute(imgBack, "src")} alt=" " class="absolute top-0 left-0 w-full h-[120%] object-cover opacity-10 z-0 parallax-img pointer-events-none"> <div class="wrapper relative z-10 flex flex-col items-start gap-7"> <div class="flex items-center gap-2 reveal-text"> <svg xmlns="http://www.w3.org/2000/svg" class="w-2" viewBox="0 0 24 24" fill="none" stroke="#e0b24a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path> </svg> <p class="text-gold-500 text-[14px] uppercase text-base font-body font-light tracking-[0.8px]"> ${antetitulo} </p> </div> <h1 class="text-white font-heading-1 max-sm:text-[40px] sm:text-[70px] 2xl:text-h-especial reveal-text"> ${title} </h1> <div class="max-w-3xl text-white font-light max-sm:text[16px] sm:text-[18px] reveal-text">${unescapeHTML(bajada)}</div> <div class="flex flex-col md:flex-row items-start justify-center gap-4 reveal-text"> ${renderComponent($$result, "ButtonBg", $$ButtonBg, { "href": linkBtn1 }, { "default": ($$result2) => renderTemplate`${txtBtn1}` })} ${renderComponent($$result, "ButtonTransparent", $$ButtonTransparent, { "href": linkBtn2 }, { "default": ($$result2) => renderTemplate`${txtBtn2}` })} </div> </div> </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/index/HeroIndex.astro", void 0);

const $$Historia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Historia;
  const {
    title,
    resumen,
    img,
    alt,
    statText1,
    statText2,
    statText3,
    statNumber1,
    statNumber2,
    statNumber3
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="padding-section bg-navy-950 overflow-hidden"> <div class="wrapper grid grid-cols-1 items-start lg:grid-cols-2 lg:items-center gap-5"> <div class="flex flex-col gap-7"> <h2 class="text-white h2-heading reveal-text">${title}</h2> <div class="reveal-text"> <p class="text-white-soft mb-4 whitespace-pre-line">${unescapeHTML(resumen)}</p> </div> <div class="reveal-text mb-7"> ${renderComponent($$result, "ButtonTransparent", $$ButtonTransparent, { "href": "/historia" }, { "default": ($$result2) => renderTemplate`Conocer más` })} </div> </div> <div class="overflow-hidden rounded-sm aspect-[4/5] lg:aspect-square"> <img${addAttribute(img, "src")}${addAttribute(alt, "alt")} class="w-full h-[120%] object-cover parallax-img scale-110"> </div> <div class="flex flex-col mt-10 justify-center items-center gap-16 md:flex-row border-t border-b border-gold-700 py-22 md:gap-48 lg:col-span-2 reveal-text"> <div class="flex flex-col items-center justify-center gap-2"> <p class="text-gold-500 text-5xl font-heading-2!">${statNumber1}</p> <p class="text-center font-heading-2! uppercase tracking-[1.4px] text-white-soft"> ${statText1} </p> </div> <div class="flex flex-col items-center justify-center gap-2"> <p class="text-gold-500 text-5xl font-heading-2!">${statNumber2}</p> <p class="text-center font-heading-2! uppercase tracking-[1.4px] text-white-soft"> ${statText2} </p> </div> <div class="flex flex-col items-center justify-center gap-2"> <p class="text-gold-500 text-5xl font-heading-2!">${statNumber3}</p> <p class="text-center font-heading-2! uppercase tracking-[1.4px] text-white-soft"> ${statText3} </p> </div> </div> </div> </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/index/Historia.astro", void 0);

const $$Presentaciones = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Presentaciones;
  const { title, bajada } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="padding-section bg-sand-100"> <div class="wrapper flex flex-col"> <div class="pb-8 border-b border-navy-950 flex flex-col gap-4"> <h2 class="text-navy-950 uppercase font-bold text-h2 max-sm:text-[40px] lg:w-lg reveal-text">${title}</h2> <p class="text-navy-950/80 max-w-2xl reveal-text">${bajada}</p> </div> <div class="flex flex-col justify-center"> ${renderSlot($$result, $$slots["default"])} </div> </div> </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/index/Presentaciones.astro", void 0);

const $$CardPresentacion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardPresentacion;
  const { url, fecha, titulo, obra, lugar, direccion, hora } = Astro2.props;
  const dateParts = fecha.split(" ");
  const dia = dateParts.find((p) => /\d/.test(p)) || "";
  const mes = dateParts.find((p) => !/\d/.test(p)) || "";
  return renderTemplate`${maybeRenderHead()}<article data-astro-cid-rnhp3lvs> <a${addAttribute(url, "href")} target="_blank" class="card-presentacion" data-astro-cid-rnhp3lvs> <div class="info-main" data-astro-cid-rnhp3lvs> <div class="flex flex-col justify-center max-sm:py-3 md:w-[6rem] lg:w-[3rem]" data-astro-cid-rnhp3lvs> <span class="dia" data-astro-cid-rnhp3lvs>${dia}</span> <span class="mes" data-astro-cid-rnhp3lvs>${mes}</span> </div> <div class="flex flex-col justify-center" data-astro-cid-rnhp3lvs> <h3 class="titulo" data-astro-cid-rnhp3lvs>${unescapeHTML(titulo)}</h3> <span class="obra" data-astro-cid-rnhp3lvs>${unescapeHTML(obra)}</span> </div> </div> <div class="info-details" data-astro-cid-rnhp3lvs> <div class="flex flex-col justify-center" data-astro-cid-rnhp3lvs> <p class="lugar" data-astro-cid-rnhp3lvs>${lugar}</p> <span class="direccion" data-astro-cid-rnhp3lvs>${unescapeHTML(direccion)}</span> </div> <div class="flex justify-center gap-5" data-astro-cid-rnhp3lvs> <h3 class="hora" data-astro-cid-rnhp3lvs>${hora}</h3> <span class="icon-wrapper" data-astro-cid-rnhp3lvs> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon" data-astro-cid-rnhp3lvs> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-rnhp3lvs></path> <path d="M5 12l14 0" data-astro-cid-rnhp3lvs></path> <path d="M13 18l6 -6" data-astro-cid-rnhp3lvs></path> <path d="M13 6l6 6" data-astro-cid-rnhp3lvs></path> </svg> </span> </div> </div> </a> </article>`;
}, "/home/tom/Proyectos/antumapu/src/components/cards/CardPresentacion.astro", void 0);

const $$CardObra = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardObra;
  const { url, imgSrc, titulo, descripcion } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="h-130 border border-amber-50 rounded hover:border-gold-500 focus:border-gold-500 transition-all"> <a${addAttribute(`/obras/${url}`, "href")} class="group bg-hero-gradient flex h-full w-full rounded overflow-hidden"> <figure class="relative h-full w-full"> <img${addAttribute(imgSrc, "src")}${addAttribute(titulo, "alt")} class="w-full h-full object-cover rounded opacity-50"> <figcaption class="absolute bottom-0 left-0 w-full xl:translate-y-[calc(100%-60px)] group-hover:translate-y-0 transition-transform duration-500 ease-in-out group-focus:translate-y-0"> <h2 class="uppercase text-white text-2xl p-4">${unescapeHTML(titulo)}</h2> <div class="backdrop-brightness-30 p-4 flex flex-col gap-4"> <div class="text-base text-white-soft">${unescapeHTML(descripcion)}</div> <span class="text-gold-500 uppercase font-heading-2 flex gap-1 items-center font-semibold tracking-[1.4px]">Leer más
<svg class="w-5 stroke-gold-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l14 0"></path> <path d="M13 18l6 -6"></path> <path d="M13 6l6 6"></path> </svg> </span> </div> </figcaption> </figure> </a> </article>`;
}, "/home/tom/Proyectos/antumapu/src/components/cards/CardObra.astro", void 0);

const $$Repertorio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Repertorio;
  const { title, bajada } = Astro2.props;
  const obras = await wpApi.getObras();
  return renderTemplate`${maybeRenderHead()}<section class="bg-navy-950 padding-section" data-astro-cid-q2khgxjv> <div class="wrapper" data-astro-cid-q2khgxjv> <div class="mb-8 flex flex-col gap-4" data-astro-cid-q2khgxjv> <h2 class="text-white h2-heading reveal-text" data-astro-cid-q2khgxjv>${title}</h2> <p class="text-white-soft max-w-2xl reveal-text" data-astro-cid-q2khgxjv>${bajada}</p> </div> <div class="flex overflow-x-auto gap-5 snap-x snap-mandatory pb-4 custom-scrollbar" data-lenis-prevent data-astro-cid-q2khgxjv> ${obras.map((obra) => renderTemplate`<div class="w-full shrink-0 md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-15px)] snap-start" data-astro-cid-q2khgxjv> ${renderComponent($$result, "CardObra", $$CardObra, { "url": obra.slug, "imgSrc": obra._embedded?.["wp:featuredmedia"]?.[0]?.source_url, "titulo": obra.title.rendered, "descripcion": obra.excerpt.rendered, "data-astro-cid-q2khgxjv": true })} </div>`)} </div> <div class="mt-4 flex justify-end lg:hidden" data-astro-cid-q2khgxjv> <button type="button" class="flex items-center gap-2 text-gold-500 animate-pulse scroll-indicator cursor-pointer hover:text-gold-400 active:scale-95 transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded p-1" aria-label="Deslizar repertorio" data-astro-cid-q2khgxjv> <span class="text-sm font-heading-2 uppercase tracking-widest" data-astro-cid-q2khgxjv>Desliza</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce-x" data-astro-cid-q2khgxjv> <path d="M5 12h14" data-astro-cid-q2khgxjv></path> <path d="m12 5 7 7-7 7" data-astro-cid-q2khgxjv></path> </svg> </button> </div> </div> </section> ${renderScript($$result, "/home/tom/Proyectos/antumapu/src/components/index/Repertorio.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/tom/Proyectos/antumapu/src/components/index/Repertorio.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const page = await wpApi.getPageBySlug("antumapu");
  const dataPresentaciones = await wpApi.getPresentaciones();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Antumapu" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "theme": "dark" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroIndex", $$HeroIndex, { "antetitulo": page.acf.antetitulo, "title": page.title.rendered, "bajada": page.content.rendered, "txtBtn1": page.acf.botones.text_boton, "linkBtn1": page.acf.botones.pagina, "txtBtn2": page.acf.botones.text_boton_2, "linkBtn2": page.acf.botones.pagina_2, "imgBack": page._embedded?.["wp:featuredmedia"]?.[0]?.source_url })} ${renderComponent($$result2, "Historia", $$Historia, { "title": page.acf.titulo_historia, "resumen": page.acf.resumen, "img": page.acf.imagen_seccion.url, "alt": page.acf.imagen_seccion.alt, "statText1": page.acf.estadisticas.titulo_estadistica, "statText2": page.acf.estadisticas.titulo_estadistica_2, "statText3": page.acf.estadisticas.titulo_estadistica_3, "statNumber1": page.acf.estadisticas.numero_estadistica, "statNumber2": page.acf.estadisticas.numero_estadistica_2, "statNumber3": page.acf.estadisticas.numero_estadistica_3 })} ${renderComponent($$result2, "Presentaciones", $$Presentaciones, { "title": page.acf.titulo_presentaciones, "bajada": page.acf.bajada_presentaciones }, { "default": async ($$result3) => renderTemplate`${dataPresentaciones.map((presentacion) => renderTemplate`${renderComponent($$result3, "CardPresentacion", $$CardPresentacion, { "url": presentacion.acf.url, "fecha": presentacion.acf.fecha_source.formatted_value, "titulo": presentacion.title.rendered, "obra": presentacion.acf.obra, "lugar": presentacion.acf.lugar, "direccion": presentacion.acf.direccion, "hora": presentacion.acf.hora_source.formatted_value })}`)}` })} ${renderComponent($$result2, "Repertorio", $$Repertorio, { "title": page.acf.titulo_obras, "bajada": page.acf.bajada_obras })} ${renderComponent($$result2, "Noticias", $$Noticias, { "title": page.acf.titulo_noticias, "bajada": page.acf.bajada_noticias, "theme": "light" })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/tom/Proyectos/antumapu/src/pages/index.astro", void 0);

const $$file = "/home/tom/Proyectos/antumapu/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
