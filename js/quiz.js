// Questões do quiz
const questions = [
  {
    question: "Qual é a função principal do HTML em desenvolvimento web?",
    options: [
      "Estilizar páginas",
      "Estruturar o conteúdo",
      "Criar animações",
      "Processar dados"
    ],
    correct: 1,
    explanation: "HTML (HyperText Markup Language) é a linguagem fundamental para estruturar o conteúdo de páginas web, definindo elementos como cabeçalhos, parágrafos, imagens e links."
  },
  {
    question: "Qual propriedade CSS é usada para mudar a cor do texto?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correct: 2,
    explanation: "A propriedade 'color' é usada para definir a cor do texto em CSS. É uma das propriedades mais básicas e essenciais para estilização."
  },
  {
    question: "Como se declara uma variável em JavaScript moderno?",
    options: [
      "var minhaVariavel = 10;",
      "let minhaVariavel = 10;",
      "const minhaVariavel = 10;",
      "variable minhaVariavel = 10;"
    ],
    correct: 1,
    explanation: "'let' é a forma moderna de declarar variáveis em JavaScript. Unlike 'var', tem escopo de bloco e é a escolha recomendada para variáveis que precisam ser reatribuídas."
  },
  {
    question: "Como tornar uma imagem responsiva em HTML?",
    options: [
      "Usando position: responsive",
      "Definindo width: 100% e height: auto",
      "Adicionando a classe .responsive",
      "Usando float: responsive"
    ],
    correct: 1,
    explanation: "Para fazer uma imagem responsiva, definimos width: 100% (para ocupar a largura do container) e height: auto (para manter a proporção)."
  },
  {
    question: "Como implementar um tema escuro de forma eficiente?",
    options: [
      "Duplicar todo CSS",
      "Usar variáveis CSS e prefers-color-scheme",
      "JavaScript para cada elemento",
      "Imagens diferentes para cada tema"
    ],
    correct: 1,
    explanation: "Variáveis CSS combinadas com a media query prefers-color-scheme permitem uma implementação eficiente e manutenível de temas escuros, respeitando as preferências do usuário."
  },
  {
    question: "Qual método é mais adequado para estilização em produção?",
    options: [
      "Estilos inline",
      "Arquivo CSS externo",
      "Tag style no HTML",
      "JavaScript"
    ],
    correct: 1,
    explanation: "Arquivos CSS externos são a melhor prática pois permitem melhor manutenção, cache e separação de responsabilidades."
  },
  {
    question: "O que é mobile-first design?",
    options: [
      "Desenvolver apenas para mobile",
      "Começar o design pela versão mobile",
      "Ignorar desktops",
      "Usar apenas apps"
    ],
    correct: 1,
    explanation: "Mobile-first significa começar o design e desenvolvimento pela versão mobile, progressivamente aprimorando para telas maiores."
  },
  {
    question: "Qual é a função do localStorage?",
    options: [
      "Armazenar dados no servidor",
      "Processar JavaScript",
      "Armazenar dados no navegador",
      "Comprimir imagens"
    ],
    correct: 2,
    explanation: "localStorage permite armazenar dados no navegador do usuário de forma persistente, mesmo após fechar a página."
  },
  {
    question: "O que é um design system?",
    options: [
      "Um software de design",
      "Uma coleção de componentes e guidelines",
      "Um tipo de CMS",
      "Um framework CSS"
    ],
    correct: 1,
    explanation: "Design system é uma coleção de componentes reutilizáveis, padrões e guidelines que mantém consistência no produto."
  },
  {
    question: "Qual é a diferença entre margin e padding em CSS?",
    options: [
      "São a mesma coisa",
      "Margin é espaço interno, padding é externo",
      "Margin é espaço externo, padding é interno",
      "Não há diferença visual"
    ],
    correct: 2,
    explanation: "Margin cria espaço fora do elemento (entre elementos), enquanto padding cria espaço dentro do elemento (entre a borda e o conteúdo)."
  }
];
      "Usar sempre PNG para melhor qualidade",
      "Implementar lazy loading e formatos modernos (WebP)",
      "Redimensionar no navegador",
      "Carregar todas as imagens no início"
    ],
    correct: 1,
    explanation: "Lazy loading combinado com formatos modernos como WebP, além de servir imagens otimizadas e dimensionadas corretamente, melhora significativamente a performance."
  },
  {
    question: "Qual é a melhor prática para gerenciar eventos em JavaScript moderno?",
    options: [
      "onclick no HTML",
      "addEventListener com função anônima",
      "addEventListener com delegação de eventos",
      "alert() para cada interação"
    ],
    correct: 2,
    explanation: "Delegação de eventos com addEventListener é mais eficiente e mantível, permitindo gerenciar eventos em elementos atuais e futuros de forma otimizada."
  },
  {
    question: "Como garantir a acessibilidade de um menu dropdown?",
    options: [
      "Apenas com CSS :hover",
      "Usar ARIA roles e suporte a teclado",
      "Mostrar tudo expandido",
      "Animations complexas"
    ],
    correct: 1,
    explanation: "ARIA roles combinados com suporte a navegação por teclado são essenciais para tornar menus dropdown acessíveis a todos os usuários, incluindo aqueles que usam leitores de tela."
  },
  {
    question: "Qual é a melhor estratégia para manter um código JavaScript organizado?",
    options: [
      "Todo código em um arquivo",
      "Módulos ES6 e componentes",
      "Variáveis globais",
      "Copiar e colar código repetido"
    ],
    correct: 1,
    explanation: "Usar módulos ES6 e componentização permite melhor organização, reusabilidade e manutenção do código, seguindo princípios de desenvolvimento moderno."
  },
  {
    question: "Como implementar um tema escuro de forma eficiente?",
    options: [
      "Duplicar todo CSS",
      "Usar variáveis CSS e prefers-color-scheme",
      "JavaScript para cada elemento",
      "Imagens diferentes para cada tema"
    ],
    correct: 1,
    explanation: "Variáveis CSS combinadas com a media query prefers-color-scheme permitem uma implementação eficiente e manutenível de temas escuros, respeitando as preferências do usuário."
  },
  {
    question: "Qual abordagem é mais segura para formulários?",
    options: [
      "Validação apenas no cliente",
      "Sem validação para melhor UX",
      "Validação no cliente e servidor",
      "Apenas CAPTCHA"
    ],
    correct: 2,
    explanation: "Validação tanto no cliente quanto no servidor é essencial: no cliente para feedback imediato ao usuário e no servidor para garantir a segurança dos dados."
  }
];
      "Uma linguagem de programação",
      "Um método de estilização",
      "Representação da estrutura do documento",
      "Um servidor web"
    ],
    correct: 2,
    explanation: "O DOM (Document Object Model) é uma interface de programação para documentos HTML/XML, representando-os como uma árvore de objetos."
  },
  {
    question: "Qual é a melhor prática para organização de CSS?",
    options: [
      "Todo CSS inline",
      "Metodologia BEM",
      "Sem classes",
      "Apenas IDs"
    ],
    correct: 1,
    explanation: "BEM (Block Element Modifier) é uma metodologia que ajuda a criar código CSS reutilizável e manutenível."
  },
  {
    question: "O que é um commit no Git?",
    options: [
      "Um erro no código",
      "Um registro de mudanças",
      "Uma branch nova",
      "Um arquivo deletado"
    ],
    correct: 1,
    explanation: "Um commit é um registro de mudanças no repositório, contendo um snapshot das alterações feitas nos arquivos."
  },
  {
    question: "Qual é o propósito do localStorage?",
    options: [
      "Processamento de dados",
      "Estilização",
      "Armazenamento no navegador",
      "Conexão com servidor"
    ],
    correct: 2,
    explanation: "localStorage permite armazenar dados no navegador do usuário de forma persistente, mesmo após fechar a página."
  },
  {
    question: "Qual propriedade CSS é usada para tornar um elemento flexível?",
    options: [
      "flex-box",
      "display: flex",
      "flexible",
      "flex-display"
    ],
    correct: 1,
    explanation: "display: flex é a propriedade que transforma um elemento em um container flex, permitindo layouts flexíveis."
  },
  {
    question: "O que é o DOM em JavaScript?",
    options: [
      "Uma linguagem de programação",
      "Um método de estilização",
      "A representação da estrutura do documento",
      "Um framework web"
    ],
    correct: 2,
    explanation: "DOM (Document Object Model) é a representação em árvore da estrutura do documento HTML, que pode ser manipulada via JavaScript."
  },
  {
    question: "Qual é a melhor prática para acessibilidade em imagens?",
    options: [
      "Usar apenas SVGs",
      "Adicionar atributo alt",
      "Remover todas as imagens",
      "Usar apenas PNGs"
    ],
    correct: 1,
    explanation: "O atributo alt fornece uma descrição textual da imagem, essencial para usuários de leitores de tela e SEO."
  },
  {
    question: "Qual método é mais adequado para estilização em produção?",
    options: [
      "Estilos inline",
      "Arquivo CSS externo",
      "Tag style no HTML",
      "JavaScript"
    ],
    correct: 1,
    explanation: "Arquivos CSS externos são a melhor prática pois permitem melhor manutenção, cache e separação de responsabilidades."
  },
  {
    question: "O que é mobile-first design?",
    options: [
      "Desenvolver apenas para mobile",
      "Começar o design pela versão mobile",
      "Ignorar desktops",
      "Usar apenas apps"
    ],
    correct: 1,
    explanation: "Mobile-first significa começar o design e desenvolvimento pela versão mobile, progressivamente aprimorando para telas maiores."
  },
  {
    question: "Qual é a função do localStorage?",
    options: [
      "Armazenar dados no servidor",
      "Processar JavaScript",
      "Armazenar dados no navegador",
      "Comprimir imagens"
    ],
    correct: 2,
    explanation: "localStorage permite armazenar dados no navegador do usuário de forma persistente, mesmo após fechar a página."
  },
  {
    question: "O que é um design system?",
    options: [
      "Um software de design",
      "Uma coleção de componentes e guidelines",
      "Um tipo de CMS",
      "Um framework CSS"
    ],
    correct: 1,
    explanation: "Design system é uma coleção de componentes reutilizáveis, padrões e guidelines que mantém consistência no produto."
  }
];

