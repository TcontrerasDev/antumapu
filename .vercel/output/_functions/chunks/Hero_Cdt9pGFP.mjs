import { c as createComponent } from './astro-component_VdXnhGTh.mjs';
import { m as maybeRenderHead, h as addAttribute, r as renderTemplate, u as unescapeHTML, n as renderSlot } from './entrypoint_CQkSUtmK.mjs';
import { g as getBreadcrumbs } from './utils_C80Gqef0.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const { title, bajada, theme = "dark" } = Astro2.props;
  const breadcrumbs = getBreadcrumbs(Astro2.url.pathname);
  return renderTemplate`${maybeRenderHead()}<section${addAttribute([
    "h-max relative py-36",
    {
      "bg-hero-gradient": theme === "dark",
      "bg-sand-100": theme === "light"
    }
  ], "class:list")}> <div class="w-56 h-56 aspect-square absolute right-0 lg:right-80 top-42.75 rounded-[274px] bg-gold-500 blur-[175px]"></div> <div class="wrapper flex flex-col justify-center gap-7 h-full relative z-10"> <span class="text-gold-500 font-heading-2 tracking-[1.4px] reveal-text"> <a href="/"${addAttribute([
    {
      "text-white-soft!": theme === "dark",
      "text-navy-950": theme === "light"
    }
  ], "class:list")}>Inicio /
</a> ${breadcrumbs.map((bc) => bc.isLast ? renderTemplate`<span${addAttribute([
    {
      "text-gold-500": theme === "dark",
      "text-gold-700": theme === "light"
    }
  ], "class:list")}> ${" "}${bc.name} </span>` : renderTemplate`<a${addAttribute(bc.url, "href")}${addAttribute([
    {
      "text-white-soft!": theme === "dark",
      "text-navy-950": theme === "light"
    }
  ], "class:list")}> ${" "}${bc.name} /
</a>`)} </span> <h1${addAttribute([
    "font-heading-2 text-[64px] max-sm:text-h2 2xl:text-h1 lg:w-[70%] reveal-text",
    {
      "text-white": theme === "dark",
      "text-navy-950": theme === "light"
    }
  ], "class:list")}>${unescapeHTML(title)}</h1> <div${addAttribute([
    "text-[20px] lg:w-3/5 reveal-text",
    {
      "text-white": theme === "dark",
      "text-navy-950": theme === "light"
    }
  ], "class:list")}>${unescapeHTML(bajada)}</div> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/home/tom/Proyectos/antumapu/src/components/Hero.astro", void 0);

export { $$Hero as $ };
