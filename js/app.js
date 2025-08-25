// Menu hambúrguer
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const isExpanded = navLinks.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isExpanded);
});

// Tema claro/escuro com localStorage
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// Verifica preferência salva ou do sistema
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && prefersDark.matches)) {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// Teclas de atalho (peculiaridade 3)
document.addEventListener("keydown", (e) => {
  // Alt + M para focar no menu
  if (e.altKey && e.key === "m") {
    e.preventDefault();
    navLinks.querySelector("a").focus();
  }
  
  // Home para subir ao topo
  if (e.key === "Home") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // "/" para busca (será implementado nas outras páginas)
  if (e.key === "/" && e.target.tagName !== "INPUT") {
    e.preventDefault();
    const searchInput = document.querySelector(".search-input");
    if (searchInput) searchInput.focus();
  }
});
