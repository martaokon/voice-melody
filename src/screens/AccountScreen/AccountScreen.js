import React, { useState } from 'react'
import {
  Email as EmailIcon,
  Person as PersonIcon,
  VpnKey as VpnKeyIcon,
  Delete as DeleteIcon
} from '@material-ui/icons'

import { DrawerLayout } from 'layout/DrawerLayout'
import { AccountDrawer } from './AccountDrawer'
import { ChangeEmailForm } from './forms/ChangeEmailForm'
import { ChangeUsernameForm } from './forms/ChangeUsernameForm'
import { ChangePasswordForm } from './forms/ChangePasswordForm'
import { DeleteAccountForm } from './forms/DeleteAccountForm'

const AccountScreen = () => {
  const [view, setView] = useState('EMAIL')

  const ACCOUNT_BOOKMARKS = [
    {
      name: 'Change e-mail',
      icon: EmailIcon,
      onClick: () => setView('EMAIL'),
      isActive: view === 'EMAIL'
    },
    {
      name: 'Change username',
      icon: PersonIcon,
      onClick: () => setView('USERNAME'),
      isActive: view === 'USERNAME'
    },
    {
      name: 'Change password',
      icon: VpnKeyIcon,
      onClick: () => setView('PASSWORD'),
      isActive: view === 'PASSWORD'
    },
    {
      name: 'Delete Account',
      icon: DeleteIcon,
      onClick: () => setView('DELETE'),
      isActive: view === 'DELETE'
    }
  ]

  return (
    <DrawerLayout
      header="Account Management"
      drawer={<AccountDrawer bookmarks={ACCOUNT_BOOKMARKS} />}
    >
      {view === 'EMAIL' ? (
        <ChangeEmailForm />
      ) : view === 'USERNAME' ? (
        <ChangeUsernameForm />
      ) : view === 'PASSWORD' ? (
        <ChangePasswordForm />
      ) : view === 'DELETE' ? (
        <DeleteAccountForm />
      ) : null}
    </DrawerLayout>
  )
}

export { AccountScreen }
