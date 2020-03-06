import {
    ADD_USER
} from '../actionTypes'

export default function (state = [], { type, payload }) {
    switch (type) {
    case ADD_USER:
        return [...state, payload]
    default:
        return state
    }
}
