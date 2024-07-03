import { Link } from 'react-router-dom'
import { doSignOut } from '../../firebase/auth'

export default function SignedIn() {
  return (
    <>
      <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
        <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
          <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
            <li>
              <Link
                to="/home"
                className="block md:px-4 transition hover:text-primary"
              >
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </div>

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
      </div>
    </>
  )
}
