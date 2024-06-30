import '../Form.css'
import React, { useState } from 'react'
// import { useAuth } from '../../../contexts/authContext'
// import { Navigate, Link, useNavigate } from 'react-router-dom'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'
import {
  emptyFieldsErrorMessage,
  invalidEmailErrorMessage,
  passwordsDoNotMatchErrorMessage,
  emailUsedErrorMessage,
  passwordLengthErrorMessage,
} from './SignUpErrorMessages'
export default function SignUpForm() {
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
  const [errorPasswordLength, setErrorPasswordLength] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)

    setDefaults()
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)

    setDefaults()
  }

  const handlePasswordVerifyChange = (e) => {
    setPasswordVerify(e.target.value)

    setDefaults()
  }

  const setDefaults = () => {
    setErrorEmailUsed(false)
    setErrorPasswordsDoNotMatch(false)
    setErrorEmptyFields(false)
    setErrorPasswordLength(false)
  }

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const isFieldsEmpty = (email, password, passwordVerify) => {
    return email === '' || password === '' || passwordVerify === ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFieldsEmpty(email, password, passwordVerify)) {
      setErrorEmptyFields(true)
      console.log('Empty fields')
      return
    }
    if (!isValidEmail(email)) {
      setErrorInvalidEmail(true)
      console.log('Invalid email')
      return
    }
    if (password !== passwordVerify) {
      setErrorPasswordsDoNotMatch(true)
      console.log('Passwords do not match')
      return
    }
    if (password.length < 6) {
      setErrorPasswordLength(true)
      console.log(
        'Password length error: Password must be less than 6 characters'
      )
      return
    }
    // Successful registration
    setDefaults()

    try {
      console.log(`Creating user with email ${email} and password ${password}`)
      await doCreateUserWithEmailAndPassword(email, password)
    } catch (error) {
      setErrorEmailUsed(true)
    }
  }

  const handleShowLogIn = () => {
    console.log('Log in clicked')
  }

  return (
    <div className="container">
      <div className="col-xs-1 col-md-3 col-lg"></div>
      <div className="col-xs-10 col-md-6 col-lg center-align">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label>
              Email
              <input type="text" id="username" onChange={handleEmailChange} />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password
              <input
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </label>
          </div>
          <div className="form-group">
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
          {errorPasswordLength && passwordLengthErrorMessage()}
          <div className="toggle-button" type="login" onClick={handleShowLogIn}>
            <u>Log In</u>
          </div>
        </form>
      </div>
    </div>
  )
}
