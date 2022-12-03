import React, { useContext, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { handleSignIn } = useAuth();

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const email = useRef()
  const password = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignIn(
        email, password
      );
      // formRef.current.reset();
      setValidation("");
      // console.log(cred);
      navigate("/");
    } catch {
      setValidation("Wopsy, email and/or password incorrect")
    }
  };

  return (
    <div className="wrapper">
      <div className="input-group signin-form">
        <h4>Sign in</h4>
        <input type="text" className="form-control" placeholder="email@example.com" ref={email} />
        <input type="text" className="form-control" placeholder="password" ref={password} />
        <button className="btn btn-primary" type="button" onClick={e => handleSubmit(e)}>Sign in</button>
      </div>
    </div>
  );
}