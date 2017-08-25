import {createStore, applyMiddleware, compose} from 'redux'

import rootReducer from './rootReducer'

import logger from './middlewares/logger'
import promise from "./middlewares/promise"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(promise, logger)
  )
)

export default store