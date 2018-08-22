import * as React from 'react'
import { connect } from 'react-redux'
import config from '#/config'
import { createBoard, getBoard, getHasWon, toggleLight } from '#/actions/game'
import Light from '#/components/Light'
import NoBoard from '#/components/NoBoard'

interface Props {
  board: boolean[][],
  createBoard: (size: number) => void,
  hasWon: boolean,
  toggleLight: (x: number, y: number) => void,
}

class GameBoard extends React.Component<Props> {

  get boardSize () {
    return this.props.board.length
  }

  get boardStyles () {
    return {
      marginLeft: `-${this.boardSize}rem`,
      marginTop: `-${this.boardSize}rem`
    }
  }

  startNewGame = () => {
    this.props.createBoard(config.defaultBoardSize)
  }

  toggleLight = (x: number, y: number) => {
    this.props.toggleLight(x, y)
  }

  renderBoard = (board) => {
    return (
      <div className='board' style={this.boardStyles}>
        {board.map((row, y) =>
          <div className='row' key={y}>
            {row.map((lit, x) =>
              <div className='col' key={x}>
                <Light
                  on={lit}
                  onPress={() => this.toggleLight(x, y)}
                />
              </div>)}
          </div>)}
      </div>
    )
  }

  render () {
    const { board, hasWon } = this.props

    if (board) {
      if (hasWon) {
        return (
          <div className='board-wrapper'>
            <div
              className='win-banner'
              style={{
                marginLeft: this.boardStyles.marginLeft,
                width: `${this.boardSize * 2}rem`
              }}
            >
              You've won!
              <p>
                <button onClick={this.startNewGame}>Start a new game</button>
              </p>
            </div>
          </div>
        )
      } else {
        return (
          <div className='board-wrapper'>
            {this.renderBoard(board)}
          </div>
        )
      }
    } else {
      return <NoBoard />
    }
  }

}

export default connect(
  (state) => ({
    board: getBoard(state),
    hasWon: getHasWon(state)
  }),
  { createBoard, toggleLight }
)(GameBoard)
