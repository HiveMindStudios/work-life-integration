import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './auth/SignIn';
import SignIn from './auth/SignIn';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
