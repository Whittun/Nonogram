export default function gameResult() {
  const button = document.createElement('button');
  button.classList.add('settings__result-button');
  button.textContent = 'Показать результаты';

  const popup = document.createElement('div');
  popup.classList.add('settings__result-popup');

  const popupContent = document.createElement('div');
  popupContent.classList.add('settings__result-popup-content');
  popup.append(popupContent);

  const closeButton = document.createElement('button');
  closeButton.classList.add('settings__result-popup-button');

  popupContent.append(closeButton);

  const ul = document.createElement('ul');
  ul.classList.add('settings__result-popup-list');

  if (localStorage.getItem('winGames')) {
    const gamesArr = JSON.parse(localStorage.getItem('winGames')).slice(-5);

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

    let listContent = '';
    gamesArr.forEach((game) => {
      listContent += `
        <li class="settings__result-popup-item">
          <p class="settings__result-name">
            ${game.name}
          </p>
          <p class="settings__result-complexity">
            ${game.complexity}
          </p>
          <p class="settings__result-time">
            ${game.time}
          </p>
        </li>
      `;
    });
    ul.innerHTML = listContent;
    popupContent.append(ul);
  } else {
    button.setAttribute('disabled', 'disabled');
    popupContent.append(ul);
  }

  function showPopup() {
    const popupHTML = document.querySelector('.settings__result-popup');
    popupHTML.classList.add('settings__result-popup--active');

    document.body.classList.add('off-scroll');
    window.scrollTo(0, 0);
  }

  function closePopup() {
    const popupHTML = document.querySelector('.settings__result-popup');
    popupHTML.classList.remove('settings__result-popup--active');

    document.body.classList.remove('off-scroll');
  }

  button.addEventListener('click', showPopup);
  closeButton.addEventListener('click', closePopup);

  return { button, popup };
}
