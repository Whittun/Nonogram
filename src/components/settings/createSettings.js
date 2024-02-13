import './settings.scss';
import chooseComplexity from './chooseComplexity';
import gameResult from './gameResult';
import randomGame from './randomGame';
import showResult from './showResult';
import sound from './sound';
import theme from './theme';
import saveAndLoadGame from '../board/saveGame';
import createResetButton from '../resetGame';

export default function createSettings(render, matrices, props) {
  const section = document.createElement('section');
  section.classList.add('settings');

  section.append(chooseComplexity(render, matrices, props));

  section.append(sound(props.mute));
  section.append(theme());

  const saveAndLoadButtons = saveAndLoadGame(matrices, render, props.num, props.modeData);
  saveAndLoadButtons.forEach((elem) => {
    section.append(elem);
  });

  section.append(createResetButton(render, matrices, props.num, '00:00', props.modeData));

  const { button, popup } = gameResult();
  section.append(button);
  section.append(popup);

  section.append(showResult(props));

  section.append(randomGame(render, matrices));
  return section;
}
