import './index.scss';

export default function createPuzzles(props) {
  const header = document.createElement('section');
  header.classList.add('puzzles');

  const ul = document.createElement('ul');
  ul.classList.add('puzzles__list');

  props.allMatricesData[props.modeData].forEach((matrix, key) => {
    const li = document.createElement('li');
    li.classList.add('puzzles__item');
    if (key === props.num) li.classList.add('puzzles__item--active');

    const matrixText = matrix[0];
    li.textContent = matrixText;

    ul.append(li);
  });

  header.append(ul);

  return header;
}
