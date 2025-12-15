document.addEventListener("DOMContentLoaded", () => {
  // Signup Form Submission Interaction (Visual only)
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = signupForm.querySelector("button[type='submit']");
      const originalHTML = btn.innerHTML;

      btn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';
      btn.style.opacity = "0.8";

      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Welcome!';
        btn.style.backgroundColor = "#10b981"; // Green
        btn.style.boxShadow = "0 4px 20px rgba(16, 185, 129, 0.4)";

        setTimeout(() => {
          // Reset or redirect logic here
          window.location.href = "../Landing/index.html"; // Redirect example
        }, 1000);
      }, 2000);
    });
  }
});
