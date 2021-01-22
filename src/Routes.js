import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {
  AccountCircle as AccountCircleIcon,
  AddAlert as AddAlertIcon,
  QueueMusic as QueueMusicIcon
} from '@material-ui/icons'

import { LoginScreen } from 'screens/LoginScreen'
import { RegisterScreen } from 'screens/RegisterScreen'
import { AccountScreen } from 'screens/AccountScreen/AccountScreen'
import { AddSongScreen } from 'screens/AddSongScreen'
import { SongsListScreen } from 'screens/SongsListScreen'

export const ROUTES_LIST = [
  {
    path: '/login',
    component: LoginScreen
  },
  {
    path: '/register',
    component: RegisterScreen
  },
  {
    path: '/addSong',
    component: AddSongScreen,
    label: 'Add song',
    icon: <AddAlertIcon />
  },
  {
    path: '/songsList',
    component: SongsListScreen,
    label: 'Songs list',
    icon: <QueueMusicIcon />
  },
  {
    path: '/account',
    component: AccountScreen,
    label: 'Account',
    icon: <AccountCircleIcon />
  }
]

const Routes = () => (
  <Switch>
    {ROUTES_LIST.map(({ path, component }) => (
      <Route path={path} component={component} />
    ))}
    <Route path='/login' component={LoginScreen} />
    <Route path="*">
      <Redirect to="/login" />
    </Route>
  </Switch>
)

export default Routes
