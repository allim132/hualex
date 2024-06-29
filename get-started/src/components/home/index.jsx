import React from 'react'
import { useAuth } from '../../contexts/authContext'

const Home = () => {
  const { currentUser } = useAuth()

  return (
    <div className="text-2x1 font-bold pt-14">
      <h1>Home</h1>
      <p>Welcome {currentUser.email}</p>
    </div>
  )
}