// Estado do quiz
let currentQuestion = 0;
let score = 0;
let answers = [];
let highScore = localStorage.getItem('quizHighScore') || 0;

// Elementos DOM
const quizContent = document.getElementById('quiz-content');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const finalScoreSpan = document.getElementById('final-score');
const totalQuestionsResult = document.getElementById('total-questions-result');
const explanationsDiv = document.getElementById('explanations');
const restartButton = document.getElementById('restart-btn');
const highScoreDisplay = document.getElementById('high-score');

// Inicialização
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  answers = [];
  highScoreDisplay.textContent = highScore;
  showQuestion();
  quizContent.classList.remove('hidden');
  resultsScreen.classList.add('hidden');
}

// Mostrar questão atual
function showQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  
  optionsContainer.innerHTML = question.options
    .map((option, index) => `
      <button class="option" data-index="${index}">
        ${option}
      </button>
    `).join('');

  currentQuestionSpan.textContent = currentQuestion + 1;
  totalQuestionsSpan.textContent = questions.length;
  
  nextButton.disabled = true;
  
  // Event listeners para opções
  document.querySelectorAll('.option').forEach(button => {
    button.addEventListener('click', selectOption);
  });
}

// Selecionar opção
function selectOption(e) {
  const selectedButton = e.target;
  const selectedAnswer = parseInt(selectedButton.dataset.index);
  
  // Remover seleção anterior
  document.querySelectorAll('.option').forEach(button => {
    button.classList.remove('selected', 'correct', 'wrong');
  });
  
  // Marcar seleção atual
  selectedButton.classList.add('selected');
  
  // Mostrar resposta correta
  const question = questions[currentQuestion];
  document.querySelectorAll('.option').forEach((button, index) => {
    if (index === question.correct) {
      button.classList.add('correct');
    } else if (index === selectedAnswer) {
      button.classList.add('wrong');
    }
  });
  
  // Salvar resposta
  answers[currentQuestion] = selectedAnswer;
  if (selectedAnswer === question.correct) {
    score++;
  }
  
  nextButton.disabled = false;
}

// Próxima questão ou finalizar
nextButton.addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResults();
  }
});

// Mostrar resultados
function showResults() {
  quizContent.classList.add('hidden');
  resultsScreen.classList.remove('hidden');
  
  finalScoreSpan.textContent = score;
  totalQuestionsResult.textContent = questions.length;
  
  // Atualizar high score
  if (score > highScore) {
    highScore = score;
    localStorage.setItem('quizHighScore', highScore);
    highScoreDisplay.textContent = highScore;
  }
  
  // Mostrar explicações
  explanationsDiv.innerHTML = questions
    .map((q, index) => `
      <div class="explanation ${answers[index] === q.correct ? 'correct' : 'wrong'}">
        <p><strong>Questão ${index + 1}:</strong> ${q.question}</p>
        <p><strong>Sua resposta:</strong> ${q.options[answers[index]]}</p>
        <p><strong>Resposta correta:</strong> ${q.options[q.correct]}</p>
        <p><strong>Explicação:</strong> ${q.explanation}</p>
      </div>
    `)
    .join('');
}

// Reiniciar quiz
restartButton.addEventListener('click', initQuiz);

// Iniciar quiz
initQuiz();
