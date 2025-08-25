// Dados do fluxo de trabalho
const workflowSteps = {
  discovery: {
    title: "Descoberta",
    deliverables: [
      "Análise de mercado",
      "Pesquisa de usuários",
      "Definição do problema"
    ],
    risks: [
      "Entendimento superficial",
      "Falta de validação com usuários"
    ]
  },
  requirements: {
    title: "Requisitos",
    deliverables: [
      "Documento de requisitos",
      "User stories",
      "Critérios de aceitação"
    ],
    risks: [
      "Escopo mal definido",
      "Requisitos ambíguos"
    ]
  },
  prototype: {
    title: "Protótipo",
    deliverables: [
      "Wireframes",
      "Fluxos de usuário",
      "Protótipo navegável"
    ],
    risks: [
      "Falta de feedback inicial",
      "Complexidade desnecessária"
    ]
  },
  design: {
    title: "Design",
    deliverables: [
      "Style guide",
      "UI Components",
      "Design system"
    ],
    risks: [
      "Inconsistência visual",
      "Problemas de acessibilidade"
    ]
  },
  implementation: {
    title: "Implementação",
    deliverables: [
      "Código fonte",
      "Documentação técnica",
      "Testes unitários"
    ],
    risks: [
      "Débito técnico",
      "Problemas de integração"
    ]
  },
  testing: {
    title: "Testes",
    deliverables: [
      "Relatório de bugs",
      "Testes de usabilidade",
      "Testes de performance"
    ],
    risks: [
      "Cobertura insuficiente",
      "Bugs em produção"
    ]
  },
  deployment: {
    title: "Deploy",
    deliverables: [
      "Build de produção",
      "Documentação de deploy",
      "Plano de rollback"
    ],
    risks: [
      "Problemas de configuração",
      "Downtime não planejado"
    ]
  },
  maintenance: {
    title: "Manutenção",
    deliverables: [
      "Logs de monitoramento",
      "Updates de segurança",
      "Backups"
    ],
    risks: [
      "Degradação de performance",
      "Custos crescentes"
    ]
  }
};

// Elementos DOM
const tooltip = document.getElementById('tooltip');
const timelineItems = document.querySelectorAll('.timeline-item');

// Funções do tooltip
function showTooltip(step, event) {
  const stepData = workflowSteps[step];
  if (!stepData) return;

  const tooltipTitle = tooltip.querySelector('.tooltip-title');
  const deliverablesList = tooltip.querySelector('.tooltip-deliverables');
  const risksList = tooltip.querySelector('.tooltip-risks');

  tooltipTitle.textContent = stepData.title;
  
  deliverablesList.innerHTML = stepData.deliverables
    .map(item => `<li>${item}</li>`)
    .join('');
  
  risksList.innerHTML = stepData.risks
    .map(item => `<li>${item}</li>`)
    .join('');

  // Posicionar tooltip
  const rect = event.target.getBoundingClientRect();
  tooltip.style.left = `${rect.left + window.scrollX}px`;
  tooltip.style.top = `${rect.bottom + window.scrollY + 10}px`;
  
  tooltip.classList.add('active');
}

function hideTooltip() {
  tooltip.classList.remove('active');
}

// Event listeners
timelineItems.forEach(item => {
  item.addEventListener('click', (e) => {
    const step = item.dataset.step;
    showTooltip(step, e);
  });

  item.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const step = item.dataset.step;
      showTooltip(step, e);
    }
  });
});

// Fechar tooltip ao clicar fora
document.addEventListener('click', (e) => {
  if (!e.target.closest('.timeline-item') && !e.target.closest('.tooltip')) {
    hideTooltip();
  }
});

// Fechar tooltip com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hideTooltip();
  }
});
