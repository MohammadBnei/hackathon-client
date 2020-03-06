import axios from 'axios'
import {
    ADD_USER, ADD_USERS
} from '../actionTypes'

const ROOT_URL = process.env.API_URI || 'http://localhost:3000'
axios.defaults.baseURL = ROOT_URL

if (localStorage.getItem('auth_jwt_token')) {
    axios.defaults.headers.common.Authorization = localStorage.getItem('auth_jwt_token')
}

export function addUser (userObj) {
    return (dispatch) => {
        dispatch({ type: ADD_USER, payload: userObj })
    }
}

export function getUsers () {
    return (dispatch) => {
        axios.get('/user/all').then(({ data }) => {
            dispatch({ type: ADD_USERS, payload: data })
        })
    }
}
