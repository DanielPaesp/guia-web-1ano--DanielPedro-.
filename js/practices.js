// Gerenciamento do accordion
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    const content = accordion.nextElementSibling;
    const icon = accordion.querySelector('.accordion-icon');
    
    // Toggle aria-expanded
    const isExpanded = accordion.getAttribute('aria-expanded') === 'true';
    accordion.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle content visibility
    content.style.maxHeight = isExpanded ? null : `${content.scrollHeight}px`;
    
    // Update icon
    icon.textContent = isExpanded ? '+' : '-';
  });
});

// Gerenciamento do checklist
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressBar = document.getElementById('progress-bar');
const progressText = document.querySelector('.progress-text');

// Carregar estado salvo
function loadSavedState() {
  const savedState = localStorage.getItem('practiceChecklist');
  if (savedState) {
    const checkedItems = JSON.parse(savedState);
    checkboxes.forEach(checkbox => {
      checkbox.checked = checkedItems.includes(checkbox.name);
    });
    updateProgress();
  }
}

// Atualizar progresso
function updateProgress() {
  const total = checkboxes.length;
  const checked = Array.from(checkboxes).filter(cb => cb.checked).length;
  const percentage = Math.round((checked / total) * 100);
  
  progressBar.style.width = `${percentage}%`;
  progressText.textContent = `${percentage}% completo`;
  
  // Salvar estado
  const checkedItems = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.name);
  localStorage.setItem('practiceChecklist', JSON.stringify(checkedItems));
}

// Event listeners
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateProgress);
});

// Inicialização
document.addEventListener('DOMContentLoaded', loadSavedState);
