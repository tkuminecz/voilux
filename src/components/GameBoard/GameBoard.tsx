import * as React from 'react'
import Light from '#/components/Light'

interface Props {
  size?: number,
}

interface State {
  board: boolean[][],
}

export default class GameBoard extends React.Component<Props, State> {

  state = {
    board: []
  }

  constructor (props) {
    super(props)
    this.state.board = this.generateBoard(props.size)
  }

  generateBoard = (size: number) => {
    return iterate(size, () =>
      iterate(size, () => false))
  }

  getBoard = (size: number) => {
    return iterate(size, (y) =>
      <div className='row' key={y}>
        {iterate(size, (x) =>
          <div className='col' key={x}>
            <Light
              on={this.state.board[x][y]}
              onPress={() => this.toggleLight(x, y)}
            />
          </div>)}
      </div>)
  }

  toggleLight = (targetX: number, targetY: number) => {
    const oldBoard = this.state.board
    const newBoard = oldBoard.map((col, x) =>
      col.map((lit, y) => {
        return (x === targetX && y === targetY)
          ? !lit
          : lit
      }))

    this.setState({
      board: newBoard
    })
  }

  render () {
    const size = this.props.size || 8
    return this.getBoard(size)
  }

}

function iterate<A> (times: number, cb: (i: number) => A): A[] {
  const arr = []
  for (let i = 0; i < times; i++) {
    arr.push(null)
  }
  return arr.map((_, i) => cb(i))
}
