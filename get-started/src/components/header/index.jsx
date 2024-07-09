import React from 'react'
import { AuthProvider, useAuth } from '../../contexts/authContext'
import Logo from './Logo'
import NotSignedIn from './NotSignedIn'
import SignedIn from './SignedIn'

export default function Header() {
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
            {userLoggedIn ? <SignedIn /> : <NotSignedIn />}
          </div>
        </nav>
      </header>
    </AuthProvider>
  )
}
