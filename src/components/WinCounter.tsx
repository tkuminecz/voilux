import * as React from 'react'
import { connect } from 'react-redux'
import { getWinCount } from '#/actions/game'

interface Props {
  count: number
}

const WinCounter = (props: Props) => (
  <div>
    Total Wins: {props.count}
  </div>
)

export default connect(
  (state) => ({
    count: getWinCount(state)
  })
)(WinCounter)
