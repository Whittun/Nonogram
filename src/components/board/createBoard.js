export default function createBoard(matrix) {
  const board = document.createElement('div');
  board.classList.add('board');

  board.classList.add('board-game');

  const gameField = document.createElement('div');
  gameField.classList.add('game-field');

  board.append(gameField);

  let i = 0;
  matrix.forEach((line) => {
    line.forEach(() => {
      const squareDiv = document.createElement('div');
      squareDiv.classList.add('square');
      squareDiv.setAttribute('id', i);
      gameField.append(squareDiv);

      i += 1;
    });
  });
  return board;
}
