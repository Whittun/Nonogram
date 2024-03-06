/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/board/audio/knopka-jeskaya-korotkii-dalekii.mp3":
/*!************************************************************************!*\
  !*** ./src/components/board/audio/knopka-jeskaya-korotkii-dalekii.mp3 ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/components/board/audio/knopka-jeskaya-korotkii-dalekii.mp3\");\n\n//# sourceURL=webpack:///./src/components/board/audio/knopka-jeskaya-korotkii-dalekii.mp3?");

/***/ }),

/***/ "./src/components/board/audio/knopka-jeskaya-korotkii-suhoi.mp3":
/*!**********************************************************************!*\
  !*** ./src/components/board/audio/knopka-jeskaya-korotkii-suhoi.mp3 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/components/board/audio/knopka-jeskaya-korotkii-suhoi.mp3\");\n\n//# sourceURL=webpack:///./src/components/board/audio/knopka-jeskaya-korotkii-suhoi.mp3?");

/***/ }),

/***/ "./src/components/board/audio/lovushka-iz-raspyilitelya.mp3":
/*!******************************************************************!*\
  !*** ./src/components/board/audio/lovushka-iz-raspyilitelya.mp3 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/components/board/audio/lovushka-iz-raspyilitelya.mp3\");\n\n//# sourceURL=webpack:///./src/components/board/audio/lovushka-iz-raspyilitelya.mp3?");

/***/ }),

/***/ "./src/components/board/audio/yes-yes-yes-yes-yes.mp3":
/*!************************************************************!*\
  !*** ./src/components/board/audio/yes-yes-yes-yes-yes.mp3 ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/components/board/audio/yes-yes-yes-yes-yes.mp3\");\n\n//# sourceURL=webpack:///./src/components/board/audio/yes-yes-yes-yes-yes.mp3?");

/***/ }),

/***/ "./src/components/board/board.scss":
/*!*****************************************!*\
  !*** ./src/components/board/board.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/board/board.scss?");

/***/ }),

/***/ "./src/components/puzzles/index.scss":
/*!*******************************************!*\
  !*** ./src/components/puzzles/index.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/puzzles/index.scss?");

/***/ }),

/***/ "./src/components/settings/settings.scss":
/*!***********************************************!*\
  !*** ./src/components/settings/settings.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/components/settings/settings.scss?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ "./src/components/board/board.js":
/*!***************************************!*\
  !*** ./src/components/board/board.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ board)\n/* harmony export */ });\n/* harmony import */ var _board_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board.scss */ \"./src/components/board/board.scss\");\n/* harmony import */ var _createBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createBoard */ \"./src/components/board/createBoard.js\");\n/* harmony import */ var _createTips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTips */ \"./src/components/board/createTips.js\");\n\n\n\n\n\nfunction board(matrix) {\n  const section = document.createElement('section');\n  section.classList.add('game');\n\n  const boardGame = (0,_createBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(matrix);\n  boardGame.prepend((0,_createTips__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(matrix, 'top'));\n  boardGame.prepend((0,_createTips__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(matrix, 'left'));\n\n  section.append(boardGame);\n  return section;\n}\n\n\n//# sourceURL=webpack:///./src/components/board/board.js?");

/***/ }),

/***/ "./src/components/board/checkWin.js":
/*!******************************************!*\
  !*** ./src/components/board/checkWin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkWin)\n/* harmony export */ });\nfunction checkWin(matrix, squares, props) {\n  if (!squares) return false;\n\n  function createUserMatrix() {\n    let j = 0;\n    let upToElem = matrix.length;\n\n    const userMatrix = matrix.map(() => {\n      const userLineMatrix = [];\n      for (; j < upToElem; j += 1) {\n        if (squares[j].className.includes('active')) {\n          userLineMatrix.push(1);\n        } else {\n          userLineMatrix.push(0);\n        }\n      }\n      upToElem += matrix.length;\n      return userLineMatrix;\n    });\n\n    return userMatrix;\n  }\n\n  function areMatricesEqual(userMatrix, gameMatrix) {\n    for (let i = 0; i < gameMatrix.length; i += 1) {\n      for (let k = 0; k < gameMatrix.length; k += 1) {\n        if (gameMatrix[i][k] !== userMatrix[i][k]) {\n          return false;\n        }\n      }\n    }\n\n    document.querySelector('.board-result__save-game').setAttribute('disabled', 'disabled');\n    props.stopTimer();\n\n    let complexity;\n\n    switch (props.modeData) {\n      case 0:\n        complexity = 'Легко';\n        break;\n      case 1:\n        complexity = 'Средне';\n        break;\n      default:\n        complexity = 'Сложно';\n    }\n\n    const game = {\n      name: props.allMatricesData[props.modeData][props.num][0],\n      time: document.querySelector('.board__time').textContent,\n      complexity,\n    };\n\n    let gamesArr = [];\n\n    if (localStorage.getItem('winGames')) {\n      gamesArr = JSON.parse(localStorage.getItem('winGames'));\n    }\n\n    gamesArr.push(game);\n    localStorage.setItem('winGames', JSON.stringify(gamesArr));\n\n    gamesArr = gamesArr.slice(-5);\n\n    gamesArr.sort((a, b) => {\n      if (+a.time.split(':')[0] < +b.time.split(':')[0]) {\n        return -1;\n      }\n\n      if (+a.time.split(':')[0] === +b.time.split(':')[0]) {\n        if (+a.time.split(':')[1] < +b.time.split(':')[1]) {\n          return -1;\n        }\n      }\n\n      return 0;\n    });\n\n    const ul = document.querySelector('.settings__result-popup-list');\n\n    let listContent = '';\n\n    gamesArr.forEach((gameData) => {\n      listContent += `\n        <li class=\"settings__result-popup-item\">\n          <p class=\"settings__result-name\">\n            ${gameData.name}\n          </p>\n          <p class=\"settings__result-complexity\">\n            ${gameData.complexity}\n          </p>\n          <p class=\"settings__result-time\">\n            ${gameData.time}\n          </p>\n        </li>\n      `;\n    });\n\n    ul.innerHTML = listContent;\n\n    document.querySelector('.settings__result-button').removeAttribute('disabled');\n\n    return true;\n  }\n\n  return areMatricesEqual(createUserMatrix(), matrix);\n}\n\n\n//# sourceURL=webpack:///./src/components/board/checkWin.js?");

