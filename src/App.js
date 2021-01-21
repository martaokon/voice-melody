import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Routes from 'Routes'
import { AuthContext } from 'providers/AuthProvider'
import { NavigationBar } from 'components/NavigationBar'
import { ScreenBackground } from 'layout/ScreenBackground'

const App = () => {
  const location = useLocation()
  const history = useHistory()
  const { isAuthenticated } = useContext(AuthContext)

  const isNavigationOpen = location.pathname !== '/login' && location.pathname !== '/register'

  useEffect(() => {
    if (isAuthenticated && location.pathname === '/login') {
      history.push('addSong')
    } else if (!isAuthenticated && location.pathname !== '/register') {
      history.push('login')
    }
  }, [location.pathname])

  return (
    <ScreenBackground>
      <NavigationBar isOpen={isNavigationOpen} />
      <Routes />
    </ScreenBackground>
  )
}

export default App
