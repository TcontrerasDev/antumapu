document.addEventListener('astro:page-load', () => {
    const header = document.getElementById('main-header');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header?.classList.add('bg-navy-950/70!', 'backdrop-blur-md', 'border-white/5');
        } else {
            header?.classList.remove('bg-navy-950/70!', 'backdrop-blur-md', 'border-white/5');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar al cargar por si la página ya tiene scroll
    handleScroll();
});
