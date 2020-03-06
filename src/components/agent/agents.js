import React from 'react'
import { Paper, Grid, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Agent from './agent'

const Agents = () => {
    const { agents } = useSelector(({ agents }) => ({ agents }))

    return (
        <Paper>
            Agents
            <Grid container spacing={3}>
                {
                    agents.map((_, idx) => {
                        console.log({ idx })
                        return (
                            <Grid item xs={12} key={idx}>
                                <Agent agentId={idx}/>
                            </Grid>
                        )
                    }
                    )
                }
                <Grid item xs={12} >
                    <Button variant="contained" color="primary">
                        Create an agent
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Agents
