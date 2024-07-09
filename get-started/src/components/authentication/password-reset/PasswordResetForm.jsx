import { useAuth } from '../../../contexts/authContext'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { doPasswordReset } from '../../../firebase/auth'

export default function PasswordResetForm() {
  const { userLoggedIn } = useAuth()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    doPasswordReset(email)
  }

  return (
    <div className="container flex justify-center max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      {userLoggedIn && <Navigate to="/home" />}

      <div className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 space-y-5 p-4 shadow-xl border border-gray-100 text-gray-600 dark:border-gray-700 rounded-xl dark:bg-gray-800 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-gray-100 text-xl font-semibold sm:text-2x1">
              Password Reset
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

            {submitted ? (
              <div className="text-red-500">
                <p>Email sent.</p>
                <p
                  className="underline toggle-button"
                  onClick={() => setSubmitted(false)}
                >
                  Didn't get the email? Click here to try again.
                </p>
              </div>
            ) : (
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <button
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  type="submit"
                >
                  <span className="relative text-sm font-semibold text-white">
                    Submit
                  </span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
