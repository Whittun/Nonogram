let interval;

export default function createStopWatch(matrix, timer) {
  let minutes = +timer.split(':')[0];
  let seconds = +timer.split(':')[1];

  const watchTimer = document.createElement('p');
  watchTimer.classList.add('board__time');
  watchTimer.textContent = timer;

  if (interval) {
    clearInterval(interval);
  }

  const board = document.querySelector('.game-field');

  function buttonHandler() {
    interval = setInterval(() => {
      seconds += 1;
      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }
      watchTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  board.addEventListener('mousedown', buttonHandler, { once: true });

  function stopTimer() {
    clearInterval(interval);
  }

  function removeListener() {
    board.removeEventListener('mousedown', buttonHandler);
  }

  return { watchTimer, stopTimer, removeListener };
}
