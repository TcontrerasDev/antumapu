import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, o as renderComponent } from './entrypoint_CQkSUtmK.mjs';
import { w as wpApi, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BGl6nG9d.mjs';
import { $ as $$Hero } from './Hero_Cdt9pGFP.mjs';

const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Section;
  const { background } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["padding-section", background], "class:list")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/historia/Section.astro", void 0);

const $$FeatureSplit = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FeatureSplit;
  const { title, content, img, alt, imageLeft = false } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "bg-navy-950" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper grid grid-cols-4 md:grid-cols-12 gap-5 items-start"> <div${addAttribute(["col-span-full lg:col-span-6 flex flex-col gap-6", imageLeft ? "lg:order-2" : "lg:order-1"], "class:list")}> <h2 class="uppercase font-bold text-h2 max-sm:text-[40px] text-white reveal-text">${title}</h2> <p class="text-white-soft text-body prose reveal-text">${content}</p> </div> <div${addAttribute(["col-span-full lg:col-span-6 overflow-hidden aspect-square lg:aspect-video rounded-sm", imageLeft ? "lg:order-1" : "lg:order-2"], "class:list")}> <img${addAttribute(img, "src")}${addAttribute(alt, "alt")} class="w-full h-[120%] object-cover parallax-img scale-110"> </div> </div> ` })}`;
}, "/home/tom/Proyectos/antumapu/src/components/historia/FeatureSplit.astro", void 0);

const $$GridSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$GridSection;
  const { title, content } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "bg-sand-100" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper"> <div class="mb-17.5 flex flex-col gap-6"> <h2 class="uppercase font-bold text-h2 max-sm:text-[40px] text-navy-950 reveal-text">${title}</h2> <p class="text-navy-950 text-body reveal-text">${content}</p> </div> <div class="grid grid-cols-4 lg:grid-cols-12"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "/home/tom/Proyectos/antumapu/src/components/historia/GridSection.astro", void 0);

const $$CardInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$CardInfo;
  const { title, description, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="col-span-full md:col-span-2 lg:col-span-3 flex flex-col justify-between min-h-80 p-3" tabindex="0"> <div class="mb-5"> <h3 class="text-[20px] text-navy-950 mb-1">${title}</h3> <p class="text-body text-navy-950">${description}</p> </div> <div class="w-full h-60"> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover"> </div> </article>`;
}, "/home/tom/Proyectos/antumapu/src/components/cards/CardInfo.astro", void 0);

const $$Conclusion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Conclusion;
  const { text, img, alt } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "background": "bg-navy-950" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="wrapper flex flex-col gap-8"> <p class="font-heading-2! text-2xl text-white reveal-text">${text}</p> <div class="w-full h-[50vh]"> <img${addAttribute(img, "src")}${addAttribute(alt, "alt")} class="w-full h-full object-cover object-top"> </div> </div> ` })}`;
}, "/home/tom/Proyectos/antumapu/src/components/historia/Conclusion.astro", void 0);

const $$Historia = createComponent(async ($$result, $$props, $$slots) => {
  const page = await wpApi.getPageBySlug("historia");
  const cardsInfo = page.acf.destacadas;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Historia" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "theme": "dark" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, { "title": page.title.rendered, "bajada": page.content.rendered, "theme": "dark" })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "title": page.acf.titulo_1, "content": page.acf.texto_1, "img": page.acf.imagen_1.url, "alt": page.acf.imagen_1.alt, "imageLeft": false })} ${renderComponent($$result2, "GridSection", $$GridSection, { "title": page.acf.titulo_2, "content": page.acf.texto_2 }, { "default": async ($$result3) => renderTemplate`${cardsInfo.map((card) => renderTemplate`${renderComponent($$result3, "CardInfo", $$CardInfo, { "title": card.titulo, "description": card.descripcion, "img": card.img.url })}`)}` })} ${renderComponent($$result2, "FeatureSplit", $$FeatureSplit, { "title": page.acf.titulo_3, "content": page.acf.texto_3, "img": page.acf.imagen_3.url, "alt": page.acf.imagen_3.alt, "imageLeft": true })} ${renderComponent($$result2, "Conclusion", $$Conclusion, { "text": page.acf.conclusion, "img": page.acf.imagen_conclusion.url, "alt": page.acf.imagen_conclusion.alt })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/tom/Proyectos/antumapu/src/pages/historia.astro", void 0);

const $$file = "/home/tom/Proyectos/antumapu/src/pages/historia.astro";
const $$url = "/historia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Historia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
