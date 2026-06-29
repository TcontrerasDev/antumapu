import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './header.js';

gsap.registerPlugin(ScrollTrigger);

let lenis;

// Flag global para rastrear si ya se ejecutaron las animaciones de entrada
// Se reinicia solo cuando se refresca la página (F5)
if (typeof window !== 'undefined' && window.revealAnimationsPerformed === undefined) {
    window.revealAnimationsPerformed = false;
}

function initLenis() {
    if (lenis) {
        lenis.destroy();
    }
    
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    window.lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

function initAnimations() {
    // Matamos los ScrollTriggers anteriores para evitar conflictos en la navegación
    ScrollTrigger.getAll().forEach(t => t.kill());

    // 1. PARALLAX (Siempre se ejecuta)
    const parallaxImgs = gsap.utils.toArray('.parallax-img');
    parallaxImgs.forEach(img => {
        gsap.fromTo(img, 
            { y: "-10%" },
            {
                y: "10%",
                ease: "none",
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    });

    // 2. REVEAL (Solo en la primera carga de la sesión)
    if (!window.revealAnimationsPerformed) {
        const revealTexts = gsap.utils.toArray('.reveal-text');
        revealTexts.forEach(text => {
            gsap.from(text, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: text,
                    start: "top 90%",
                }
            });
        });
    }
}

function setup() {
    initLenis();
    initAnimations();
    
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);
}

document.addEventListener('astro:page-load', () => {
    setup();
});

if (!window.astroPageLoadRegistered) {
    window.addEventListener('load', () => {
        if (!document.querySelector('.lenis')) {
            setup();
        }
    });
    window.astroPageLoadRegistered = true;
}