/***/ }),

/***/ "./src/components/board/createBoard.js":
/*!*********************************************!*\
  !*** ./src/components/board/createBoard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBoard)\n/* harmony export */ });\nfunction createBoard(matrix) {\n  const board = document.createElement('div');\n  board.classList.add('board');\n\n  board.classList.add('board-game');\n\n  const gameField = document.createElement('div');\n  gameField.classList.add('game-field');\n\n  board.append(gameField);\n\n  let i = 0;\n  matrix.forEach((line) => {\n    line.forEach(() => {\n      const squareDiv = document.createElement('div');\n      squareDiv.classList.add('square');\n      squareDiv.setAttribute('id', i);\n      gameField.append(squareDiv);\n\n      i += 1;\n    });\n  });\n  return board;\n}\n\n\n//# sourceURL=webpack:///./src/components/board/createBoard.js?");

/***/ }),

/***/ "./src/components/board/createStopWatch.js":
/*!*************************************************!*\
  !*** ./src/components/board/createStopWatch.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createStopWatch)\n/* harmony export */ });\nlet interval;\n\nfunction createStopWatch(matrix, timer) {\n  let minutes = +timer.split(':')[0];\n  let seconds = +timer.split(':')[1];\n\n  const watchTimer = document.createElement('p');\n  watchTimer.classList.add('board__time');\n  watchTimer.textContent = timer;\n\n  if (interval) {\n    clearInterval(interval);\n  }\n\n  const board = document.querySelector('.game-field');\n\n  function buttonHandler() {\n    interval = setInterval(() => {\n      seconds += 1;\n      if (seconds === 60) {\n        minutes += 1;\n        seconds = 0;\n      }\n      watchTimer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;\n    }, 1000);\n  }\n\n  board.addEventListener('mousedown', buttonHandler, { once: true });\n\n  function stopTimer() {\n    clearInterval(interval);\n  }\n\n  function removeListener() {\n    board.removeEventListener('mousedown', buttonHandler);\n  }\n\n  return { watchTimer, stopTimer, removeListener };\n}\n\n\n//# sourceURL=webpack:///./src/components/board/createStopWatch.js?");

/***/ }),

/***/ "./src/components/board/createTips.js":
/*!********************************************!*\
  !*** ./src/components/board/createTips.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTips)\n/* harmony export */ });\nfunction createTips(matrix, type) {\n  const topTips = document.createElement('div');\n  topTips.classList.add('tips');\n  topTips.classList.add(`tips-${type}`);\n\n  const leftTips = document.createElement('div');\n  leftTips.classList.add('left-tips');\n\n  matrix.forEach((line, lineKey) => {\n    const tipsData = [];\n    let tipValue = 0;\n    const matrixLength = line.length;\n\n    line.forEach((elem, elemKey) => {\n      const tipsTypeElem = (type === 'top') ? matrix[elemKey][lineKey] : elem;\n\n      if (tipsTypeElem === 1) {\n        tipValue += 1;\n      }\n      if (\n        (tipValue !== 0 && tipsTypeElem === 0)\n        || (matrixLength - 1 === elemKey && tipValue !== 0)\n      ) {\n        tipsData.push(tipValue);\n        tipValue = 0;\n      }\n    });\n\n    const tipsLine = document.createElement('ul');\n    tipsLine.classList.add('tips-line');\n    tipsLine.classList.add(`tips-line-${type}`);\n\n    for (let i = 0; i <= Math.ceil(line.length / 2) - 1; i += 1) {\n      const tipsNum = document.createElement('li');\n      tipsNum.classList.add('tips-number');\n      tipsNum.classList.add(`tips-number-${type}`);\n\n      tipsNum.innerText = tipsData[i] || '';\n      if (tipsData[i]) {\n        tipsLine.append(tipsNum);\n      } else {\n        tipsLine.prepend(tipsNum);\n      }\n    }\n\n    topTips.append(tipsLine);\n  });\n  return topTips;\n}\n\n\n//# sourceURL=webpack:///./src/components/board/createTips.js?");

