export default function checkWin(matrix, squares, props) {
  if (!squares) return false;

  function createUserMatrix() {
    let j = 0;
    let upToElem = matrix.length;

    const userMatrix = matrix.map(() => {
      const userLineMatrix = [];
      for (; j < upToElem; j += 1) {
        if (squares[j].className.includes('active')) {
          userLineMatrix.push(1);
        } else {
          userLineMatrix.push(0);
        }
      }
      upToElem += matrix.length;
      return userLineMatrix;
    });

    return userMatrix;
  }

  function areMatricesEqual(userMatrix, gameMatrix) {
    for (let i = 0; i < gameMatrix.length; i += 1) {
      for (let k = 0; k < gameMatrix.length; k += 1) {
        if (gameMatrix[i][k] !== userMatrix[i][k]) {
          return false;
        }
      }
    }

    document.querySelector('.board-result__save-game').setAttribute('disabled', 'disabled');
    props.stopTimer();

    let complexity;

    switch (props.modeData) {
      case 0:
        complexity = 'Легко';
        break;
      case 1:
        complexity = 'Средне';
        break;
      default:
        complexity = 'Сложно';
    }

    const game = {
      name: props.allMatricesData[props.modeData][props.num][0],
      time: document.querySelector('.board__time').textContent,
      complexity,
    };

    let gamesArr = [];

    if (localStorage.getItem('winGames')) {
      gamesArr = JSON.parse(localStorage.getItem('winGames'));
    }

    gamesArr.push(game);
    localStorage.setItem('winGames', JSON.stringify(gamesArr));

    gamesArr = gamesArr.slice(-5);

    gamesArr.sort((a, b) => {
      if (+a.time.split(':')[0] < +b.time.split(':')[0]) {
        return -1;
      }

      if (+a.time.split(':')[0] === +b.time.split(':')[0]) {
        if (+a.time.split(':')[1] < +b.time.split(':')[1]) {
          return -1;
        }
      }

      return 0;
    });

    const ul = document.querySelector('.settings__result-popup-list');

    let listContent = '';

    gamesArr.forEach((gameData) => {
      listContent += `
        <li class="settings__result-popup-item">
          <p class="settings__result-name">
            ${gameData.name}
          </p>
          <p class="settings__result-complexity">
            ${gameData.complexity}
          </p>
          <p class="settings__result-time">
            ${gameData.time}
          </p>
        </li>
      `;
    });

    ul.innerHTML = listContent;

    document.querySelector('.settings__result-button').removeAttribute('disabled');

    return true;
  }

  return areMatricesEqual(createUserMatrix(), matrix);
}
