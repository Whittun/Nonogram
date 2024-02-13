export default function theme() {
  const div = document.createElement('div');
  div.classList.add('settings__theme-wrapper');

  const p = document.createElement('p');
  p.classList.add('settings__theme-text');
  p.textContent = 'Тема:';

  const toggle = document.createElement('div');
  toggle.classList.add('settings__toggle');

  div.append(p);
  div.append(toggle);

  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggle.classList.add('settings__toggle--active');
  }

  function toggleTheme(e) {
    e.currentTarget.classList.toggle('settings__toggle--active');

    document.body.classList.toggle('dark');

    if (localStorage.getItem('theme') === 'dark') {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }

  toggle.addEventListener('click', toggleTheme);

  return div;
}
