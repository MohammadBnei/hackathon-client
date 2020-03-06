/* eslint-disable react/prop-types */
import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

export default function Agent ({ agentId }) {
    const classes = useStyles()

    const agent = useSelector(({ agents }) => agents[agentId])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Agent
                </Typography>
                <div className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            First name : {
                                agent.name?.firstName // eslint-disable-line
                            } 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           Last name :  {agent.name?.lastName}
                        </Grid>
                        <Grid item xs={12}>
                            Email : {agent.email}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Role : {agent.status?.role}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            Competences : {agent.status.competences.join(', ')}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}