/***/ }),

/***/ "./src/components/board/saveGame.js":
/*!******************************************!*\
  !*** ./src/components/board/saveGame.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ saveAndLoadGame)\n/* harmony export */ });\nfunction saveAndLoadGame(allMatricesData, render, nonogramNum, mode) {\n  const saveButton = document.createElement('button');\n  saveButton.classList.add('board-result__save-game');\n  saveButton.textContent = 'Сохранить игру';\n\n  function createUserMatrix() {\n    let j = 0;\n    let upToElem = allMatricesData[mode][nonogramNum][1].length;\n    const squares = document.querySelectorAll('.board-game .square');\n    const userMatrix = allMatricesData[mode][nonogramNum][1].map(() => {\n      const userLineMatrix = [];\n      for (; j < upToElem; j += 1) {\n        if (squares[j].className.includes('active')) {\n          userLineMatrix.push(1);\n        } else if (squares[j].className.includes('cross')) {\n          userLineMatrix.push(2);\n        } else {\n          userLineMatrix.push(0);\n        }\n      }\n      upToElem += allMatricesData[mode][nonogramNum][1].length;\n      return userLineMatrix;\n    });\n    return userMatrix;\n  }\n\n  function saveButtonHandler() {\n    const gameState = createUserMatrix();\n    const timer = document.querySelector('.board__time').textContent;\n\n    localStorage.setItem('gameState', JSON.stringify(gameState));\n    localStorage.setItem('gameNum', JSON.stringify(nonogramNum));\n    localStorage.setItem('gameTimer', timer);\n    localStorage.setItem('mode', mode);\n  }\n\n  saveButton.addEventListener('click', saveButtonHandler);\n\n  function loadButtonHandler() {\n    const gameNum = +localStorage.getItem('gameNum');\n    const timer = localStorage.getItem('gameTimer');\n    const modeData = +localStorage.getItem('mode');\n    render(allMatricesData, gameNum, timer, modeData);\n\n    const squares = document.querySelectorAll('.board-game .square');\n    const matrixData = JSON.parse(localStorage.getItem('gameState'));\n\n    let j = 0;\n    matrixData.forEach((line) => {\n      line.forEach((elem) => {\n        if (elem === 1) {\n          squares[j].classList.add('square--active');\n        } else if (elem === 2) {\n          squares[j].classList.add('square--cross');\n        }\n\n        j += 1;\n      });\n    });\n  }\n\n  if (localStorage.getItem('gameState')) {\n    const loadButton = document.createElement('button');\n    loadButton.classList.add('board-result__load-game');\n    loadButton.textContent = 'Загрузить игру';\n\n    loadButton.addEventListener('click', loadButtonHandler);\n\n    return [saveButton, loadButton];\n  }\n\n  return [saveButton];\n}\n\n\n//# sourceURL=webpack:///./src/components/board/saveGame.js?");

/***/ }),

