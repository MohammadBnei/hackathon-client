import React from 'react'
import Team from './team'
import { Paper, Grid, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'

import { createTeam as createTeamAction } from '../../redux/actions/team'

const Teams = () => {
    const { teams } = useSelector(({ teams }) => ({ teams }))

    const dispatch = useDispatch()

    const createTeam = () => {
        dispatch(createTeamAction({
            name: 'New team',
            members: []
        }))
    }

    return (
        <Paper>
            Teams
            <Grid container spacing={3}>
                {
                    teams.map((team, idx) => {
                        return (
                            <Grid item xs={12} key={idx}>
                                <Team teamId={idx}/>
                            </Grid>
                        )
                    }
                    )
                }
                <Grid item xs={12} >
                    <Button onClick={createTeam} variant="contained" color="primary">
                        Create a team
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Teams
