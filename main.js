document.addEventListener('DOMContentLoaded', () => {
  const numbersContainer = document.getElementById('numbers-container');
  const generateBtn = document.getElementById('generate-btn');

  function generateTotoNumbers() {
    numbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 49) + 1);
    }

    numbers.forEach(number => {
      const numberDiv = document.createElement('div');
      numberDiv.classList.add('number');
      numberDiv.textContent = number;
      numbersContainer.appendChild(numberDiv);
    });
  }

  generateBtn.addEventListener('click', generateTotoNumbers);

  // Initial generation
  generateTotoNumbers();
});