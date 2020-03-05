import {
    UPDATE_DASHBOARD_DISPLAY
} from '../actionTypes'

export default function (state = {}, { type, payload }) {
    switch (type) {
    case UPDATE_DASHBOARD_DISPLAY:
        return { ...state, display: payload }
    default:
        return state
    }
}
