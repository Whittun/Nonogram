export default function showResult() {
  if (document.querySelector('.result-text')) {
    document.querySelector('.result-text').remove();
  }

  const gameSection = document.querySelector('.game');
  document.querySelector('.board').classList.add('board--inactive');

  const p = document.createElement('p');
  const timeResult = document.querySelector('.board__time').textContent;
  p.innerText = `Отлично! Вы разгадали нонограмму за ${timeResult.split(':')[0]} минут, ${timeResult.split(':')[1]} секунд!`;
  p.classList.add('result-text');

  gameSection.prepend(p);
}
