import './App.css'
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm'
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
    <div className="App">
      {showLogInForm ? (
        <LogInForm onShowSignUp={handleShowSignUp} />
      ) : (
        <SignUpForm onShowLogIn={handleShowLogIn} />
      )}
    </div>
  )
}

export default App
