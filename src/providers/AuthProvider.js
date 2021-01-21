import React, { createContext, useState, useMemo } from 'react'

export const AuthContext = createContext(null)

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null)
  const [token, setToken] = useState(null) // TODO

  const isAuthenticated = useMemo(() => username && token, [username, token])

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        token,
        setToken,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }
