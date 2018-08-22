import * as React from 'react'
import Link from 'next/link'
import GameBoard from '#/components/GameBoard'
import WinCounter from '#/components/WinCounter'

export default () => (
  <>
    <p>
      <Link href='/'>
        <a>&laquo; Back to main menu</a>
      </Link>
    </p>
    <WinCounter/>
    <GameBoard/>
  </>
)
