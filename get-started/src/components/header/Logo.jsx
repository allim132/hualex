import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
      <input
        aria-hidden="true"
        type="checkbox"
        name="toggle_nav"
        id="toggle_nav"
        className="hidden peer"
      />
      <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
        <Link to={'/'} className="flex space-x-2 items-center">
          <div aria-hidden="true" className="flex space-x-1">
            <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
            <div className="h-6 w-2 bg-primary"></div>
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Hualex
          </span>
        </Link>
      </div>
    </div>
  )
}
