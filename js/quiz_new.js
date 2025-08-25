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

// Estado do quiz
let currentQuestion = 0;
let score = 0;
let answers = new Array(questions.length).fill(null);
const highScore = parseInt(localStorage.getItem('quizHighScore')) || 0;

// Elementos DOM
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultsDiv = document.getElementById('results');
const scoreSpan = document.getElementById('score');
const totalQuestionsSpan = document.getElementById('total-questions');
const explanationsDiv = document.getElementById('explanations');
const retryBtn = document.getElementById('retry-btn');
const highScoreDiv = document.getElementById('high-score');

// Inicialização
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  answers = new Array(questions.length).fill(null);
  showQuestion();
  updateHighScore();
  document.getElementById('quiz').style.display = 'block';
  resultsDiv.style.display = 'none';
}

// Mostrar questão atual
function showQuestion() {
  const question = questions[currentQuestion];
  questionContainer.innerHTML = `
    <h3>Questão ${currentQuestion + 1} de ${questions.length}</h3>
    <p class="question">${question.question}</p>
    <div class="options">
      ${question.options.map((option, index) => `
        <label class="option${answers[currentQuestion] === index ? ' selected' : ''}">
          <input type="radio" name="quiz" value="${index}" 
                 ${answers[currentQuestion] === index ? 'checked' : ''}>
          ${option}
        </label>
      `).join('')}
    </div>
  `;

  // Atualizar estado dos botões
  prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline-block';
  nextBtn.style.display = currentQuestion === questions.length - 1 ? 'none' : 'inline-block';
  submitBtn.style.display = currentQuestion === questions.length - 1 ? 'inline-block' : 'none';

  // Adicionar event listeners para as opções
  const options = questionContainer.querySelectorAll('input[type="radio"]');
  options.forEach(option => {
    option.addEventListener('change', () => {
      answers[currentQuestion] = parseInt(option.value);
      showQuestion();
    });
  });
}

// Calcular e mostrar resultados
function showResults() {
  score = answers.reduce((total, answer, index) => {
    return total + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  document.getElementById('quiz').style.display = 'none';
  resultsDiv.style.display = 'block';

  scoreSpan.textContent = score;
  totalQuestionsSpan.textContent = questions.length;

  // Mostrar explicações
  explanationsDiv.innerHTML = questions.map((q, index) => `
    <div class="explanation ${answers[index] === q.correct ? 'correct' : 'incorrect'}">
      <p><strong>Questão ${index + 1}:</strong> ${q.question}</p>
      <p><strong>Sua resposta:</strong> ${q.options[answers[index]]}</p>
      <p><strong>Resposta correta:</strong> ${q.options[q.correct]}</p>
      <p><em>${q.explanation}</em></p>
    </div>
  `).join('');

  // Atualizar melhor pontuação
  if (score > highScore) {
    localStorage.setItem('quizHighScore', score);
    updateHighScore();
  }
}

// Atualizar exibição da melhor pontuação
function updateHighScore() {
  const savedHighScore = localStorage.getItem('quizHighScore') || 0;
  highScoreDiv.innerHTML = `<p>Melhor pontuação: ${savedHighScore} de ${questions.length}</p>`;
}

// Event Listeners
nextBtn.addEventListener('click', () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

submitBtn.addEventListener('click', showResults);
retryBtn.addEventListener('click', initQuiz);

// Iniciar o quiz
initQuiz();
