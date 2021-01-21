import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { AuthContextProvider } from './AuthProvider'
import { darkTheme as theme } from '../themes.js'

const AppProvider = ({ children }) => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  </BrowserRouter>
)

export { AppProvider }
