import React from 'react'
import {
  Email as EmailIcon,
  Person as PersonIcon,
  VpnKey as VpnKeyIcon,
  Delete as DeleteIcon
} from '@material-ui/icons'

import { DrawerLayout } from 'layout/DrawerLayout'
import { AccountDrawer } from './AccountDrawer'

const AccountScreen = () => {
  const handleChangeEmailClick = () => {

  }

  const handleChangeUsernameClick = () => {

  }

  const handleChangepasswordClick = () => {

  }

  const handleDeleteClick = () => {

  }

  const ACCOUNT_BOOKMARKS = [
    {
      name: 'Change e-mail',
      icon: EmailIcon,
      onClick: handleChangeEmailClick
    },
    {
      name: 'Change username',
      icon: PersonIcon,
      onClick: handleChangeUsernameClick
    },
    {
      name: 'Change password',
      icon: VpnKeyIcon,
      onClick: handleChangepasswordClick
    },
    {
      name: 'Delete',
      icon: DeleteIcon,
      onClick: handleDeleteClick
    }
  ]

  return (
    <DrawerLayout
      header="Account Management"
      drawer={<AccountDrawer bookmarks={ACCOUNT_BOOKMARKS} />}
    >
      content22
    </DrawerLayout>
  )
}

export { AccountScreen }
