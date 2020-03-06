import {
    CREATE_TEAM,
    DELETE_TEAM,
    ADD_MEMBER,
    REMOVE_MEMBER
} from '../actionTypes'

const INITIAL_STATE = {
    teams: []
}

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
    case CREATE_TEAM: {
        console.log({ payload })
        const teams = [...state.teams, payload]
        return { ...state, teams }
    }
    case DELETE_TEAM: {
        const teams = state.teams.filter(({ id }) => id !== payload)
        return { ...state, teams }
    }
    case ADD_MEMBER: {
        const teams = payload
        return { ...state, teams }
    }
    case REMOVE_MEMBER: {
        return { ...state, teams: payload }
    }
    default:
        return state
    }
}
