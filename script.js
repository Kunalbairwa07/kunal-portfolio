// script.js

// Scroll to top on reload
window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

// Smooth scroll for anchor links (future ready)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Future feature: Add animations, dark mode toggle, form submission etc.
console.log("Portfolio loaded successfully 🚀");
