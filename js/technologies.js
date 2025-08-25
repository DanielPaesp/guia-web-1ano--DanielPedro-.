// Dados das tecnologias
const technologies = [
  {
    name: "React",
    category: "frontend",
    level: "intermediário",
    description: "Biblioteca JavaScript para construção de interfaces",
    pros: ["Componentização", "Grande ecossistema", "Ótima performance"],
    cons: ["Curva de aprendizado", "Muitas formas de fazer a mesma coisa"],
    whenToUse: [
      "Aplicações de médio/grande porte",
      "Times com experiência em JavaScript",
      "Projetos que precisam de SPA"
    ],
    whenToAvoid: "Projetos pequenos ou sites estáticos simples",
    officialLink: "https://react.dev"
  },
  {
    name: "Node.js",
    category: "backend",
    level: "intermediário",
    description: "Runtime JavaScript para backend",
    pros: ["Mesma linguagem no front e back", "NPM (grande ecossistema)", "Ótimo para I/O"],
    cons: ["Não ideal para CPU intensivo", "Callback hell (se mal estruturado)"],
    whenToUse: [
      "APIs REST",
      "Aplicações em tempo real",
      "Microserviços"
    ],
    whenToAvoid: "Processamento pesado ou cálculos complexos",
    officialLink: "https://nodejs.org"
  },
  {
    name: "PostgreSQL",
    category: "database",
    level: "avançado",
    description: "Banco de dados relacional robusto",
    pros: ["Confiável", "Rico em recursos", "Extensível"],
    cons: ["Configuração inicial complexa", "Consumo de recursos"],
    whenToUse: [
      "Dados estruturados",
      "Transações complexas",
      "Escalabilidade vertical"
    ],
    whenToAvoid: "Dados muito dinâmicos ou sem schema fixo",
    officialLink: "https://www.postgresql.org"
  },
  {
    name: "Docker",
    category: "devops",
    level: "intermediário",
    description: "Plataforma de containerização",
    pros: ["Ambientes isolados", "Fácil deploy", "Reprodutível"],
    cons: ["Overhead de recursos", "Complexidade inicial"],
    whenToUse: [
      "Múltiplos ambientes",
      "Microsserviços",
      "CI/CD"
    ],
    whenToAvoid: "Aplicações muito pequenas ou monolíticas simples",
    officialLink: "https://www.docker.com"
  },
  {
    name: "Jest",
    category: "testing",
    level: "intermediário",
    description: "Framework de testes JavaScript",
    pros: ["Fácil de usar", "Snapshots", "Mocking built-in"],
    cons: ["Lento em projetos grandes", "Setup complexo para alguns casos"],
    whenToUse: [
      "Testes unitários JS/TS",
      "Projetos React",
      "TDD"
    ],
    whenToAvoid: "Testes E2E (use Cypress/Playwright)",
    officialLink: "https://jestjs.io"
  }
];

// Estado da aplicação
let currentFilter = localStorage.getItem('techFilter') || 'all';
let searchTerm = '';

// Elementos DOM
const techGrid = document.getElementById('tech-grid');
const searchInput = document.querySelector('.search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('tech-modal');
const modalClose = document.querySelector('.modal-close');

// Funções auxiliares
function createBadge(level) {
  const colors = {
    básico: 'var(--cor-secundaria)',
    intermediário: 'var(--cor-primaria)',
    avançado: '#DC2626'
  };
  
  return `<span class="badge" style="background-color: ${colors[level]}">${level}</span>`;
}

function createTechCard(tech) {
  return `
    <article class="tech-card" data-category="${tech.category}">
      <header>
        <h3>${tech.name}</h3>
        ${createBadge(tech.level)}
      </header>
      <p>${tech.description}</p>
      <div class="tech-pros-cons">
        <div class="pros">
          <h4>Prós</h4>
          <ul>
            ${tech.pros.map(pro => `<li>${pro}</li>`).join('')}
          </ul>
        </div>
        <div class="cons">
          <h4>Contras</h4>
          <ul>
            ${tech.cons.map(con => `<li>${con}</li>`).join('')}
          </ul>
        </div>
      </div>
      <button class="btn-details" onclick="showDetails('${tech.name}')">
        Ver detalhes
      </button>
    </article>
  `;
}

function showDetails(techName) {
  const tech = technologies.find(t => t.name === techName);
  if (!tech) return;

  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');

  modalTitle.textContent = tech.name;
  modalBody.innerHTML = `
    <div class="modal-section">
      <h3>Quando escolher ${tech.name}?</h3>
      <ul>
        ${tech.whenToUse.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-section">
      <h3>Quando evitar</h3>
      <p>${tech.whenToAvoid}</p>
    </div>
    <a href="${tech.officialLink}" target="_blank" rel="noopener noreferrer" class="btn">
      Documentação oficial
    </a>
  `;

  modal.setAttribute('aria-hidden', 'false');
  modal.classList.add('active');
}

// Filtrar e renderizar tecnologias
function filterTechnologies() {
  const filtered = technologies.filter(tech => {
    const matchesFilter = currentFilter === 'all' || tech.category === currentFilter;
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tech.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  techGrid.innerHTML = filtered.map(createTechCard).join('');
}

// Event Listeners
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.category;
    localStorage.setItem('techFilter', currentFilter);
    
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    filterTechnologies();
  });
});

searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  filterTechnologies();
});

modalClose.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
  modal.classList.remove('active');
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('active');
  }
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Aplicar filtro salvo
  const savedFilter = localStorage.getItem('techFilter');
  if (savedFilter) {
    currentFilter = savedFilter;
    filterButtons.forEach(btn => {
      if (btn.dataset.category === savedFilter) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  filterTechnologies();
});
