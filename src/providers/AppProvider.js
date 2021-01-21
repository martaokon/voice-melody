import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AuthContextProvider } from './AuthProvider'

const AppProvider = ({ children }) => (
  <BrowserRouter>
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  </BrowserRouter>
)

export { AppProvider }
