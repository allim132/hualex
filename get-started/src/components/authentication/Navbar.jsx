import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './LogoutButton'

function Navbar() {
  const { isAuthenticated } = useAuth0()

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid header">
        <a className="navbar-brand" href="#">
          Authentication Demo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-av me-auto mb-2 mb-lg-0">
            {isAuthenticated && ( // Render home link if user is authenticated
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            )}

            {isAuthenticated && <LogoutButton />}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar