import * as React from 'react'
import Link from 'next/link'
import Logo from '#/components/Logo'
import WinCounter from '#/components/WinCounter'

export default class HomePage extends React.Component {
  render () {
    return (
      <>
        <Logo/>
        <WinCounter/>
        <div className='main-menu'>
          <Link href='/game'>
            <a>New Game</a>
          </Link>
        </div>
      </>
    )
  }
}
