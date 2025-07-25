// =======================
// Theme Toggle (Light/Dark)
// =======================
const themeToggle = document.getElementById('theme-toggle');
if (window.localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
}
themeToggle && themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')) {
        window.localStorage.setItem('theme', 'light');
    } else {
        window.localStorage.removeItem('theme');
    }
});

// =======================
// Smooth Scroll for Navbar
// =======================
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    if(this.getAttribute("href").startsWith("#")){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
      });
      // Update active link styling
      document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// =======================
// Typewriter Effect (Hero)
// =======================
const typewriter = document.querySelector('.typewriter');
const textPhrases = [
  "Hi, I'm <span>Kunal Bairwa</span>",
  "AI & Data Science Student 💡",
  "Problem Solver & Coder 🖥️",
  "Open to Collaborate 🤝"
];
let tIndex = 0;
function changeTypewriter() {
    if(typewriter) {
        typewriter.innerHTML = textPhrases[tIndex];
        tIndex = (tIndex + 1) % textPhrases.length;
    }
}
setInterval(changeTypewriter, 2300);

// =======================
// Contact Form Alert
// =======================
document.querySelector('.contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

// =======================
// Reveal on Scroll Animation
// =======================
const sections = document.querySelectorAll('section');
function revealSections() {
  const trigger = window.innerHeight * 0.82;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add('visible');
    else sec.classList.remove('visible');
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// =======================
// Scroll to top on reload
// =======================
window.onbeforeunload = () => { window.scrollTo(0, 0); };
