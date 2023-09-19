import {
  GET_TOKEN,
  RESET_APP_STATE
} from 'src/store/actions'

export const getToken = (token: string) => ({
  type: GET_TOKEN as typeof GET_TOKEN,
  token
})

export const resetAppState = () => ({
  type: RESET_APP_STATE as typeof RESET_APP_STATE
})
