// tahun footer otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// === FINAL REVEAL ANIMATION (ACTIVE ONLY) ===
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach((el, idx) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("active");
      el.style.transitionDelay = idx * 0.15 + "s";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// === Soft Parallax Hero ===
window.addEventListener("scroll", function () {
  const hero = document.querySelector(".hero");
  const container = hero.querySelector(".container");

  let scrolled = window.scrollY * 0.1;
  container.style.transform = `translateY(${scrolled}px)`;
});

// Typing Text
const words = ["Legal Researcher.", "Law Enthusiast.", "Content Writer."];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const current = words[wordIndex];
  const typedElement = document.getElementById("typed");

  if (isDeleting) {
    typedElement.textContent = current.substring(0, charIndex--);
  } else {
    typedElement.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();

// =====================
// Dark Mode Toggle
// =====================
const themeToggle = document.getElementById("themeToggle");

// Load mode from storage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

// Toggle on click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save to localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
