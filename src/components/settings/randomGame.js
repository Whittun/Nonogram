export default function randomGame(render, allMatricesData) {
  const button = document.createElement('button');
  button.classList.add('settings__random-button');

  button.textContent = 'Случайная игра';

  function random(min, max) {
    const minValue = min - 0.5;
    const maxValue = max + 0.5;

    const number = minValue + Math.random() * (maxValue - minValue);
    return Math.round(number);
  }

  function renderRandomGame() {
    render(allMatricesData, random(0, 4), '00:00', random(0, 2));
  }

  button.addEventListener('click', renderRandomGame);

  return button;
}