/***/ "./src/components/board/setControls.js":
/*!*********************************************!*\
  !*** ./src/components/board/setControls.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setControls)\n/* harmony export */ });\n/* harmony import */ var _checkWin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkWin */ \"./src/components/board/checkWin.js\");\n/* harmony import */ var _showResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showResult */ \"./src/components/board/showResult.js\");\n/* harmony import */ var _audio_knopka_jeskaya_korotkii_dalekii_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/knopka-jeskaya-korotkii-dalekii.mp3 */ \"./src/components/board/audio/knopka-jeskaya-korotkii-dalekii.mp3\");\n/* harmony import */ var _audio_yes_yes_yes_yes_yes_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/yes-yes-yes-yes-yes.mp3 */ \"./src/components/board/audio/yes-yes-yes-yes-yes.mp3\");\n/* harmony import */ var _audio_knopka_jeskaya_korotkii_suhoi_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/knopka-jeskaya-korotkii-suhoi.mp3 */ \"./src/components/board/audio/knopka-jeskaya-korotkii-suhoi.mp3\");\n/* harmony import */ var _audio_lovushka_iz_raspyilitelya_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio/lovushka-iz-raspyilitelya.mp3 */ \"./src/components/board/audio/lovushka-iz-raspyilitelya.mp3\");\n\n\n\n\n\n\n\n\nlet moveHandler;\nlet clickHandler;\nlet disableContextMenu;\n\nfunction removeEvents() {\n  document.removeEventListener('mouseover', moveHandler);\n  document.removeEventListener('mousedown', clickHandler);\n}\n\nfunction setControls(matrix, props) {\n  document.removeEventListener('mouseover', moveHandler);\n  document.removeEventListener('mousedown', clickHandler);\n  document.removeEventListener('contextmenu', disableContextMenu);\n\n  let isMouseDown = false;\n  let mode = true;\n  let mouseMode;\n  let crossMode;\n\n  const audioClick = new Audio();\n  audioClick.src = _audio_knopka_jeskaya_korotkii_dalekii_mp3__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\n  const audioWin = new Audio();\n  audioWin.src = _audio_yes_yes_yes_yes_yes_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\n  const audioCross = new Audio();\n  audioCross.src = _audio_knopka_jeskaya_korotkii_suhoi_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n  const audioClear = new Audio();\n  audioClear.src = _audio_lovushka_iz_raspyilitelya_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\n  function mute(soundMode) {\n    if (soundMode) {\n      audioClick.muted = true;\n      audioWin.muted = true;\n      audioCross.muted = true;\n      audioClear.muted = true;\n    } else {\n      audioClick.muted = false;\n      audioWin.muted = false;\n      audioCross.muted = false;\n      audioClear.muted = false;\n    }\n  }\n\n  document.addEventListener('mousedown', (e) => {\n    isMouseDown = true;\n    mouseMode = e.button;\n\n    if (e.target.className.includes('active') || e.target.className.includes('cross')) {\n      mode = false;\n    } else {\n      mode = true;\n    }\n\n    if (e.target.className.includes('active')) {\n      crossMode = 'active';\n    } else if (e.target.className.includes('cross')) {\n      crossMode = 'cross';\n    }\n  });\n\n  document.addEventListener('mouseup', (e) => {\n    isMouseDown = false;\n    e.preventDefault();\n  });\n\n  moveHandler = function squareMoveHandler(e) {\n    if (!isMouseDown) return;\n    const elem = e.target;\n\n    if (mouseMode === 2) {\n      if (elem.className.includes('square')) {\n        if (mode || crossMode === 'active') {\n          if (!elem.className.includes('square--cross')) {\n            audioCross.play();\n          }\n\n          elem.classList.add('square--cross');\n          elem.classList.remove('square--active');\n        } else {\n          if (elem.className.includes('square--cross')) {\n            audioClear.play();\n          }\n          elem.classList.remove('square--cross');\n        }\n      }\n      if ((0,_checkWin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(matrix, document.querySelectorAll('.board-game .square'), props)) {\n        document.removeEventListener('mouseover', moveHandler);\n        document.removeEventListener('mousedown', clickHandler);\n        (0,_showResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n        audioWin.play();\n      }\n      return;\n    }\n\n    if (elem.className.includes('square')) {\n      if (mode || crossMode === 'cross') {\n        if (!elem.className.includes('square--active')) {\n          audioClick.play();\n        }\n        elem.classList.add('square--active');\n        e.target.classList.remove('square--cross');\n      } else {\n        if (elem.className.includes('square--active')) {\n          audioClear.play();\n        }\n\n        elem.classList.remove('square--active');\n      }\n    }\n\n    if ((0,_checkWin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(matrix, document.querySelectorAll('.board-game .square'), props)) {\n      document.removeEventListener('mouseover', moveHandler);\n      document.removeEventListener('mousedown', clickHandler);\n      (0,_showResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n      audioWin.play();\n    }\n  };\n\n  clickHandler = function squareClickHandler(e) {\n    const elem = e.target;\n\n    if (!elem.className.includes('square')) return;\n\n    if (e.button === 2) {\n      if ((!elem.className.includes('square--cross'))) {\n        audioCross.play();\n      } else {\n        audioClear.play();\n      }\n\n      e.target.classList.remove('square--active');\n      e.target.classList.toggle('square--cross');\n      if ((0,_checkWin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(matrix, document.querySelectorAll('.board-game .square'), props)) {\n        document.removeEventListener('mouseover', moveHandler);\n        document.removeEventListener('mousedown', clickHandler);\n        (0,_showResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n        audioWin.play();\n      }\n      return;\n    }\n\n    if (elem.className.includes('square')) {\n      if (!elem.className.includes('square--active')) {\n        audioClick.play();\n      } else {\n        audioClear.play();\n      }\n      elem.classList.toggle('square--active');\n      elem.classList.remove('square--cross');\n    }\n\n    if ((0,_checkWin__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(matrix, document.querySelectorAll('.board-game .square'), props)) {\n      audioWin.play();\n\n      document.removeEventListener('mouseover', moveHandler);\n      document.removeEventListener('mousedown', clickHandler);\n      (0,_showResult__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    }\n  };\n\n  document.addEventListener('mouseover', moveHandler);\n  document.addEventListener('mousedown', clickHandler);\n\n  disableContextMenu = function disableContextMenuHandler(e) {\n    e.preventDefault();\n  };\n\n  const squares = document.querySelectorAll('.square');\n  console.log(squares);\n  squares.forEach((elem) => {\n    elem.addEventListener('contextmenu', disableContextMenu);\n  });\n\n  return { removeEvents, mute };\n}\n\n\n//# sourceURL=webpack:///./src/components/board/setControls.js?");

