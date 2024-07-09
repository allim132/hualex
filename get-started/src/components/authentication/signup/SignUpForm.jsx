import '../Form.css'
import React, { useState } from 'react'
// import { useAuth } from '../../../contexts/authContext'
import { Navigate, Link } from 'react-router-dom'
import {
  doCreateUserWithEmailAndPassword,
  doSendEmailVerification,
} from '../../../firebase/auth'
import {
  emptyFieldsErrorMessage,
  invalidEmailErrorMessage,
  passwordsDoNotMatchErrorMessage,
  emailUsedErrorMessage,
  passwordLengthErrorMessage,
} from './SignUpErrorMessages'
import { useAuth } from '../../../contexts/authContext'
export default function SignUpForm() {
  const { userLoggedIn } = useAuth()

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
      doSendEmailVerification()
    } catch (error) {
      setErrorEmailUsed(true)
    }
  }

  return (
    <div className="container flex justify-center max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      {userLoggedIn && <Navigate to="/home" />}

      <div className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 space-y-5 p-4 shadow-xl border border-gray-100 text-gray-600 dark:border-gray-700 rounded-xl dark:bg-gray-800 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-gray-100 text-xl font-semibold sm:text-2x1">
              Sign Up
            </h2>
          </div>

          <form className="space-y-5">
            <div className="form-group">
              <label className="text-sm font-bold block">Email</label>
              <input
                className="border rounded-xl dark:bg-gray-700 dark:text-gray-100 text-center"
                type="text"
                id="username"
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label className="text-sm font-bold block">Password</label>
              <input
                className="border rounded-xl dark:bg-gray-700 dark:text-gray-100 text-center"
                type="password"
                id="password"
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label className="text-sm font-bold block">Verify Password</label>
              <input
                className="border rounded-xl dark:bg-gray-700 dark:text-gray-100 text-center"
                type="password"
                id="passwordVerify"
                onChange={handlePasswordVerifyChange}
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <button
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                type="submit"
                onClick={handleSubmit}
              >
                <span className="relative text-base font-semibold text-white">
                  Sign Up
                </span>
              </button>
            </div>

            {errorEmailUsed && emailUsedErrorMessage()}
            {errorEmptyFields && emptyFieldsErrorMessage()}
            {errorInvalidEmail && invalidEmailErrorMessage()}
            {errorPasswordsDoNotMatch && passwordsDoNotMatchErrorMessage()}
            {errorPasswordLength && passwordLengthErrorMessage()}
            <div className="toggle-button underline" type="login">
              <Link to="/login">Have an account? Log In</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
