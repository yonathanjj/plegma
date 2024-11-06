document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".text-item");
    const cursor = document.querySelector('.cursor');
    const cursorRing = document.querySelector('.cursor-ring');

    // Verify that cursor elements are present in the DOM
    if (!cursor || !cursorRing) {
        console.error("Cursor elements not found in the DOM.");
        return;
    }

    // Initial setup and animation for each text element
    textElements.forEach((element) => {
        // Set initial random positions and properties
        gsap.set(element, {
            x: gsap.utils.random(-200, 200),
            y: gsap.utils.random(-200, 200),
            opacity: gsap.utils.random(0.5, 1),
            scale: gsap.utils.random(0.7, 1.5),
            rotation: gsap.utils.random(-20, 20),
        });

        // Apply a gentle floating animation to each text element
        gsap.to(element, {
            x: `+=${gsap.utils.random(-20, 20)}`,
            y: `+=${gsap.utils.random(-20, 20)}`,
            rotation: `+=${gsap.utils.random(-10, 10)}`,
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    });

    // Apply hover effects on interactive elements
    document.querySelectorAll('a, button, .text-item').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
            cursorRing.classList.add('hovered');
        });
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered');
            cursorRing.classList.remove('hovered');
        });
    });

    // Cursor tracking movement
    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorRing.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });
});

 window.addEventListener('scroll', () => {
             const video = document.querySelector('.responsive-image');
             const scrollY = window.scrollY;
             video.style.transform = `translate(0, calc(-50% + ${scrollY * 0.5}px))`; // Adjust the multiplier for the scroll speed
         });

          // GSAP animation for text section
             gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

             // Animation function
             gsap.from('.fade-in-text', {
                 scrollTrigger: {
                     trigger: '.text-section',
                     start: 'top 80%', // Start when the top of the section is 80% down the viewport
                     end: 'top 30%', // End when the top of the section is 30% down the viewport
                     toggleActions: 'play none none reverse' // Play animation on enter, reverse on leave
                 },
                 opacity: 0, // Start with opacity 0
                 y: 50, // Start 50px lower
                 duration: 1, // Duration of animation
                 ease: 'power2.out' // Easing function
             });