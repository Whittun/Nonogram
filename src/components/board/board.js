import './board.scss';

import createBoard from './createBoard';
import createTips from './createTips';

export default function board(matrix) {
  const section = document.createElement('section');
  section.classList.add('game');

  const boardGame = createBoard(matrix);
  boardGame.prepend(createTips(matrix, 'top'));
  boardGame.prepend(createTips(matrix, 'left'));

  section.append(boardGame);
  return section;
}
