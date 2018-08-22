import * as React from 'react'
import { connect } from 'react-redux'
import { getBoard, toggleLight } from '#/actions/game'
import Light from '#/components/Light'
import NoBoard from '#/components/NoBoard'

interface Props {
  board: boolean[][],
  toggleLight: (x: number, y: number) => void,
}

class GameBoard extends React.Component<Props> {

  renderBoard = (board) => {
    return board.map((row, y) =>
      <div className='row' key={y}>
        {row.map((lit, x) =>
          <div className='col' key={x}>
            <Light
              on={lit}
              onPress={() => this.toggleLight(x, y)}
            />
          </div>)}
      </div>)
  }

  toggleLight = (x: number, y: number) => {
    this.props.toggleLight(x, y)
  }

  render () {
    const { board } = this.props

    return (board)
      ? this.renderBoard(board)
      : <NoBoard />
  }

}

export default connect(
  (state) => ({
    board: getBoard(state)
  }),
  { toggleLight }
)(GameBoard)
