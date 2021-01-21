import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { LoginScreen } from 'screens/LoginScreen'
import { RegisterScreen } from 'screens/RegisterScreen'
import { AccountScreen } from 'screens/AccountScreen'
import { AddSongScreen } from 'screens/AddSongScreen'
import { SongsListScreen } from 'screens/SongsListScreen'

const Routes = () => (
  <Switch>
    <Route path="/login" component={LoginScreen} />
    <Route path="/register" component={RegisterScreen} />
    <Route path="/account" component={AccountScreen} />
    <Route path="/addSong" component={AddSongScreen} />
    <Route path="/songsList" component={SongsListScreen} />
    <Route path="*">
      <Redirect to="/login" />
    </Route>
  </Switch>
)

export default Routes
