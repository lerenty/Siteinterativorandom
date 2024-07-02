document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.name-button');
    const content = document.getElementById('content');
    const info = document.getElementById('info');
    const wordRoulette = document.getElementById('word-roulette');
    const spinAgainButton = document.getElementById('spin-again');
    const backButton = document.createElement('button');
    
    backButton.textContent = 'Voltar';
    backButton.classList.add('back-button');
    backButton.style.position = 'absolute';
    backButton.style.top = '10px';
    backButton.style.left = '10px';
    backButton.style.display = 'none';
    document.body.appendChild(backButton);

    backButton.addEventListener('click', function() {
        content.classList.add('hidden');
        buttons.forEach(btn => btn.classList.remove('hidden'));
        backButton.style.display = 'none';
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            content.classList.remove('hidden');
            buttons.forEach(btn => btn.classList.add('hidden'));

            info.textContent = `${button.textContent} é...`;

            // Simulação da roleta de palavras
            const words = ['Gay!', 'Macho alpha.', 'Sigma da Bahia!!', 'Chupador de rolas pretas.', 'Piranha danada!', 'Hetero.', 'Ratazana de esgoto.', 'Encosto.', 'Lambe-Pika.']; // Substitua com suas palavras desejadas
            let currentIndex = 0;
            let intervalId;

            function startWordRoulette() {
                intervalId = setInterval(function() {
                    wordRoulette.textContent = words[currentIndex];
                    currentIndex = (currentIndex + 1) % words.length;
                }, 100); // Velocidade da roleta em milissegundos
            }

            startWordRoulette();

            // Parar a roleta depois de 5 segundos
            setTimeout(function() {
                clearInterval(intervalId);
                wordRoulette.textContent = words[currentIndex];
                spinAgainButton.style.display = 'block'; // Mostrar o botão "Girar novamente"
            }, 5000);

            spinAgainButton.addEventListener('click', function() {
                currentIndex = 0; // Reiniciar o índice para a roleta
                startWordRoulette();
                spinAgainButton.style.display = 'none'; // Esconder o botão "Girar novamente"
            });
        });
    });
});
