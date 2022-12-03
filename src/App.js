import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './auth/Login';
import SignOut from './auth/SignOut';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App;
