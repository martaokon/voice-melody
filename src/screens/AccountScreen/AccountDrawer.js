import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

const AccountDrawer = ({ bookmarks }) => (
  <div>
    <List>
      {bookmarks.map(({ name, icon: Icon }) => (
        <ListItem button key={name}>
          <ListItemIcon><Icon/></ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  </div>
)

export { AccountDrawer }
