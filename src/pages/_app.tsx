import * as React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { withReduxSaga } from '#/redux/store'

interface Props {
  store: any
}

class MyApp extends App<Props> {
  render () {
    const { Component, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component/>
        </Provider>
      </Container>
    )
  }
}

export default withReduxSaga(MyApp)
