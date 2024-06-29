import '../Form.css'
import React, { useState } from 'react'
// import { useAuth } from '../../../contexts/authContext'
// import { Navigate, Link, useNavigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'

export default function SignUpForm({ onShowLogIn }) {
  // const { userLoggedIn } = useAuth()
  // const navigate = useNavigate()

  // States for registration
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordVerify, setPasswordVerify] = useState('')

  // States for checking errors
  const [errorEmailUsed, setErrorEmailUsed] = useState(false)
  const [errorInvalidEmail, setErrorInvalidEmail] = useState(false)
  const [errorPasswordsDoNotMatch, setErrorPasswordsDoNotMatch] =
    useState(false)
  const [errorEmptyFields, setErrorEmptyFields] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)

    setErrorEmailUsed(false)
    setErrorInvalidEmail(false)
    setErrorEmptyFields(false)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)

    setErrorEmailUsed(false)
    setErrorPasswordsDoNotMatch(false)
    setErrorEmptyFields(false)
  }

  const handlePasswordVerifyChange = (e) => {
    setPasswordVerify(e.target.value)

    setErrorEmailUsed(false)
    setErrorPasswordsDoNotMatch(false)
    setErrorEmptyFields(false)
  }

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if fields are empty
    if (email === '' || password === '' || passwordVerify === '') {
      setErrorEmptyFields(true)

      console.log('Empty fields')

      return
    }

    // Check if email is in correct format or is valid
    if (!isValidEmail(email)) {
      setErrorInvalidEmail(true)

      console.log('Invalid email')

      return
    }

    // Check that passwords match
    if (password !== passwordVerify) {
      setErrorPasswordsDoNotMatch(true)

      console.log('Passwords do not match')

      return
    }

    // Successful registration

    setErrorEmptyFields(false)
    setErrorInvalidEmail(false)
    setErrorPasswordsDoNotMatch(false)

    try {
      await doCreateUserWithEmailAndPassword(email, password)
    } catch (error) {
      setErrorEmailUsed(true)
    }
  }

  const handleShowLogIn = () => {
    onShowLogIn()
  }

  const emptyFieldsErrorMessage = () => {
    return <p class="error">Please fill in all fields before submitting</p>
  }

  const invalidEmailErrorMessage = () => {
    return <p class="error">Please enter a valid email address</p>
  }

  const passwordsDoNotMatchErrorMessage = () => {
    return <p class="error">Passwords do not match</p>
  }

  const emailUsedErrorMessage = () => {
    return <p class="error">Email already in use</p>
  }

  return (
    <div class="container">
      <div class="col-xs-1 col-md-3 col-lg"></div>
      <div class="col-xs-10 col-md-6 col-lg center-align">
        <h2>Sign Up</h2>
        <form>
          <div class="form-group">
            <label>
              Email
              <input type="text" id="username" onChange={handleEmailChange} />
            </label>
          </div>
          <div class="form-group">
            <label>
              Password
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div class="form-group">
            <label>
              Verify Password
              <input
                type="password"
                id="passwordVerify"
                onChange={handlePasswordVerifyChange}
              />
            </label>
          </div>
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
          {errorEmailUsed && emailUsedErrorMessage()}
          {errorEmptyFields && emptyFieldsErrorMessage()}
          {errorInvalidEmail && invalidEmailErrorMessage()}
          {errorPasswordsDoNotMatch && passwordsDoNotMatchErrorMessage()}
          <div class="toggle-button" type="login" onClick={handleShowLogIn}>
            <u>Log In</u>
          </div>
        </form>
      </div>
    </div>
  )
}
