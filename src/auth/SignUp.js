import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"
import User from '../assets/user.svg'
import Key from '../assets/key.svg'

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
    !loading ? <div className="wrapper" style={{ width: "60%", margin: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="input-group signin-form">
        <h4 style={{ textAlign: "center" }}>Sign up</h4>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", margin: "7px" }}>
          <img src={User} alt="email" width="25" height="25" />
          <input type="text" className="form-control form-control-lg" placeholder="email@example.com" ref={email} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", margin: "7px" }}>
          <img src={Key} alt="password" width="25" height="25" />
          <input type="password" className="form-control form-control-lg" placeholder="password" ref={password} />
        </div>
        <button className="btn btn-primary" type="button" onClick={handleClick} style={{ width: "60%", margin: "auto", marginTop: "40px", fontSize: "15px" }}>Sign up</button>
      </div>
    </div> : <Spinner />
  )
}