import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, useHistory, useLocation } from 'react-router-dom'

import { AuthContextProvider } from 'providers/AuthProvider'
import { LoginScreen } from 'screens/LoginScreen'
import { RegisterScreen } from 'screens/RegisterScreen'

const App = () => {
  const { pathname } = useLocation()
  const history = useHistory()
  const { isAuthenticated } = useContext(AuthContextProvider)

  useEffect(() => {
    if (isAuthenticated && pathname === '/login') {
      history.push()
    }
  }, [pathname])

  return (
    <Router>
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Router>
  )
}

export default App
