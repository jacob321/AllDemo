// import { createStore } from 'redux'
import { createStore, applyMiddleware } from './s-redux'
import reducer from './reducer'
import { logger } from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger))

export default store
