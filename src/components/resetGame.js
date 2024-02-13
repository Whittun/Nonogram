export default function createResetButton(render, allMatricesData, num, timer, mode) {
  const button = document.createElement('button');
  button.classList.add('board__reset-button');
  button.textContent = 'Сбросить игру';

  function resetButtonHandler() {
    render(allMatricesData, num, timer, mode);
  }

  button.addEventListener('click', resetButtonHandler);

  return button;
}
