export default function chooseComplexity(render, matrices, props) {
  const complexities = ['Легко', 'Средне', 'Сложно'];
  const complexitiesClass = ['', 'game--medium', 'game--hard'];

  const div = document.createElement('div');
  div.classList.add('settings__complexity-wrapper');

  const h2 = document.createElement('h2');
  h2.classList.add('settings__complexity-title');
  h2.textContent = 'Выберите сложность:';

  const ul = document.createElement('ul');
  ul.classList.add('settings__complexity-list');

  function selectComplexity(e) {
    let matrixNum;

    if (e.currentTarget.textContent === 'Легко') {
      matrixNum = 0;
    } else if (e.currentTarget.textContent === 'Средне') {
      matrixNum = 1;
    } else if (e.currentTarget.textContent === 'Сложно') {
      matrixNum = 2;
    }

    render(matrices, 0, '00:00', matrixNum);

    if (matrixNum) {
      document.querySelector('.game').classList.add(complexitiesClass[matrixNum]);
    }
  }

  complexities.forEach((complexity, index) => {
    const li = document.createElement('li');
    li.classList.add('settings__complexity-item');

    const button = document.createElement('button');
    button.classList.add('settings__complexity-button');
    if (index === props.modeData) button.classList.add('settings__complexity-button--active');
    button.textContent = complexity;

    button.addEventListener('click', selectComplexity);

    li.append(button);

    ul.append(li);
  });

  div.append(h2);
  div.append(ul);

  return div;
}
