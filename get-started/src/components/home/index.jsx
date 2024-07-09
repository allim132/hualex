import { useAuth } from '../../contexts/authContext'
import { Navigate } from 'react-router-dom'
const Home = () => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  return (
    <div className="container flex justify-center max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div className="w-full h-screen flex self-center place-content-center place-items-center">
        <div className="w-96 space-y-5 p-4 shadow-xl border border-gray-100 text-gray-600 dark:border-gray-700 rounded-xl dark:bg-gray-800 dark:text-gray-100">
          <div className="text-center">
            <h2 className="text-gray-100 text-xl font-semibold sm:text-2x1">
              Whats next?
            </h2>
            <p>Log in and share bank account details</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
