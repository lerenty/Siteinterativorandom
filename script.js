document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.name-button');
    const content = document.getElementById('content');
    const info = document.getElementById('info');
    const wordRoulette = document.getElementById('word-roulette');
    const spinAgainButton = document.getElementById('spin-again');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Mostrar conteúdo relevante
            content.classList.remove('hidden');
            buttons.forEach(btn => btn.classList.add('hidden'));
            
            // Definir o texto de acordo com o botão clicado
            info.textContent = `${button.textContent} é...`;

            // Função para simular roleta de palavras
            const words = ['palavra1', 'palavra2', 'palavra3', 'palavra4']; // Substitua com suas palavras desejadas
            let currentIndex = 0;
            let intervalId;

            function startWordRoulette() {
                intervalId = setInterval(function() {
                    wordRoulette.textContent = words[currentIndex];
                    currentIndex = (currentIndex + 1) % words.length;
                }, 100); // Ajuste a velocidade da roleta aqui (em milissegundos)
            }

            startWordRoulette();

            // Evento para parar a roleta
            spinAgainButton.addEventListener('click', function() {
                clearInterval(intervalId);
                // Exibir a palavra final da roleta
                wordRoulette.textContent = words[currentIndex];
                // Opcional: Poderia adicionar lógica para repetir ou outra ação após a escolha

                // Mostrar botão "Voltar"
                const backButton = document.createElement('button');
                backButton.textContent = 'Voltar';
                backButton.classList.add('back-button');
                backButton.addEventListener('click', function() {
                    content.classList.add('hidden');
                    buttons.forEach(btn => btn.classList.remove('hidden'));
                    backButton.remove(); // Remover o botão "Voltar"
                });

                document.body.insertBefore(backButton, document.body.firstChild);
            });
        });
    });
});
