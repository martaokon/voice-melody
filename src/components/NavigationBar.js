import React, { useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import { MusicNote as MusicNoteIcon } from '@material-ui/icons'

import { ROUTES_LIST } from 'Routes'
import { AuthContext } from 'providers/AuthProvider'
import { WHITE, BLUE } from 'themes'

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  transform: translateY(${({ isOpen }) => isOpen ? '0%' : '-101%'});
  width: 100%;
  background: ${WHITE};
`

const StyledBottomNavigation = styled(BottomNavigation)`
  width: 40%;
  height: 100%
  min-width: 400px;

  &.MuiSvgIcon-root {
    color: ${BLUE};
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)}px;
`

const AppName = styled.h1`
  margin: ${({ theme }) => theme.spacing(2)}px;
`

const NAVIGATION_ROUTES = ['/addSong', '/songsList', '/account']

const NavigationBar = ({ isOpen }) => {
  const { pathname } = useLocation()
  const history = useHistory()
  const { handleLogout } = useContext(AuthContext)

  const navigationRoutes = ROUTES_LIST
    .filter(({ path }) => NAVIGATION_ROUTES.includes(path))

  const navigationValue = navigationRoutes.findIndex(({ path }) => path === pathname)

  const handleLogoutButtonClick = () => {
    handleLogout()
    history.push('login')
  }

  return (
    <Navigation isOpen={isOpen}>
      <LogoContainer>
        <MusicNoteIcon />
        <AppName>Voice and Melody</AppName>
      </LogoContainer>
      <StyledBottomNavigation
        value={navigationValue}
        onChange={(_, newValue) => {
          if (newValue < NAVIGATION_ROUTES.length)
          history.push(NAVIGATION_ROUTES[newValue])
        }}
        showLabels
      >
        {navigationRoutes.map(({ label, icon }) => (
          <BottomNavigationAction
            key={label}
            label={label}
            icon={icon}
          />
        ))}
        <BottomNavigationAction
          label="Logout"
          onClick={handleLogoutButtonClick}
        />
      </StyledBottomNavigation>
    </Navigation>
  )
}

export { NavigationBar}
