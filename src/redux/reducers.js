export const types = {
  INC_X_WIN: "INC_X_WIN",
  INC_O_WIN: "INC_O_WIN",
  INC_DRAW: "INC_DRAW",
  MOVE: "MOVE",
  NEW_GAME: "NEW_GAME",
  RESET_GAME: "RESET_GAME",
  WHO_MOVE_FIRST: 'WHO_MOVE_FIRST'
};

// Initial state
export const initialState = {
  isNewGame: true,
  isGameEnd: false,
  xWin: 0,
  oWin: 0,
  draw: 0,
  isXMove: false,
  squares: Array(9).fill(null)
};

// Root reducer
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INC_X_WIN:
      return {
        ...state,
        xWin: state.xWin + 1,
        isGameEnd: true,
      };

    case types.INC_O_WIN:
      return {
        ...state,
        oWin: state.oWin + 1,
        isGameEnd: true,
      };

    case types.INC_DRAW:
      return {
        ...state,
        draw: state.draw + 1,
        isGameEnd: true,
      }

    case types.MOVE:
      return {
        ...state,
        squares: action.squares,
        isXMove: !state.isXMove
      };

    case types.NEW_GAME:
      return {
        ...state,
        isNewGame: true,
        isGameEnd: false,
        isXMove: false,
        squares: Array(9).fill(null)
      };

    case types.RESET_GAME:
      return { ...initialState };

    case types.WHO_MOVE_FIRST:
      return {
        ...state,
        isXMove: action.isXMoveFirst,
        isNewGame: false
      }

    default:
      return state;
  }
};

export default rootReducer;
