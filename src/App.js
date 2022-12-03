import React from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import NoPage from './pages/NoPage';
import { Settings } from './pages/Settings';
import ThemeProvider from './contexts/ThemeContext';
import Discord from './components/Discord';
import Slack from './components/Slack';
import Telegram from './components/Telegram';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/discord" element={<Discord />} />
              <Route path="/slack" element={<Slack />} />
              <Route path="/telegram" element={<Telegram />} />

              <Route path="/settings" element={<Settings />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>

        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
