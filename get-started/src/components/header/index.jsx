import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignout } from '../../firebase/auth'

const handleLogout = () => {
  doSignout().then(() => {
    navigate('/login')
  })
}

const Header = () => {
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()
  return (
    <nav className="flex flex-row gap-x-2 w-full z-20 fixed top-0 left h-12 border-b place-content-center items-center bg-gray-200">
      {userLoggedIn ? (
        <>
          <button
            onClick={handleLogout}
            className="text-sm text-blue-600 underline"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="text-sm text-blue-600 underline">
            Login
          </Link>
          <Link to="/signup" className="text-sm text-blue-600 underline">
            Sign Up
          </Link>
        </>
      )}
    </nav>
  )
}

export default Header
