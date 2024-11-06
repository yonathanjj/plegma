    // GSAP animation for the About section
    gsap.from(".section-title", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".section-paragraph", {
        duration: 1,
        delay: 0.2,
        y: 30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".goals-title", {
        duration: 1,
        delay: 0.4,
        y: -30,
        opacity: 0,
        ease: "power2.out"
    });

    gsap.from(".goals-list li", {
        duration: 0.5,
        delay: 0.6,
        y: 20,
        opacity: 0,
        ease: "power2.out",
        stagger: 0.1 // Animate each list item with a slight delay
    });


document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".text-item");
    const cursor = document.querySelector('.cursor');
    const cursorRing = document.querySelector('.cursor-ring');

    // Verify that cursor elements are present in the DOM
    if (!cursor || !cursorRing) {
        console.error("Cursor elements not found in the DOM.");
        return;
    }

    // Cursor tracking movement
        document.addEventListener('mousemove', e => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorRing.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
        });
    });

