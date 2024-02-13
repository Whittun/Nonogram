import checkWin from './checkWin';
import showResult from './showResult';

import audioSourceClick from './audio/knopka-jeskaya-korotkii-dalekii.mp3';
import audioSourceYesYesYes from './audio/yes-yes-yes-yes-yes.mp3';
import audioSourceCross from './audio/knopka-jeskaya-korotkii-suhoi.mp3';
import audioSourceClear from './audio/lovushka-iz-raspyilitelya.mp3';

let moveHandler;
let clickHandler;
let disableContextMenu;

function removeEvents() {
  document.removeEventListener('mouseover', moveHandler);
  document.removeEventListener('mousedown', clickHandler);
}

export default function setControls(matrix, props) {
  document.removeEventListener('mouseover', moveHandler);
  document.removeEventListener('mousedown', clickHandler);
  document.removeEventListener('contextmenu', disableContextMenu);

  let isMouseDown = false;
  let mode = true;
  let mouseMode;
  let crossMode;

  const audioClick = new Audio();
  audioClick.src = audioSourceClick;

  const audioWin = new Audio();
  audioWin.src = audioSourceYesYesYes;

  const audioCross = new Audio();
  audioCross.src = audioSourceCross;

  const audioClear = new Audio();
  audioClear.src = audioSourceClear;

  function mute(soundMode) {
    if (soundMode) {
      audioClick.muted = true;
      audioWin.muted = true;
      audioCross.muted = true;
      audioClear.muted = true;
    } else {
      audioClick.muted = false;
      audioWin.muted = false;
      audioCross.muted = false;
      audioClear.muted = false;
    }
  }

  document.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    mouseMode = e.button;

    if (e.target.className.includes('active') || e.target.className.includes('cross')) {
      mode = false;
    } else {
      mode = true;
    }

    if (e.target.className.includes('active')) {
      crossMode = 'active';
    } else if (e.target.className.includes('cross')) {
      crossMode = 'cross';
    }
  });

  document.addEventListener('mouseup', (e) => {
    isMouseDown = false;
    e.preventDefault();
  });

  moveHandler = function squareMoveHandler(e) {
    if (!isMouseDown) return;
    const elem = e.target;

    if (mouseMode === 2) {
      if (elem.className.includes('square')) {
        if (mode || crossMode === 'active') {
          if (!elem.className.includes('square--cross')) {
            audioCross.play();
          }

          elem.classList.add('square--cross');
          elem.classList.remove('square--active');
        } else {
          if (elem.className.includes('square--cross')) {
            audioClear.play();
          }
          elem.classList.remove('square--cross');
        }
      }
      if (checkWin(matrix, document.querySelectorAll('.board-game .square'), props)) {
        document.removeEventListener('mouseover', moveHandler);
        document.removeEventListener('mousedown', clickHandler);
        showResult();

        audioWin.play();
      }
      return;
    }

    if (elem.className.includes('square')) {
      if (mode || crossMode === 'cross') {
        if (!elem.className.includes('square--active')) {
          audioClick.play();
        }
        elem.classList.add('square--active');
        e.target.classList.remove('square--cross');
      } else {
        if (elem.className.includes('square--active')) {
          audioClear.play();
        }

        elem.classList.remove('square--active');
      }
    }

    if (checkWin(matrix, document.querySelectorAll('.board-game .square'), props)) {
      document.removeEventListener('mouseover', moveHandler);
      document.removeEventListener('mousedown', clickHandler);
      showResult();

      audioWin.play();
    }
  };

  clickHandler = function squareClickHandler(e) {
    const elem = e.target;

    if (!elem.className.includes('square')) return;

    if (e.button === 2) {
      if ((!elem.className.includes('square--cross'))) {
        audioCross.play();
      } else {
        audioClear.play();
      }

      e.target.classList.remove('square--active');
      e.target.classList.toggle('square--cross');
      if (checkWin(matrix, document.querySelectorAll('.board-game .square'), props)) {
        document.removeEventListener('mouseover', moveHandler);
        document.removeEventListener('mousedown', clickHandler);
        showResult();

        audioWin.play();
      }
      return;
    }

    if (elem.className.includes('square')) {
      if (!elem.className.includes('square--active')) {
        audioClick.play();
      } else {
        audioClear.play();
      }
      elem.classList.toggle('square--active');
      elem.classList.remove('square--cross');
    }

    if (checkWin(matrix, document.querySelectorAll('.board-game .square'), props)) {
      audioWin.play();

      document.removeEventListener('mouseover', moveHandler);
      document.removeEventListener('mousedown', clickHandler);
      showResult();
    }
  };

  document.addEventListener('mouseover', moveHandler);
  document.addEventListener('mousedown', clickHandler);

  disableContextMenu = function disableContextMenuHandler(e) {
    e.preventDefault();
  };

  const squares = document.querySelectorAll('.square');
  console.log(squares);
  squares.forEach((elem) => {
    elem.addEventListener('contextmenu', disableContextMenu);
  });

  return { removeEvents, mute };
}
