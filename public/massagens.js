let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let autoSlideTimeout;

function showSlides(n) {
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    resetAutoSlide();
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function resetAutoSlide() {
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(nextSlide, 10000); // 10 segundos
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentSlide(i);
    });
}

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", resetAutoSlide);
}

// Mostrar o primeiro slide inicialmente
showSlides(slideIndex);
resetAutoSlide();

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = 'none';
        }
    });
});