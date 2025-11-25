// year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
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

// header scroll effect + reveal
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (window.scrollY > 10) header.classList.add("scrolled");
  else header.classList.remove("scrolled");

  document.querySelectorAll(".reveal").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const trigger = window.innerHeight * 0.85;
    if (top < trigger) el.classList.add("active");
  });
});
document.querySelectorAll(".reveal").forEach((el) => {
  const top = el.getBoundingClientRect().top;
  if (top < window.innerHeight * 0.85) el.classList.add("active");
});

// mobile nav
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
hamburger &&
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu && navMenu.classList.toggle("active");
  });

// typing effect (hero)
const words = ["Legal Researcher.", "Law Enthusiast.", "Content Writer."];
let wIdx = 0,
  cIdx = 0,
  deleting = false;
function typeEffect() {
  const el = document.getElementById("typed");
  if (!el) return;
  const current = words[wIdx];
  el.textContent = deleting
    ? current.substring(0, cIdx--)
    : current.substring(0, cIdx++);
  if (!deleting && cIdx === current.length) {
    deleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }
  if (deleting && cIdx === 0) {
    deleting = false;
    wIdx = (wIdx + 1) % words.length;
  }
  setTimeout(typeEffect, deleting ? 50 : 110);
}
setTimeout(typeEffect, 400);

// theme toggle
const themeToggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "dark")
  document.body.classList.add("dark-mode");
themeToggle &&
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

// Projects filter
document.addEventListener("DOMContentLoaded", () => {
  const pills = document.querySelectorAll(".pill");
  const cards = document.querySelectorAll(".project-card");
  pills.forEach((p) =>
    p.addEventListener("click", () => {
      pills.forEach((x) => x.classList.remove("active"));
      p.classList.add("active");
      const id = p.id.replace("filter", "").toLowerCase();
      cards.forEach((c) => {
        if (p.id === "filterAll") c.style.display = "flex";
        else if (c.dataset.type && c.dataset.type.includes(id))
          c.style.display = "flex";
        else c.style.display = "none";
      });
    })
  );

  // preview modal simple (for images & iframe)
  const previewModal = document.getElementById("previewModal");
  const previewContent = document.getElementById("previewContent");
  const previewClose = document.getElementById("previewClose");

  document.querySelectorAll(".project-links .link").forEach((link) => {
    // allow normal external link behavior; preview handled via separate buttons if needed
  });

  // open images in modal when user clicks thumbnail
  document.querySelectorAll(".project-thumb").forEach((img) => {
    img.addEventListener("click", () => {
      previewContent.innerHTML = `<img src="${img.src}" style="width:100%;height:100%;object-fit:contain" />`;
      previewModal.classList.add("open");
      previewModal.setAttribute("aria-hidden", "false");
    });
  });

  previewClose &&
    previewClose.addEventListener("click", () => {
      previewModal.classList.remove("open");
      previewModal.setAttribute("aria-hidden", "true");
      previewContent.innerHTML = "";
    });
  previewModal &&
    previewModal.addEventListener("click", (e) => {
      if (e.target === previewModal) {
        previewModal.classList.remove("open");
        previewContent.innerHTML = "";
      }
    });
});

// MULTIPLE SLIDERS — FIXED VERSION
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".slider-container").forEach((container) => {
    const slides = Array.from(container.querySelectorAll(".slide"));
    const prev = container.querySelector(".prev");
    const next = container.querySelector(".next");

    let index = 0;

    function showSlide(i) {
      slides.forEach((slide, idx) => {
        slide.classList.toggle("active", idx === i);
      });
    }

    if (prev) {
      prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
      });
    }

    showSlide(index);
  });
});
