import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Routes from 'Routes'
import { AuthContext } from 'providers/AuthProvider'
import { NavigationBar } from 'components/NavigationBar'

const App = () => {
  const location = useLocation()
  const history = useHistory()
  const { isAuthenticated } = useContext(AuthContext)

  const isNavigationOpen = location.pathname !== '/login' && location.pathname !== '/register'

  useEffect(() => {
    if (isAuthenticated && location.pathname === '/login') {
      history.push('addSong')
    }
  }, [location.pathname])

  return (
    <>
      <NavigationBar isOpen={isNavigationOpen} />
      <Routes />
    </>
  )
}

export default App
