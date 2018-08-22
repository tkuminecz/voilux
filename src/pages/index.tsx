import * as React from 'react'
import Counter from '#/components/Counter'
import Logo from '#/components/Logo'

export default class HomePage extends React.Component {
  render () {
    return (
      <>
        <Logo/>
        <Counter/>
      </>
    )
  }
}
