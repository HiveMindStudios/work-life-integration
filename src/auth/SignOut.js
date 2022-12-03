import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const nameRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) return setError('Passwords do not match');
        if (!/[A-Z]/.test(passwordRef.current.value) || passwordRef.current.value.length < 7) return setError('Your password is to weak');
        if (['admin', 'tester', 'administrator'].includes(nameRef.current.value.toLowerCase()) || nameRef.current.value.length < 3) return setError("Incorrect name");

        try {
            setError('');
            setLoading(true);
            await signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
            navigate("/");
        } catch {
            setError('Failed to create an account');
        }

        setLoading(false);
    }

    return (
        <div>

<form>
        <input ref={emailRef} />
        <input type="password" className="password" ref={passwordRef} required placeholder="Password" />
        <input type="password" className="password" ref={passwordConfirmRef} required placeholder="Password" />
        <button onClick={handleSubmit} />
        </form>
        </div>
    )
}