
const CREATE_BOARD = 'CREATE_BOARD'
const TOGGLE_LIGHT = 'TOGGLE_LIGHT'

export function createBoard (size: number) {
  return { type: CREATE_BOARD, size }
}

export function toggleLight (x: number, y: number) {
  return { type: TOGGLE_LIGHT, x, y }
}

const initialState = {
  board: null,
  won: false
}

export const getBoard = (state) => state.game.board
export const getHasWon = (state) => state.game.won

export const reducers = {
  game: (state = initialState, action) => {
    switch (action.type) {
      case CREATE_BOARD:
        return {
          ...state,
          board: generateBoard(action.size),
          won: false
        }

      case TOGGLE_LIGHT: {
        const newBoard = toggleBoardLight(state.board, action.x, action.y)
        return {
          ...state,
          board: newBoard,
          won: hasWon(newBoard)
        }
      }

      default:
        return state
    }
  }
}

function generateBoard (size: number, defaultRounds?: number): boolean[][] {
  let board = []
  for (let row = 0; row < size; row++) {
    const rowArr = []
    for (let col = 0; col < size; col++) {
      rowArr.push(false)
    }
    board.push(rowArr)
  }

  const rand = () => Math.floor(Math.random() * (size - 2) + 1)
  const genRounds = () => Math.floor(Math.random() * (size / 2) + 2)

  const rounds = defaultRounds || genRounds()
  for (let round = 0; round < rounds; round++) {
    board = toggleBoardLight(board, rand(), rand())
  }

  return board
}

function toggleBoardLight (board: boolean[][], tx: number, ty: number) {
  return board.map((row, y) =>
    row.map((lit, x) =>
      (shouldToggle(tx, ty, x, y))
        ? !lit
        : lit))
}

function shouldToggle (targetX: number, targetY: number, checkX: number, checkY: number): boolean {
  if (checkX === targetX - 1 && checkY === targetY) return true
  if (checkX === targetX + 1 && checkY === targetY) return true
  if (checkY === targetY - 1 && checkX === targetX) return true
  if (checkY === targetY + 1 && checkX === targetX) return true
  return false
}

function hasWon (board: boolean[][]): boolean {
  return !(board.filter(row => row.filter(lit => lit === true).length > 0).length > 0)
}
