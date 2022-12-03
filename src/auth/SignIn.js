import React, { useContext, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const { handleSignIn } = useAuth();
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate();

  async function handleClick() {
    try {
      setError("")
      setLoading(true)
      await handleSignIn(email.current.value, password.current.value)
      navigate('/')
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }
  
  return (
    <div className="wrapper">
      <div className="input-group signin-form">
        <h4>Sign in</h4>
        <input type="text" className="form-control" placeholder="email@example.com" ref={email} />
        <input type="password" className="form-control" placeholder="password" ref={password} />
        <button className="btn btn-primary" type="button" onClick={handleClick}>Sign in</button>
      </div>
    </div>
  );
}