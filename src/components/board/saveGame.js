export default function saveAndLoadGame(allMatricesData, render, nonogramNum, mode) {
  const saveButton = document.createElement('button');
  saveButton.classList.add('board-result__save-game');
  saveButton.textContent = 'Сохранить игру';

  function createUserMatrix() {
    let j = 0;
    let upToElem = allMatricesData[mode][nonogramNum][1].length;
    const squares = document.querySelectorAll('.board-game .square');
    const userMatrix = allMatricesData[mode][nonogramNum][1].map(() => {
      const userLineMatrix = [];
      for (; j < upToElem; j += 1) {
        if (squares[j].className.includes('active')) {
          userLineMatrix.push(1);
        } else if (squares[j].className.includes('cross')) {
          userLineMatrix.push(2);
        } else {
          userLineMatrix.push(0);
        }
      }
      upToElem += allMatricesData[mode][nonogramNum][1].length;
      return userLineMatrix;
    });
    return userMatrix;
  }

  function saveButtonHandler() {
    const gameState = createUserMatrix();
    const timer = document.querySelector('.board__time').textContent;

    localStorage.setItem('gameState', JSON.stringify(gameState));
    localStorage.setItem('gameNum', JSON.stringify(nonogramNum));
    localStorage.setItem('gameTimer', timer);
    localStorage.setItem('mode', mode);
  }

  saveButton.addEventListener('click', saveButtonHandler);

  function loadButtonHandler() {
    const gameNum = +localStorage.getItem('gameNum');
    const timer = localStorage.getItem('gameTimer');
    const modeData = +localStorage.getItem('mode');
    render(allMatricesData, gameNum, timer, modeData);

    const squares = document.querySelectorAll('.board-game .square');
    const matrixData = JSON.parse(localStorage.getItem('gameState'));

    let j = 0;
    matrixData.forEach((line) => {
      line.forEach((elem) => {
        if (elem === 1) {
          squares[j].classList.add('square--active');
        } else if (elem === 2) {
          squares[j].classList.add('square--cross');
        }

        j += 1;
      });
    });
  }

  if (localStorage.getItem('gameState')) {
    const loadButton = document.createElement('button');
    loadButton.classList.add('board-result__load-game');
    loadButton.textContent = 'Загрузить игру';

    loadButton.addEventListener('click', loadButtonHandler);

    return [saveButton, loadButton];
  }

  return [saveButton];
}
