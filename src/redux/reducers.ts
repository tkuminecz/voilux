import { reducers as counterReducers } from '#/actions/counter'
import { reducers as gameReducers } from '#/actions/game'
import { combineReducers } from 'redux'

export default combineReducers({
  ...counterReducers,
  ...gameReducers
})
