import {
    CREATE_TEAM,
    DELETE_TEAM,
    ADD_MEMBER,
    REMOVE_MEMBER
} from '../actionTypes'

export function createTeam (newTeam) {
    return (dispatch) => {
        dispatch({ type: CREATE_TEAM, payload: newTeam })
    }
}

export function deleteTeam (teamId) {
    return (dispatch) => {
        dispatch({ type: DELETE_TEAM, payload: teamId })
    }
}

export function addMember (member, teamId) {
    return (dispatch) => {
        dispatch({ type: ADD_MEMBER, payload: { member: member[0], teamId } })
    }
}

export function removeMember (memberId, teamId) {
    return (dispatch) => {
        dispatch({ type: REMOVE_MEMBER, payload: { memberId, teamId } })
    }
}
