import React, { useState, useEffect } from 'react'
import { Paper, Grid, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import Agent from './agent'
import CreateAgent from './createAgent'
import { getUsers } from '../../redux/actions/agents'

const Agents = () => {
    const { agents } = useSelector(({ agents }) => ({ agents }))

    const dispatch = useDispatch()

    const [toggleAddAgentModal, setToggleAddAgentModal] = useState(false)

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <Paper>
            Agents
            <Grid container spacing={3}>
                {
                    agents.map((_, idx) => {
                        return (
                            <Grid item xs={6} key={idx}>
                                <Agent agentId={idx}/>
                            </Grid>
                        )
                    }
                    )
                }
                <Grid item xs={12} >
                    <Button onClick={() => setToggleAddAgentModal(true)} variant="contained" color="primary">
                        Create an agent
                    </Button>
                </Grid>
                {toggleAddAgentModal && (
                    <Grid item xs={12} >
                        <CreateAgent toggleView={() => setToggleAddAgentModal(false)} />
                    </Grid>
                )}
            </Grid>
        </Paper>
    )
}

export default Agents
