import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import auth from './auth'
import user from './user'
import dashboard from './dashboard'
import teams from './teams'
import agents from './agents'

import { ERROR } from '../actionTypes'

const error = (state = { errors: [] }, { type, payload }) => {
    switch (type) {
    case ERROR:
        return {
            ...state,
            errors: [...state.errors, payload]
        }
    default:
        return state
    }
}

const createRootReducer = history => combineReducers({
    router: connectRouter(history),
    auth,
    user,
    dashboard,
    teams,
    agents,
    error
})

export default createRootReducer
