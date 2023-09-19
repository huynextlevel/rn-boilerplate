import { combineReducers } from 'redux'

import appReducer from './app'

const reducer = combineReducers({
  app: appReducer
})

export type RootState = ReturnType<typeof reducer>
export default reducer
