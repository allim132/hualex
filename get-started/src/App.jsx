import './App.css'
import LogInForm from './components/authentication/login/LogInForm'
import SignUpForm from './components/authentication/signup/SignUpForm'
import { useState } from 'react'

function App() {
  const [showLogInForm, setShowLogInForm] = useState(false)

  const handleShowLogIn = () => {
    setShowLogInForm(true)
  }

  const handleShowSignUp = () => {
    setShowLogInForm(false)
  }

  return <SignUpForm onShowLogIn={handleShowLogIn} />
}

export default App

/*
<div>
      {showLogInForm ? (
        <LogInForm onShowSignUp={handleShowSignUp} />
      ) : (
        <SignUpForm onShowLogIn={handleShowLogIn} />
      )}
    </div>
*/
