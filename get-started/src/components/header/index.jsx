import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
import Logo from './Logo'

export default function Header() {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <AuthProvider>
      <header>
        <nav className="z-10 w-full absolute">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 flex items-center justify-between">
            <Logo /> {/* Place the Logo component here */}
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
            ></div>
            <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  <li>
                    <Link
                      to="/login"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Log-in</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block md:px-4 transition hover:text-primary"
                    >
                      <span>Sign-up</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 lg:mt-0">
                <Link
                  to="/signup"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">
                    Get Started
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </AuthProvider>
  )
}

/*
<div className="flex flex-col ">
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

      */
