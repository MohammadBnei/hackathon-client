import axios from 'axios'
import {
    GET_USER_PROFILE, ERROR
} from '../actionTypes'

export function updateUser (userObj) {
    return (dispatch) => {
        axios
            .post('/user/update', userObj)
            .then(({ data }) => {
                dispatch({ type: GET_USER_PROFILE, payload: data })
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: ERROR, payload: error.response })
            })
    }
}

export function fetchUser () {
    return (dispatch) => {
        axios
            .get('/user/profile')
            .then(({ data }) => {
                dispatch({ type: GET_USER_PROFILE, payload: data })
            })
            .catch(error => {
                console.log(error)
                dispatch({ type: ERROR, payload: error.response })
            })
    }
}

const request = axios
export { request }
