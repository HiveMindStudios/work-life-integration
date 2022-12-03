import React, { useRef, useState } from 'react';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const { handleLogin, handleSignUp} = useAuth()

  return (
    <div>
      <Header headerTitle={"App Name"} />
      <form>
        <input type="email" ref={emailRef} required placeholder="Email" />
        <input type="password" ref={passwordRef} required placeholder="Password" />
        <button disabled={loading} onClick={() => handleLogin(emailRef, passwordRef)}>Login</button>
        <button disabled={loading} onClick={() => handleSignUp(emailRef, passwordRef)}>Sign Up</button>
      </form>

    </div>
  )
}
