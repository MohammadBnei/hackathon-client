/* eslint-disable react/prop-types */
import React from 'react'
import Member from './member'
import { Paper } from '@material-ui/core'
import { useSelector } from 'react-redux'

const Team = ({ teamId }) => {
    const { members } = useSelector(({ teams }) => teams.teams[teamId])
    return (
        <Paper>
            {
                members.map((member, idx) => (
                    <Member member={member} key={idx}/>
                ))
            }
        </Paper>
    )
}

export default Team
