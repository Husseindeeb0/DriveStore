document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    const scrollThreshold = 20; // Pixels to scroll before triggering change

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 1. Check Scroll Direction
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling Down (and past the threshold)
            header.classList.add('header-shrink');
        } else if (scrollTop < lastScrollTop) {
            // Scrolling Up
            header.classList.remove('header-shrink');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or browser compatibility
    }, false);
});