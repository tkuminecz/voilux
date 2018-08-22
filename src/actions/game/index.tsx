
const CREATE_BOARD = 'CREATE_BOARD'
const TOGGLE_LIGHT = 'TOGGLE_LIGHT'

export function createBoard (size: number) {
  return { type: CREATE_BOARD, size }
}

export function toggleLight (x: number, y: number) {
  return { type: TOGGLE_LIGHT, x, y }
}

const initialState = null

export const reducers = {
  board: (state = initialState, action) => {
    switch (action.type) {
      case CREATE_BOARD:
        return generateBoard(action.size)

      case TOGGLE_LIGHT:
        return toggleBoardLight(state, action.x, action.y)

      default:
        return state
    }
  }
}

function generateBoard (size: number): boolean[][] {
  return new Array(size).map(() =>
    new Array(size).map(() => false))
}

function toggleBoardLight (board: boolean[][], tx: number, ty: number) {
  return board.map((col, x) =>
    col.map((lit, y) =>
      (x === tx && y === ty)
        ? !lit
        : lit))
}
