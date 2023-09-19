import { createLogger } from 'redux-logger'
import { compose, applyMiddleware, legacy_createStore as createStore } from 'redux'

import reducers from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose,
  logger = createLogger({
    predicate: (getState, action) => {
      return (__DEV__)
    },
  })

export default function configureStore() {
  const enhancers = composeEnhancers(applyMiddleware(logger))

  const store = createStore(reducers, enhancers)

  return store
}

export const appStore = configureStore()
