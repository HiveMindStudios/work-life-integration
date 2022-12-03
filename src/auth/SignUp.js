import React, { useContext, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import {useNavigate} from "react-router-dom"

export default function SignUp() {
  const { handleSignUp } = useAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  async function handleClick(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await handleSignUp(email.current.value, password.current.value)
      navigate('/')
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }
  
  return (
    <>
        <h4>Sign up</h4>
        <input type="text" className="form-control" placeholder="email@example.com" ref={email} />
        <input type="password" className="form-control" placeholder="password" ref={password} />
        <button className="btn btn-primary" type="button" onClick={e => handleClick(e)}>Sign up</button>
        </>
  )
}