/***/ }),

/***/ "./src/components/board/showResult.js":
/*!********************************************!*\
  !*** ./src/components/board/showResult.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showResult)\n/* harmony export */ });\nfunction showResult() {\n  if (document.querySelector('.result-text')) {\n    document.querySelector('.result-text').remove();\n  }\n\n  const gameSection = document.querySelector('.game');\n  document.querySelector('.board').classList.add('board--inactive');\n\n  const p = document.createElement('p');\n  const timeResult = document.querySelector('.board__time').textContent;\n  p.innerText = `Отлично! Вы разгадали нонограмму за ${timeResult.split(':')[0]} минут, ${timeResult.split(':')[1]} секунд!`;\n  p.classList.add('result-text');\n\n  gameSection.prepend(p);\n}\n\n\n//# sourceURL=webpack:///./src/components/board/showResult.js?");

/***/ }),

/***/ "./src/components/puzzles/index.js":
/*!*****************************************!*\
  !*** ./src/components/puzzles/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPuzzles)\n/* harmony export */ });\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/components/puzzles/index.scss\");\n\n\nfunction createPuzzles(props) {\n  const header = document.createElement('section');\n  header.classList.add('puzzles');\n\n  const ul = document.createElement('ul');\n  ul.classList.add('puzzles__list');\n\n  props.allMatricesData[props.modeData].forEach((matrix, key) => {\n    const li = document.createElement('li');\n    li.classList.add('puzzles__item');\n    if (key === props.num) li.classList.add('puzzles__item--active');\n\n    const matrixText = matrix[0];\n    li.textContent = matrixText;\n\n    ul.append(li);\n  });\n\n  header.append(ul);\n\n  return header;\n}\n\n\n//# sourceURL=webpack:///./src/components/puzzles/index.js?");

/***/ }),

/***/ "./src/components/resetGame.js":
/*!*************************************!*\
  !*** ./src/components/resetGame.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createResetButton)\n/* harmony export */ });\nfunction createResetButton(render, allMatricesData, num, timer, mode) {\n  const button = document.createElement('button');\n  button.classList.add('board__reset-button');\n  button.textContent = 'Сбросить игру';\n\n  function resetButtonHandler() {\n    render(allMatricesData, num, timer, mode);\n  }\n\n  button.addEventListener('click', resetButtonHandler);\n\n  return button;\n}\n\n\n//# sourceURL=webpack:///./src/components/resetGame.js?");

/***/ }),

/***/ "./src/components/settings/chooseComplexity.js":
/*!*****************************************************!*\
  !*** ./src/components/settings/chooseComplexity.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ chooseComplexity)\n/* harmony export */ });\nfunction chooseComplexity(render, matrices, props) {\n  const complexities = ['Легко', 'Средне', 'Сложно'];\n  const complexitiesClass = ['', 'game--medium', 'game--hard'];\n\n  const div = document.createElement('div');\n  div.classList.add('settings__complexity-wrapper');\n\n  const h2 = document.createElement('h2');\n  h2.classList.add('settings__complexity-title');\n  h2.textContent = 'Выберите сложность:';\n\n  const ul = document.createElement('ul');\n  ul.classList.add('settings__complexity-list');\n\n  function selectComplexity(e) {\n    let matrixNum;\n\n    if (e.currentTarget.textContent === 'Легко') {\n      matrixNum = 0;\n    } else if (e.currentTarget.textContent === 'Средне') {\n      matrixNum = 1;\n    } else if (e.currentTarget.textContent === 'Сложно') {\n      matrixNum = 2;\n    }\n\n    render(matrices, 0, '00:00', matrixNum);\n\n    if (matrixNum) {\n      document.querySelector('.game').classList.add(complexitiesClass[matrixNum]);\n    }\n  }\n\n  complexities.forEach((complexity, index) => {\n    const li = document.createElement('li');\n    li.classList.add('settings__complexity-item');\n\n    const button = document.createElement('button');\n    button.classList.add('settings__complexity-button');\n    if (index === props.modeData) button.classList.add('settings__complexity-button--active');\n    button.textContent = complexity;\n\n    button.addEventListener('click', selectComplexity);\n\n    li.append(button);\n\n    ul.append(li);\n  });\n\n  div.append(h2);\n  div.append(ul);\n\n  return div;\n}\n\n\n//# sourceURL=webpack:///./src/components/settings/chooseComplexity.js?");

/***/ }),

