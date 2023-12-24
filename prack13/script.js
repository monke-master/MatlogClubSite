// Функция обработки события прокрутки
function parallaxEffect() {
  let scrollPosition = window.pageYOffset;

  // Изменение позиции фона для создания эффекта параллакса
  document.querySelector('.parallax-content').style.transform = `translateY(-${scrollPosition * 0.5}px)`;
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', parallaxEffect);
