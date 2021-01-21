import React from 'react'
import { AuthContextProvider } from './AuthProvider'

const AppProvider = ({ children }) => (
  <AuthContextProvider>
    {children}
  </AuthContextProvider>
)

export { AppProvider }
