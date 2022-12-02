import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {

  return (
    <AuthContext.Provider value={""}>
        {children}
    </AuthContext.Provider>
  )
}
