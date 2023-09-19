import {
  GET_TOKEN,
  RESET_APP_STATE
} from 'src/store/actions'

import { AppState, AppActions } from 'src/store/types/app'

const initialState: AppState = {
  token: ''
}

const reducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_TOKEN:
      return Object.assign({}, state, {
        token: action.token
      })
    case RESET_APP_STATE:
      return initialState
    default:
      return state
  }
}

export default reducer