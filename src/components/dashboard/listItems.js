import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import PeopleIcon from '@material-ui/icons/People'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed'
import ContactsIcon from '@material-ui/icons/Contacts'
import AssignmentIcon from '@material-ui/icons/Assignment'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import {
    MY_ACCOUNT, ALL_PROJECTS,
    MY_PROJECTS,
    TEAMS,
    AGENTS
} from '../../redux/enums'
import { UPDATE_DASHBOARD_DISPLAY } from '../../redux/actionTypes'
import { useDispatch } from 'react-redux'
import { List } from '@material-ui/core'

const updateDashboardDisplayMaker = (dispatch) => (display) => dispatch({ type: UPDATE_DASHBOARD_DISPLAY, payload: display })

export const MainListItems = () => {
    const dispatch = useDispatch()

    const updateDashboardDisplay = updateDashboardDisplayMaker(dispatch)
    return (
        <List>
            <ListItem button onClick={() => updateDashboardDisplay(ALL_PROJECTS)}>
                <ListItemIcon>
                    <DynamicFeedIcon />
                </ListItemIcon>
                <ListItemText primary="All Projects" />
            </ListItem>
            <ListItem button onClick={() => updateDashboardDisplay(MY_PROJECTS)}>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="My Project" />
            </ListItem>
            <ListItem button onClick={() => updateDashboardDisplay(TEAMS)}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Teams" />
            </ListItem>
            <ListItem button onClick={() => updateDashboardDisplay(AGENTS)}>
                <ListItemIcon>
                    <ContactsIcon />
                </ListItemIcon>
                <ListItemText primary="Agents" />
            </ListItem>
        </List>
    )
}

export const SecondaryListItems = () => {
    const dispatch = useDispatch()

    const updateDashboardDisplay = updateDashboardDisplayMaker(dispatch)

    return (
        <List>
            <ListSubheader inset>Settings</ListSubheader>
            <ListItem button onClick={() => updateDashboardDisplay(MY_ACCOUNT)}>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="My account" />
            </ListItem>
        </List>
    )
}
