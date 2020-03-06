/* eslint-disable react/prop-types */
import React from 'react'
import { Avatar, Paper } from '@material-ui/core'

const Member = ({ member }) => {
    return (
        <Paper>
            <Avatar>{member.name[0]}</Avatar>
            <Paper>{member.name}</Paper>
        </Paper>
    )
}

export default Member
