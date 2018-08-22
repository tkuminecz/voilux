import * as React from 'react'
import { connect } from 'react-redux'
import { createBoard } from '#/actions/game'

interface Props {
  createBoard: (size: number) => void,
}

class NoBoard extends React.Component<Props> {

  createBoard = () => {
    this.props.createBoard(10)
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
