export default function showResult(props) {
  const button = document.createElement('button');
  button.classList.add('settings__show-result');
  button.textContent = 'Показать ответ';

  function showPicture() {
    const matrix = props.allMatricesData[props.modeData][props.num][1];
    const squares = document.querySelectorAll('.square');

    let i = 0;
    matrix.forEach((line) => {
      line.forEach((elem) => {
        squares[i].classList.remove('square--active');
        squares[i].classList.remove('square--cross');
        if (elem) {
          squares[i].classList.add('square--fill');
        }
        i += 1;
      });
    });

    props.stopTimer();
    props.removeEvents();
    props.removeListener();

    document.querySelector('.board-result__save-game').setAttribute('disabled', 'disabled');
  }

  button.addEventListener('click', showPicture);

  return button;
}