/***/ "./src/components/settings/createSettings.js":
/*!***************************************************!*\
  !*** ./src/components/settings/createSettings.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createSettings)\n/* harmony export */ });\n/* harmony import */ var _settings_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.scss */ \"./src/components/settings/settings.scss\");\n/* harmony import */ var _chooseComplexity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chooseComplexity */ \"./src/components/settings/chooseComplexity.js\");\n/* harmony import */ var _gameResult__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameResult */ \"./src/components/settings/gameResult.js\");\n/* harmony import */ var _randomGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./randomGame */ \"./src/components/settings/randomGame.js\");\n/* harmony import */ var _showResult__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showResult */ \"./src/components/settings/showResult.js\");\n/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sound */ \"./src/components/settings/sound.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme */ \"./src/components/settings/theme.js\");\n/* harmony import */ var _board_saveGame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../board/saveGame */ \"./src/components/board/saveGame.js\");\n/* harmony import */ var _resetGame__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../resetGame */ \"./src/components/resetGame.js\");\n\n\n\n\n\n\n\n\n\n\nfunction createSettings(render, matrices, props) {\n  const section = document.createElement('section');\n  section.classList.add('settings');\n\n  section.append((0,_chooseComplexity__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(render, matrices, props));\n\n  section.append((0,_sound__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(props.mute));\n  section.append((0,_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n\n  const saveAndLoadButtons = (0,_board_saveGame__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(matrices, render, props.num, props.modeData);\n  saveAndLoadButtons.forEach((elem) => {\n    section.append(elem);\n  });\n\n  section.append((0,_resetGame__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(render, matrices, props.num, '00:00', props.modeData));\n\n  const { button, popup } = (0,_gameResult__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  section.append(button);\n  section.append(popup);\n\n  section.append((0,_showResult__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props));\n\n  section.append((0,_randomGame__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(render, matrices));\n  return section;\n}\n\n\n//# sourceURL=webpack:///./src/components/settings/createSettings.js?");

/***/ }),

/***/ "./src/components/settings/gameResult.js":
/*!***********************************************!*\
  !*** ./src/components/settings/gameResult.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ gameResult)\n/* harmony export */ });\nfunction gameResult() {\n  const button = document.createElement('button');\n  button.classList.add('settings__result-button');\n  button.textContent = 'Показать результаты';\n\n  const popup = document.createElement('div');\n  popup.classList.add('settings__result-popup');\n\n  const popupContent = document.createElement('div');\n  popupContent.classList.add('settings__result-popup-content');\n  popup.append(popupContent);\n\n  const closeButton = document.createElement('button');\n  closeButton.classList.add('settings__result-popup-button');\n\n  popupContent.append(closeButton);\n\n  const ul = document.createElement('ul');\n  ul.classList.add('settings__result-popup-list');\n\n  if (localStorage.getItem('winGames')) {\n    const gamesArr = JSON.parse(localStorage.getItem('winGames')).slice(-5);\n\n    gamesArr.sort((a, b) => {\n      if (+a.time.split(':')[0] < +b.time.split(':')[0]) {\n        return -1;\n      }\n\n      if (+a.time.split(':')[0] === +b.time.split(':')[0]) {\n        if (+a.time.split(':')[1] < +b.time.split(':')[1]) {\n          return -1;\n        }\n      }\n\n      return 0;\n    });\n\n    let listContent = '';\n    gamesArr.forEach((game) => {\n      listContent += `\n        <li class=\"settings__result-popup-item\">\n          <p class=\"settings__result-name\">\n            ${game.name}\n          </p>\n          <p class=\"settings__result-complexity\">\n            ${game.complexity}\n          </p>\n          <p class=\"settings__result-time\">\n            ${game.time}\n          </p>\n        </li>\n      `;\n    });\n    ul.innerHTML = listContent;\n    popupContent.append(ul);\n  } else {\n    button.setAttribute('disabled', 'disabled');\n    popupContent.append(ul);\n  }\n\n  function showPopup() {\n    const popupHTML = document.querySelector('.settings__result-popup');\n    popupHTML.classList.add('settings__result-popup--active');\n\n    document.body.classList.add('off-scroll');\n    window.scrollTo(0, 0);\n  }\n\n  function closePopup() {\n    const popupHTML = document.querySelector('.settings__result-popup');\n    popupHTML.classList.remove('settings__result-popup--active');\n\n    document.body.classList.remove('off-scroll');\n  }\n\n  button.addEventListener('click', showPopup);\n  closeButton.addEventListener('click', closePopup);\n\n  return { button, popup };\n}\n\n\n//# sourceURL=webpack:///./src/components/settings/gameResult.js?");

/***/ }),

/***/ "./src/components/settings/randomGame.js":
/*!***********************************************!*\
  !*** ./src/components/settings/randomGame.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ randomGame)\n/* harmony export */ });\nfunction randomGame(render, allMatricesData) {\n  const button = document.createElement('button');\n  button.classList.add('settings__random-button');\n\n  button.textContent = 'Случайная игра';\n\n  function random(min, max) {\n    const minValue = min - 0.5;\n    const maxValue = max + 0.5;\n\n    const number = minValue + Math.random() * (maxValue - minValue);\n    return Math.round(number);\n  }\n\n  function renderRandomGame() {\n    render(allMatricesData, random(0, 4), '00:00', random(0, 2));\n  }\n\n  button.addEventListener('click', renderRandomGame);\n\n  return button;\n}\n\n\n//# sourceURL=webpack:///./src/components/settings/randomGame.js?");

