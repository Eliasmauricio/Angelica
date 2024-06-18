document.addEventListener('DOMContentLoaded', () => {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName('slide');

        // Oculta todos os slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        // Incrementa o índice e exibe o slide correspondente
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = 'block';

        // Define o tempo de troca dos slides (10 segundos)
        setTimeout(showSlides, 10000);
    }

    // Evento para esconder o footer ao clicar em qualquer lugar da página
    document.body.addEventListener('click', () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = 'none';
        }
    });
});