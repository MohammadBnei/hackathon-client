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
import { MY_ACCOUNT } from '../../redux/enums'

export const mainListItems = (handleUpdateDisplay) => (
    <div>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="All Projects" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DynamicFeedIcon />
            </ListItemIcon>
            <ListItemText primary="My Project" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Teams" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Agents" />
        </ListItem>
    </div>
)

export const secondaryListItems = (handleUpdateDisplay) => (
    <div>
        <ListSubheader inset>Settings</ListSubheader>
        <ListItem button onClick={() => handleUpdateDisplay(MY_ACCOUNT)}>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="My account" />
        </ListItem>
    </div>
)
