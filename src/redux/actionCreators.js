import { types } from "./reducers";

export const increaseXWinCounter = () => ({
  type: types.INC_X_WIN
});

export const increaseOWinCounter = () => ({
  type: types.INC_O_WIN
});

export const increaseDrawCounter = () => ({
  type: types.INC_DRAW
})

export const move = (squares) => ({
  type: types.MOVE,
  squares: squares
});

export const newGame = () => ({
  type: types.NEW_GAME
});

export const resetGame = () => ({
  type: types.RESET_GAME
});

export const setFirstPlayer = (isXMoveFirst) => ({
  type: types.WHO_MOVE_FIRST,
  isXMoveFirst: isXMoveFirst
});
