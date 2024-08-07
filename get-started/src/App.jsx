import LogInForm from './components/authentication/login/LogInForm'
import SignUpForm from './components/authentication/signup/SignUpForm'
import PasswordResetForm from './components/authentication/password-reset/PasswordResetForm'

import Header from './components/header'
import Home from './components/home/index'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext'

import './App.css'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LogInForm />} />
          <Route path="/login" element={<LogInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/reset" element={<PasswordResetForm />} />
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
