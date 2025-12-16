const scriptTag = document.currentScript;
const scriptSrc = scriptTag.src;
const projectRoot = scriptSrc.substring(0, scriptSrc.lastIndexOf("/js/"));
const footerPath = `${projectRoot}/components/footer.html`;
const navbarPath = `${projectRoot}/components/navbar/index.html`;

document.addEventListener("DOMContentLoaded", function () {
  // Load Navbar
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  if (navbarPlaceholder) {
    fetch(navbarPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load navbar: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        navbarPlaceholder.innerHTML = data;

        // --- Navbar Shrink Logic (from original script.js) ---
        const header = document.querySelector(".header");
        if (header) {
          window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
              header.classList.add("header-shrink");
            } else {
              header.classList.remove("header-shrink");
            }
          });
        }
      })
      .catch((error) =>
        console.error("Error loading navbar component:", error)
      );
  }

  // Load Footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch(footerPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load footer: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        footerPlaceholder.innerHTML = data;
      })
      .catch((error) =>
        console.error("Error loading footer component:", error)
      );
  }
});
