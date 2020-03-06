/* eslint-disable react/prop-types */
import React from 'react'
import Member from './member'
import { Paper, Grid, InputLabel, Select, MenuItem } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../redux/actions/agents'
import { addMember } from '../../redux/actions/team'

const Team = ({ teamId }) => {
    const { members = [], name = '', agents } = useSelector(({ teams, agents }) => ({ members: teams[teamId].members, name: teams[teamId].name, agents }))

    const dispatch = useDispatch()

    if (!agents || agents.length === 0) {
        (async () => {
            await dispatch(getUsers())
        })()
    }

    return (
        <Paper>
                    Name: {name}
            {
                members.map((member, idx) => (
                    <Member member={member} key={idx}/>
                ))
            }
            <Grid item xs={12} >
                <InputLabel id="competenceSelect">Members</InputLabel>
                <Select
                    labelId="competenceSelect"
                    id="demo-controlled-open-select"
                    multiple
                    value={members}
                    onChange={e => dispatch(addMember(e.target.value, teamId))}
                >
                    {agents.map((c, idx) => (
                        <MenuItem value={c} key={idx} >{c.email}</MenuItem>
                    ))}
                </Select>
            </Grid>
        </Paper>
    )
}

export default Team