/***/ }),

/***/ "./src/components/settings/showResult.js":
/*!***********************************************!*\
  !*** ./src/components/settings/showResult.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showResult)\n/* harmony export */ });\nfunction showResult(props) {\n  const button = document.createElement('button');\n  button.classList.add('settings__show-result');\n  button.textContent = 'Показать ответ';\n\n  function showPicture() {\n    const matrix = props.allMatricesData[props.modeData][props.num][1];\n    const squares = document.querySelectorAll('.square');\n\n    let i = 0;\n    matrix.forEach((line) => {\n      line.forEach((elem) => {\n        squares[i].classList.remove('square--active');\n        squares[i].classList.remove('square--cross');\n        if (elem) {\n          squares[i].classList.add('square--fill');\n        }\n        i += 1;\n      });\n    });\n\n    props.stopTimer();\n    props.removeEvents();\n    props.removeListener();\n\n    document.querySelector('.board-result__save-game').setAttribute('disabled', 'disabled');\n  }\n\n  button.addEventListener('click', showPicture);\n\n  return button;\n}\n\n\n//# sourceURL=webpack:///./src/components/settings/showResult.js?");

/***/ }),

/***/ "./src/components/settings/sound.js":
/*!******************************************!*\
  !*** ./src/components/settings/sound.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ sound)\n/* harmony export */ });\nfunction sound(mute) {\n  const div = document.createElement('div');\n  div.classList.add('settings__sound-wrapper');\n\n  const p = document.createElement('p');\n  p.classList.add('settings__sound-text');\n  p.textContent = 'Звук:';\n\n  const button = document.createElement('div');\n  button.classList.add('settings__toggle');\n  button.classList.add('settings__toggle--active');\n\n  div.append(p);\n  div.append(button);\n\n  function buttonHandler() {\n    mute(button.className.includes('settings__toggle--active'));\n\n    button.classList.toggle('settings__toggle--active');\n  }\n\n  button.addEventListener('click', buttonHandler);\n\n  return div;\n}\n\n\n//# sourceURL=webpack:///./src/components/settings/sound.js?");

/***/ }),

