/* eslint-disable react/prop-types */
import React from 'react'
import { Avatar, Paper } from '@material-ui/core'

const Member = ({ member }) => {
    console.log({ member })
    return (
        <Paper>
            <Avatar>{member.email.charAt(0)}</Avatar>
            {member.email}
        </Paper>
    )
}

export default Member
