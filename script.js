document.addEventListener("DOMContentLoaded", () => {
  // 1. Background Slideshow Logic
  const slides = document.querySelectorAll(".hero-bg-slide");
  let currentSlide = 0;
  const slideInterval = 5000; // Change slide every 5 seconds

  function nextSlide() {
    if (slides.length === 0) return;
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
  }

  // 2. Lead Form Logic
  const leadForm = document.getElementById("leadForm");
  const formSuccess = document.getElementById("formSuccess");

  if (leadForm) {
    leadForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Simulate API call/processing
      const btn = leadForm.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

      setTimeout(() => {
        // Show Success
        if (formSuccess) formSuccess.classList.add("visible");
        leadForm.reset();
        btn.innerHTML = originalText;
      }, 1500);
    });
  }

  // Global function to reset view (attached to window for inline onclick)
  window.resetFormView = function () {
    if (formSuccess) {
      formSuccess.classList.remove("visible");
    }
  };

  // 3. Scroll Animation Logic (IntersectionObserver)
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Offset a bit so it triggers before bottom
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // Remove the class when it leaves the viewport to allow re-animation
        entry.target.classList.remove("visible");
      }
    });
  }, observerOptions);

  const scrollElements = document.querySelectorAll(".scroll-animate");
  scrollElements.forEach((el) => observer.observe(el));
});
