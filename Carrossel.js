let slideIndex = 0;
const slides = document.getElementById('slides');
const bolinhasContainer = document.getElementById('bolinhas');
const totalSlides = slides.children.length;

for (let i = 0; i < totalSlides; i++) {
  const span = document.createElement('span');
  span.addEventListener('click', () => mostrarSlide(i));
  bolinhasContainer.appendChild(span);
}

const bolinhas = document.querySelectorAll('#bolinhas span');

function mostrarSlide(index) {
  slideIndex = (index + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
  bolinhas.forEach(b => b.classList.remove('ativa'));
  bolinhas[slideIndex].classList.add('ativa');
}

function mudarSlide(n) {
  mostrarSlide(slideIndex + n);
}

window.onload = () => {
  mostrarSlide(0);
};
