import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import NoPage from './pages/NoPage';
import { Settings } from './pages/Settings';
import Discord from './components/Discord';
import Slack from './components/Slack';
import Telegram from './components/Telegram';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useAuth } from './contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const App = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    Notification.requestPermission().then(perm => {
      if (perm !== "granted") return
    })

    new Notification("Notify", {
      body: "New Urgent Message",
      data: "John Doe: Lorem ipsum dolor sit amet"
      // data: { hello: 'world' },
      // icon: "",
      // tag: "Test message"
    })
  }, [])

  return (
    <React.Fragment>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <Routes>
          <Route index element={<ProtectedRoute user={currentUser}><Home /></ProtectedRoute>} />
          <Route path="/discord" element={<ProtectedRoute user={currentUser}><Discord /></ProtectedRoute>} />
          <Route path="/slack" element={<ProtectedRoute user={currentUser}><Slack /></ProtectedRoute>} />
          <Route path="/telegram" element={<ProtectedRoute user={currentUser}><Telegram /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute user={currentUser}><Settings /></ProtectedRoute>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </React.Fragment>
  )
}

export default App;

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};