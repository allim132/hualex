import '../Form.css'
import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from '../../../firebase/auth'
import { useAuth } from '../../../contexts/authContext'

export default function LogInForm() {
  const { userLoggedIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [errorInvalidCredentials, setErrorInvalidCredentials] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isSigningIn) {
      setIsSigningIn(true)
      try {
        await doSignInWithEmailAndPassword(email, password)
      } catch (err) {
        setErrorInvalidCredentials(true)
      } finally {
        setIsSigningIn(false)
      }
    }
  }

  const onGoogleSignIn = (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      doSignInWithGoogle().catch((err) => {
        setIsSigningIn(false)
      })
    }
  }

  return (
    <div className="container flex justify-center max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      {userLoggedIn && <Navigate to="/home" />}

      <div className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 space-y-5 p-4 shadow-xl border border-gray-100 text-gray-600 dark:border-gray-700 rounded-xl dark:bg-gray-800 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-gray-100 text-xl font-semibold sm:text-2x1">
              Log In
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-group">
              <label className="text-sm font-bold block">Email</label>
              <input
                className="border rounded-xl dark:bg-gray-700 dark:text-gray-100 text-center"
                type="text"
                id="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="text-sm font-bold block">Password</label>
              <input
                className="border rounded-xl dark:bg-gray-700 dark:text-gray-100 text-center"
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <button
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                type="submit"
                disabled={isSigningIn}
              >
                <span className="relative text-sm font-semibold text-white">
                  {isSigningIn ? 'Logging in...' : 'Log in'}
                </span>
              </button>
            </div>
            {errorInvalidCredentials && (
              <p>
                Error: Invalid user credentails. Please check your email and
                password.
              </p>
            )}
            <div className="toggle-button underline" type="password-reset">
              <Link to="/reset">Forgot your password?</Link>
            </div>
            <div className="toggle-button underline" type="signup">
              <Link to="/signup">New to Hualex? Sign Up</Link>
            </div>
            <button
              disabled={isSigningIn}
              onClick={(e) => {
                onGoogleSignIn(e)
              }}
              className={`w-full flex items-center justify-center gap-x-3 py-2.5 border rounded-lg text-sm font-medium  ${
                isSigningIn
                  ? 'cursor-not-allowed'
                  : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'
              }`}
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_17_40)">
                  <path
                    d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                    fill="#34A853"
                  />
                  <path
                    d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                    fill="#EA4335"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_40">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              {isSigningIn ? 'Signing In...' : 'Continue with Google'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
