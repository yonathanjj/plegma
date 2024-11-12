  // Wait until the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Target all paragraphs in the about-section
    const paragraphs = document.querySelectorAll('.section-paragraph');

    // Loop through each paragraph and add scroll-triggered animation
    paragraphs.forEach(paragraph => {
      gsap.fromTo(paragraph, {
        opacity: 0, // Start with hidden text
        y: 50 // Start with the text below the screen
      }, {
        opacity: 1, // Fade to full opacity
        y: 0, // Move the text to its normal position
        scrollTrigger: {
          trigger: paragraph, // Trigger the animation when the paragraph is scrolled into view
          start: "top 80%", // Start the animation when the top of the paragraph is at 80% of the viewport
          end: "top 30%", // End the animation when the top of the paragraph reaches 30% of the viewport
          scrub: true, // Smooth animation linked to scroll
          markers: false, // Set to true if you want to see start and end markers
        },
        duration: 1, // Duration of the animation
        ease: "power2.out" // Easing for smooth animation
      });
    });
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

document.addEventListener("DOMContentLoaded", function() {
    const services = document.querySelectorAll('.service');

    services.forEach(service => {
        const imageUrl = service.getAttribute('data-image');
        const imageElement = document.createElement('div');
        imageElement.classList.add('service-image');
        imageElement.style.backgroundImage = `url(${imageUrl})`;

        service.appendChild(imageElement);

        service.addEventListener('mouseenter', () => {
            imageElement.style.opacity = 1;
            imageElement.style.top = '0';
        });

        service.addEventListener('mouseleave', () => {
            imageElement.style.opacity = 0;
            imageElement.style.top = '-130%';
        });
    });
});


// Add scroll effect when scrolled into view
document.addEventListener("scroll", () => {
  const processesSection = document.querySelector('.processes-section');
  const processes = document.querySelectorAll('.process');

  const sectionPosition = processesSection.getBoundingClientRect().top;
  const viewHeight = window.innerHeight;

  if (sectionPosition <= viewHeight * 0.75) {
    processesSection.classList.add('scrolled');
  }

  processes.forEach((process, index) => {
    const processPosition = process.getBoundingClientRect().top;
    if (processPosition <= viewHeight) {
      process.style.opacity = 1;
      process.style.transform = 'translateX(0)';
    }
  });
});



  document.querySelectorAll('.team-member').forEach(member => {
      member.addEventListener('mouseenter', () => {
        gsap.to(member, { scale: 1.1, duration: 0.3 });
      });
      member.addEventListener('mouseleave', () => {
        gsap.to(member, { scale: 1, duration: 0.3 });
      });
    });
