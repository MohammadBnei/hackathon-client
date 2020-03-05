import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth'
import user from './user'
import dashboard from './dashboard'

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    auth,
    user,
    dashboard
})

export default createRootReducer
