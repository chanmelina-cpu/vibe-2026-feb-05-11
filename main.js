document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers-container');

    // Theme switcher
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Toto number generation
    const generateTotoNumbers = () => {
        numbersContainer.innerHTML = '';
        const numbers = [];
        while (numbers.length < 7) {
            const randomNumber = Math.floor(Math.random() * 49) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }

        numbers.forEach((number, index) => {
            setTimeout(() => {
                const numberEl = document.createElement('div');
                numberEl.classList.add('number');
                if (index === 6) {
                    numberEl.classList.add('additional');
                }
                numberEl.textContent = number;
                numbersContainer.appendChild(numberEl);
            }, index * 200);
        });
    };

    generateBtn.addEventListener('click', generateTotoNumbers);

    // Initial generation
    generateTotoNumbers();
});
