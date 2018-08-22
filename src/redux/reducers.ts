import { reducers as counterReducers } from '#/actions/counter'
import { combineReducers } from 'redux'

export default combineReducers({
  ...counterReducers
})
