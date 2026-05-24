document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // 1. SMOOTH SCROLL SYSTEM
  // =========================

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

    });
  });

  // =========================
  // 2. ACTIVE NAVIGATION AUTO DETECT
  // =========================

  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll(".nav-right a");

  navLinks.forEach(link => {

    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }

  });

  // =========================
  // 3. SCROLL REVEAL SIMPLE SYSTEM
  // =========================

  const revealElements = document.querySelectorAll(".card, .hero-left, .hero-right");

  const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {

      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "0.6s ease";
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
      }

    });

  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // =========================
  // 4. NAVBAR SCROLL EFFECT
  // =========================

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.32)";
      navbar.style.background = "rgba(255, 255, 255, 0.37)";
    } else {
      navbar.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.4)";
      navbar.style.background = "rgba(255, 255, 255, 0.43)";
    }

  });

  // =========================
  // 5. BUTTON MICRO INTERACTION
  // =========================

  const buttons = document.querySelectorAll(".btn, .btn-outline");

  buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-2px)";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(0)";
    });

  });

  // =========================
  // 6. IMAGE LAZY EFFECT (PROFILE / GALLERY)
  // =========================

  const images = document.querySelectorAll("img");

  images.forEach(img => {

    img.style.transition = "0.5s ease";

    img.addEventListener("load", () => {
      img.style.opacity = "1";
    });

  });

  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    if (html.getAttribute('data-theme') === 'dark') {
      html.removeAttribute('data-theme');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    }
  });
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }


