import {
    ADD_USER,
    ADD_USERS
} from '../actionTypes'

export default function (state = [], { type, payload }) {
    switch (type) {
    case ADD_USER:
        return [...state, payload]
    case ADD_USERS:
        return [...state, ...payload]
    default:
        return state
    }
}
