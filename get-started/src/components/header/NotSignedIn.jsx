import { Link } from 'react-router-dom'

export default function () {
  return (
    <div className="flex-col z-20 flex-wrap gap-6 p-8 h-9 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none dark:shadow-none dark:bg-gray-800 dark:border-gray-700">
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
    </div>
  )
}
