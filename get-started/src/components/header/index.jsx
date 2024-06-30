import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'

export default function Header() {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left-0 h-12 border-b place-content-center items-center bg-gray-200">
          {userLoggedIn ? (
            <>
              <button
                onClick={() => {
                  doSignOut().then(() => {
                    navigate('/login')
                  })
                }}
                className="text-sm text-blue-600 underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to={'/login'} className="text-sm text-blue-600 underline">
                Login
              </Link>
              <Link to={'/signup'} className="text-sm text-blue-600 underline">
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
    </AuthProvider>
  )
}
