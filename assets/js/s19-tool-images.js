window.addEventListener('load', () => {
    const section = document.getElementById('tools-section');
    const img1    = document.getElementById('tool-img-1');
    const img2    = document.getElementById('tool-img-2');
    const img3    = document.getElementById('tool-img-3');

    if (!section || !img1 || !img2 || !img3) return;

    const configs = [
        {
            el: img1,
            from: { transformPerspective: 900, z: -1200, rotateX: 35, rotateY: -40, x: -80, scale: 0.15, opacity: 0, transformOrigin: 'center center' }
        },
        {
            el: img2,
            from: { transformPerspective: 900, z: -1200, rotateX: -30, rotateY: 45, x: 80, scale: 0.15, opacity: 0, transformOrigin: 'center center' }
        },
        {
            el: img3,
            from: { transformPerspective: 900, z: -1600, rotateX: 20, rotateY: 10, scale: 0.1, opacity: 0, transformOrigin: 'center center' }
        }
    ];

    /* Set all images to their deep-in-screen start positions */
    configs.forEach(({ el, from }) => gsap.set(el, from));

    /*
     * Scrubbed timeline — every pixel of scroll drives the animation forward/backward.
     * Images burst out of the screen one after another as you scroll down,
     * and retreat back in perfectly as you scroll up.
     */
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            end:   'center center',
            scrub: 0.8
        }
    });

    /* Pepper Spray — first out */
    tl.to(img1, {
        transformPerspective: 900,
        z: 0, rotateX: 0, rotateY: 0, x: 0,
        scale: 1, opacity: 1,
        ease: 'power3.out',
        force3D: true
    }, 0);

    /* App Preview — slightly behind */
    tl.to(img3, {
        transformPerspective: 900,
        z: 0, rotateX: 0, rotateY: 0,
        scale: 1, opacity: 1,
        ease: 'power3.out',
        force3D: true
    }, 0.12);

    /* Sip Check — last */
    tl.to(img2, {
        transformPerspective: 900,
        z: 0, rotateX: 0, rotateY: 0, x: 0,
        scale: 1, opacity: 1,
        ease: 'power3.out',
        force3D: true
    }, 0.25);
});
