import {
    ADD_USER
} from '../actionTypes'

export function addUser (userObj) {
    return (dispatch) => {
        dispatch({ type: ADD_USER, payload: userObj })
    }
}
