export default function createTips(matrix, type) {
  const topTips = document.createElement('div');
  topTips.classList.add('tips');
  topTips.classList.add(`tips-${type}`);

  const leftTips = document.createElement('div');
  leftTips.classList.add('left-tips');

  matrix.forEach((line, lineKey) => {
    const tipsData = [];
    let tipValue = 0;
    const matrixLength = line.length;

    line.forEach((elem, elemKey) => {
      const tipsTypeElem = (type === 'top') ? matrix[elemKey][lineKey] : elem;

      if (tipsTypeElem === 1) {
        tipValue += 1;
      }
      if (
        (tipValue !== 0 && tipsTypeElem === 0)
        || (matrixLength - 1 === elemKey && tipValue !== 0)
      ) {
        tipsData.push(tipValue);
        tipValue = 0;
      }
    });

    const tipsLine = document.createElement('ul');
    tipsLine.classList.add('tips-line');
    tipsLine.classList.add(`tips-line-${type}`);

    for (let i = 0; i <= Math.ceil(line.length / 2) - 1; i += 1) {
      const tipsNum = document.createElement('li');
      tipsNum.classList.add('tips-number');
      tipsNum.classList.add(`tips-number-${type}`);

      tipsNum.innerText = tipsData[i] || '';
      if (tipsData[i]) {
        tipsLine.append(tipsNum);
      } else {
        tipsLine.prepend(tipsNum);
      }
    }

    topTips.append(tipsLine);
  });
  return topTips;
}
