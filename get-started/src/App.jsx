import LogInForm from './components/authentication/login/LogInForm'
import SignUpForm from './components/authentication/signup/SignUpForm'

import Header from './components/header'
import Home from './components/home/index'

import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'

import './App.css'
import { useState } from 'react'

function App() {
  const [showLogInForm, setShowLogInForm] = useState(false)

  const handleShowLogIn = () => {
    setShowLogInForm(true)
  }

  const handleShowSignUp = () => {
    setShowLogInForm(false)
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LogInForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<LogInForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

/*
<AuthProvider>
      <Header />
      <Router>
        <div className="w-full h-screen flex flex-col">{routesElement}</div>
      </Router>
    </AuthProvider>
*/
