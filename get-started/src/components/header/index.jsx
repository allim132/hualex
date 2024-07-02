import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthProvider, useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../firebase/auth'
import Logo from './Logo'
import NotSignedIn from './NotSignedIn'

export default function Header() {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <AuthProvider>
      <header>
        <nav className="z-10 w-full absolute">
          <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 flex items-center justify-between">
            <Logo />
            <div
              aria-hidden="true"
              className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"
            ></div>
            {userLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    doSignOut().then(() => {
                      navigate('/login')
                    })
                  }}
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">
                    Log out
                  </span>
                </button>
              </>
            ) : (
              <NotSignedIn />
            )}
          </div>
        </nav>
      </header>
    </AuthProvider>
  )
}

/*

                  */
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
