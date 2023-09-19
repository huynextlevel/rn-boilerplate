import { getToken, resetAppState } from 'src/store/actions/app'

export interface AppState {
  token: string
}

export type AppActions =
  | ReturnType<typeof getToken>
  | ReturnType<typeof resetAppState>