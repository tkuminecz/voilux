import * as React from 'react'
import { connect } from 'react-redux'
import { decrement, getCount, increment } from '#/actions/counter'

interface Props {
  count?: number
  decrement?: () => void,
  increment?: () => void
}

class Counter extends React.Component<Props> {

  decrement = () => {
    this.props.decrement()
  }

  increment = () => {
    this.props.increment()
  }

  render () {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onClick={this.increment}>
          Increment
        </button>
        <button onClick={this.decrement}>
          Decrement
        </button>
      </div>
    )
  }

}

export default connect(
  (state) => ({
    count: getCount(state)
  }),
  { decrement, increment }
)(Counter)
