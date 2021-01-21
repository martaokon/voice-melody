import React, { createContext, useState, useMemo } from 'react'

export const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null)
  const [token, setToken] = useState(null) // TODO

  const isAuthenticated = useMemo(() => !!(username && token), [username, token])

  const handleLogout = () => {
    setUsername(null)
    setToken(null)
  }

  const handleLogin = (username, password) => {
    //TODO
    setUsername(username)
    setToken('some token')
  }

  return (
    <AuthContext.Provider
      value={{
        username,
        token,
        isAuthenticated,
        handleLogout,
        handleLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }
