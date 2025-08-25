// Menu hambúrguer
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const isExpanded = navLinks.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isExpanded);
});

// Gerenciamento de tema com animações e transições suaves
const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// Função para atualizar ícone com animação
function updateThemeIcon(isDark) {
  const currentIcon = themeToggle.textContent;
  const newIcon = isDark ? "☀️" : "🌙";
  
  if (currentIcon !== newIcon) {
    themeToggle.style.transform = "rotate(180deg)";
    setTimeout(() => {
      themeToggle.textContent = newIcon;
      themeToggle.style.transform = "rotate(0deg)";
    }, 150);
  }
}

// Função para definir tema
function setTheme(isDark) {
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  updateThemeIcon(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Inicialização do tema
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = prefersDark.matches;
const initialTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
setTheme(initialTheme);

// Eventos
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  setTheme(!isDark);
});

// Observar mudanças nas preferências do sistema
prefersDark.addEventListener("change", (e) => {
  if (!localStorage.getItem("theme")) {
    setTheme(e.matches);
  }
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
