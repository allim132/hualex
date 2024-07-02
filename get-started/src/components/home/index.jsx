import { useAuth } from '../../contexts/authContext'
import { Navigate } from 'react-router-dom'
const Home = () => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return (
    <div className="text-2x1 font-bold pt-14">
      <h1>Home</h1>
      <p>Welcome {currentUser.email}</p>
    </div>
  )
}

export default Home
