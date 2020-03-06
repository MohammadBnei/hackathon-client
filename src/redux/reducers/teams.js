import {
    CREATE_TEAM,
    DELETE_TEAM,
    ADD_MEMBER,
    REMOVE_MEMBER
} from '../actionTypes'

export default function (state = [], { type, payload }) {
    switch (type) {
    case CREATE_TEAM: {
        const teams = [...state, payload]
        return [...teams]
    }
    case DELETE_TEAM: {
        const teams = state.teams.filter(({ id }) => id !== payload)
        return [...teams]
    }
    case ADD_MEMBER: {
        const { member, teamId } = payload
        const teams = [...state]
        teams[teamId].members.push(member)
        return [...teams]
    }
    case REMOVE_MEMBER: {
        return [...payload]
    }
    default:
        return state
    }
}
