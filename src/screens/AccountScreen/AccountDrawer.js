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
      {bookmarks.map(({ name, icon: Icon, onClick: handleChange }) => (
        <ListItem button key={name} onClick={handleChange}>
          <ListItemIcon><Icon/></ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
      ))}
    </List>
  </div>
)

export { AccountDrawer }
