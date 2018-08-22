import { all } from 'redux-saga/effects'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export function increment () {
  return { type: INCREMENT }
}

export function decrement () {
  return { type: DECREMENT }
}

const initialState = 0

export const getCount = (state) => state.count

export const reducers = {
  count: (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1

      case DECREMENT:
        return state - 1

      default:
        return state
    }
  }
}

export function* saga () {
  yield all([])
}
