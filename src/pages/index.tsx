import * as React from 'react'
import Link from 'next/link'
import Logo from '#/components/Logo'

export default class HomePage extends React.Component {
  render () {
    return (
      <>
        <Logo/>
        <div className='main-menu'>
          <Link href='/game'>
            <a>New Game</a>
          </Link>
        </div>
      </>
    )
  }
}
