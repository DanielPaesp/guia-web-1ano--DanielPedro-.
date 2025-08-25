// Questões do quiz
const questions = [
  {
    question: "Qual é a função principal do HTML em um site?",
    options: [
      "Estilizar a página",
      "Estruturar o conteúdo",
      "Adicionar interatividade",
      "Processar dados"
    ],
    correct: 1,
    explanation: "HTML (HyperText Markup Language) é responsável por estruturar o conteúdo da página, definindo elementos como cabeçalhos, parágrafos, listas e links."
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
