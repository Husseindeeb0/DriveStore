// trial.js

// --- 1. Zoom/Hover Effect Logic ---
function zoomElement(element, shouldZoom) {
    const scaleValue = shouldZoom ? 'scale(1.04)' : 'scale(1)';
    
    element.style.transform = scaleValue;
    
    // Define shadow styles using CSS variables for theme consistency
    const baseShadow = '0 10px 30px rgba(0, 0, 0, 0.8), 0 0 5px rgba(59, 130, 246, 0.1)'; 
    const hoverShadow = '0 15px 30px rgba(0, 0, 0, 0.9), 0 0 25px var(--accent-color)';
    
    if (element.classList.contains('carousel-container') || element.classList.contains('section-to-animate')) {
         element.style.boxShadow = shouldZoom 
            ? hoverShadow 
            : baseShadow; 
    } else {
         element.style.boxShadow = shouldZoom 
            ? hoverShadow 
            : 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial visibility for header elements
    const logo = document.querySelector('.logo');
    const backLink = document.querySelector('.back-link');

    if (logo) logo.classList.add('is-visible');
    if (backLink) backLink.classList.add('is-visible');
    
    // --- 2. Seamless Carousel Autoplay Logic (FIXED) ---
    const inner = document.querySelector('.carousel-inner');
    
    if (inner) {
        // We know we have 4 total slides (3 original + 1 clone) and each is 25% wide.
        const totalOriginalSlides = document.querySelectorAll('.slide:not(.clone-slide)').length; 
        const shiftPercentage = 25; // 100% / 4 slides

        const shiftInterval = 3000;      
        const transitionDuration = 500; 
        
        let currentSlide = 0;

        function nextSlide() {
            currentSlide++;
            
            // Calculate the exact offset percentage
            const offset = currentSlide * -shiftPercentage; 
            inner.style.transform = `translateX(${offset}%)`;

            // If we have moved to the cloned slide (index 3)
            if (currentSlide === totalOriginalSlides) { 
                
                // Wait for the animated transition (0.5s) to finish
                setTimeout(() => {
                    // A. INSTANT JUMP: Disable transition and reset position to 0
                    inner.style.transition = 'none';
                    currentSlide = 0;
                    inner.style.transform = 'translateX(0)';

                    // B. RE-ENABLE: Re-apply transition for the next slide cycle
                    setTimeout(() => {
                        inner.style.transition = `transform ${transitionDuration / 1000}s ease-in-out`;
                    }, 50); // Short delay to ensure browser registers the 'none' transition

                }, transitionDuration); 
            }
        }
        
        // Start the automatic shifting loop
        setInterval(nextSlide, shiftInterval);
    }


    // --- 3. Continuous Fade In/Out Logic ---
    const faders = document.querySelectorAll('.fade-item');

    const appearOptions = { 
        threshold: 0.1, 
        rootMargin: "0px 0px -100px 0px" 
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});