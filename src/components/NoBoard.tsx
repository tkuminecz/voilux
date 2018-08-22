import * as React from 'react'
import { connect } from 'react-redux'
import { createBoard } from '#/actions/game'
import config from '#/config'

interface Props {
  createBoard: (size: number) => void,
}

class NoBoard extends React.Component<Props> {

  createBoard = () => {
    this.props.createBoard(config.defaultBoardSize)
  }

  render () {
    return (
      <p>
        There's no board yet...<br/>
        <button onClick={this.createBoard}>Create one</button>
      </p>
    )
  }

}

export default connect(
  () => ({}),
  { createBoard }
)(NoBoard)
