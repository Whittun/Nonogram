export default function sound(mute) {
  const div = document.createElement('div');
  div.classList.add('settings__sound-wrapper');

  const p = document.createElement('p');
  p.classList.add('settings__sound-text');
  p.textContent = 'Звук:';

  const button = document.createElement('div');
  button.classList.add('settings__toggle');
  button.classList.add('settings__toggle--active');

  div.append(p);
  div.append(button);

  function buttonHandler() {
    mute(button.className.includes('settings__toggle--active'));

    button.classList.toggle('settings__toggle--active');
  }

  button.addEventListener('click', buttonHandler);

  return div;
}
