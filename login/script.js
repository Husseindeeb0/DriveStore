document.addEventListener("DOMContentLoaded", () => {
  // Login Form Submission Interaction (Visual only)
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = loginForm.querySelector("button[type='submit']");
      const originalHTML = btn.innerHTML;

      btn.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Logging in...';
      btn.style.opacity = "0.8";

      setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Success';
        btn.style.backgroundColor = "#10b981"; // Green
        btn.style.boxShadow = "0 4px 20px rgba(16, 185, 129, 0.4)";

        setTimeout(() => {
          // Reset or redirect logic here
          window.location.href = "../Landing/index.html"; // Redirect example
        }, 1000);
      }, 1500);
    });
  }
});