/***/ "./src/components/settings/theme.js":
/*!******************************************!*\
  !*** ./src/components/settings/theme.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ theme)\n/* harmony export */ });\nfunction theme() {\n  const div = document.createElement('div');\n  div.classList.add('settings__theme-wrapper');\n\n  const p = document.createElement('p');\n  p.classList.add('settings__theme-text');\n  p.textContent = 'Тема:';\n\n  const toggle = document.createElement('div');\n  toggle.classList.add('settings__toggle');\n\n  div.append(p);\n  div.append(toggle);\n\n  if (localStorage.getItem('theme') === 'dark') {\n    document.body.classList.add('dark');\n    toggle.classList.add('settings__toggle--active');\n  }\n\n  function toggleTheme(e) {\n    e.currentTarget.classList.toggle('settings__toggle--active');\n\n    document.body.classList.toggle('dark');\n\n    if (localStorage.getItem('theme') === 'dark') {\n      localStorage.setItem('theme', 'light');\n    } else {\n      localStorage.setItem('theme', 'dark');\n    }\n  }\n\n  toggle.addEventListener('click', toggleTheme);\n\n  return div;\n}\n\n\n//# sourceURL=webpack:///./src/components/settings/theme.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _components_board_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/board/board */ \"./src/components/board/board.js\");\n/* harmony import */ var _components_puzzles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/puzzles */ \"./src/components/puzzles/index.js\");\n/* harmony import */ var _components_board_createStopWatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/board/createStopWatch */ \"./src/components/board/createStopWatch.js\");\n/* harmony import */ var _components_settings_createSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings/createSettings */ \"./src/components/settings/createSettings.js\");\n/* harmony import */ var _components_board_setControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/board/setControls */ \"./src/components/board/setControls.js\");\n\n\n\n\n\n\n\nconst matricesEasy = [\n  [\n    'Крест',\n    [\n      [1, 0, 0, 0, 1],\n      [0, 1, 0, 1, 0],\n      [0, 0, 1, 0, 0],\n      [0, 1, 0, 1, 0],\n      [1, 0, 0, 0, 1],\n    ],\n  ],\n  [\n    'Цветок',\n    [\n      [0, 0, 1, 0, 0],\n      [0, 1, 0, 1, 0],\n      [0, 0, 1, 0, 0],\n      [0, 0, 1, 0, 0],\n      [0, 0, 1, 0, 0],\n    ],\n  ],\n  [\n    'Сердце',\n    [\n      [0, 1, 0, 1, 0],\n      [1, 0, 1, 0, 1],\n      [1, 0, 0, 0, 1],\n      [0, 1, 0, 1, 0],\n      [0, 0, 1, 0, 0],\n    ],\n  ],\n  [\n    'Солнце',\n    [\n      [0, 0, 1, 0, 0],\n      [0, 1, 1, 1, 0],\n      [1, 1, 0, 1, 1],\n      [0, 1, 1, 1, 0],\n      [0, 0, 1, 0, 0],\n    ],\n  ],\n  [\n    'Лестница',\n    [\n      [1, 0, 0, 0, 0],\n      [1, 1, 0, 0, 0],\n      [1, 1, 1, 0, 0],\n      [1, 1, 1, 1, 0],\n      [1, 1, 1, 1, 1],\n    ],\n  ],\n];\n\nconst matricesMedium = [\n  [\n    'Пальма',\n    [\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],\n      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],\n      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],\n      [0, 0, 0, 0, 1, 0, 1, 0, 1, 0],\n      [0, 0, 0, 1, 0, 1, 1, 1, 0, 1],\n      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    ],\n  ],\n  [\n    'Лодка',\n    [\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],\n      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],\n      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],\n    ],\n  ],\n  [\n    'Red John',\n    [\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],\n      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],\n      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n    ],\n  ],\n  [\n    'Курица',\n    [\n      [0, 0, 1, 0, 0, 0, 1, 1, 0, 0],\n      [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],\n      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],\n      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],\n      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],\n    ],\n  ],\n  [\n    'RS',\n    [\n      [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],\n      [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],\n      [1, 0, 0, 1, 1, 0, 1, 0, 0, 0],\n      [1, 0, 0, 1, 1, 0, 1, 1, 0, 0],\n      [1, 0, 0, 1, 0, 0, 0, 1, 1, 1],\n      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],\n      [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],\n      [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],\n      [1, 0, 0, 1, 1, 0, 0, 0, 1, 1],\n      [1, 0, 0, 0, 1, 0, 1, 1, 1, 0],\n    ],\n  ],\n];\n\nconst matricesHard = [\n  [\n    'Город',\n    [\n      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],\n      [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],\n      [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0],\n      [0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0],\n      [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],\n      [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],\n      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],\n      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],\n      [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    ],\n  ],\n  [\n    'Вишня',\n    [\n      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n      [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],\n      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],\n      [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1],\n      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],\n      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],\n      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],\n      [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],\n      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],\n      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],\n      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],\n      [0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],\n    ],\n  ],\n  [\n    'Страус',\n    [\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],\n      [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],\n      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],\n      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],\n      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],\n      [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],\n      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],\n    ],\n  ],\n  [\n    'Лошадь',\n    [\n      [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],\n      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],\n      [1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0],\n      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0],\n      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],\n      [1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0],\n      [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],\n      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],\n      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],\n      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],\n      [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],\n    ],\n  ],\n  [\n    'Корона',\n    [\n      [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],\n      [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],\n      [1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],\n      [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],\n      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],\n      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],\n      [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0],\n      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],\n      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],\n      [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],\n      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0],\n      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],\n      [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],\n    ],\n  ],\n];\n\nconst allMatrices = [matricesEasy, matricesMedium, matricesHard];\n\nconst nonogramNum = 0;\nconst mode = 0;\n\nconst complexitiesClass = ['', 'game--medium', 'game--hard'];\n\nfunction render(allMatricesData, num, timer, modeData) {\n  if (document.body.innerText) document.body.innerText = '';\n\n  function puzzleCardsHandler(key, renderFunc) {\n    return function () {\n      renderFunc(allMatricesData, key, '00:00', modeData);\n    };\n  }\n\n  const main = document.createElement('main');\n  main.classList.add('main');\n\n  const container = document.createElement('container');\n  container.classList.add('container');\n  main.append(container);\n\n  container.append((0,_components_puzzles__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({ allMatricesData, modeData, num }));\n\n  const boardHTML = (0,_components_board_board__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(allMatricesData[modeData][num][1]);\n  container.append(boardHTML);\n\n  document.body.append(main);\n\n  const { watchTimer, stopTimer, removeListener } = (0,_components_board_createStopWatch__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n    allMatricesData[modeData][num][1],\n    timer,\n  );\n\n  const { removeEvents, mute } = (0,_components_board_setControls__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(allMatricesData[modeData][num][1], {\n    allMatricesData, num, modeData, stopTimer,\n  });\n\n  const settings = (0,_components_settings_createSettings__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(render, allMatricesData, {\n    allMatricesData, num, modeData, stopTimer, removeEvents, removeListener, mute,\n  });\n\n  container.append(settings);\n\n  const puzzleCards = document.querySelectorAll('.puzzles__item');\n  puzzleCards.forEach((card, index) => {\n    card.addEventListener('click', puzzleCardsHandler(index, render));\n  });\n\n  document.querySelector('.board').append(watchTimer);\n\n  if (modeData) {\n    document.querySelector('.game').classList.add(complexitiesClass[modeData]);\n  }\n}\n\nrender(allMatrices, nonogramNum, '00:00', mode);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;