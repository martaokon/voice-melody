import React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import styled from 'styled-components'

const StyledListItemText = styled(ListItemText)`
  ${({ isActive }) => isActive && `
    & .MuiListItemText-primary {
      font-weight: 700;
    }
  `}
`

const AccountDrawer = ({ bookmarks }) => (
  <div>
    <List>
      {bookmarks.map(({ name, icon: Icon, onClick: handleChange, isActive }) => (
        <ListItem button key={name} onClick={handleChange}>
          <ListItemIcon><Icon/></ListItemIcon>
          <StyledListItemText primary={name} isActive={isActive} />
        </ListItem>
      ))}
    </List>
  </div>
)

export { AccountDrawer }
