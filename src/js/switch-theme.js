const switchInput = document.querySelector('.switch input');

switchInput.addEventListener('change', () => {
  // Проверяем состояние переключателя
  if (switchInput.checked) {
    // Применяем стили для темной темы
    document.body.classList.add('dark-theme');
  } else {
    // Применяем стили для светлой темы
    document.body.classList.remove('dark-theme');
  }
});