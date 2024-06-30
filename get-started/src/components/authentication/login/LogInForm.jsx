import '../Form.css'

const handleShowSignUp = () => {
  console.log('Sign up clicked')
}

export default function LogInForm() {
  return (
    <div className="container">
      <div className="col-xs-1 col-md-3 col-lg"></div>
      <div className="col-xs-10 col-md-6 col-lg center-align">
        <h2>Log In</h2>
        <form>
          <div className="form-group">
            <label>
              Email
              <input type="text" id="username" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Password
              <input type="password" id="password" />
            </label>
          </div>
          <div className="form-group"></div>
          <button type="submit">Log In</button>
          <div
            className="toggle-button"
            type="signup"
            onClick={handleShowSignUp}
          >
            <u>Sign Up</u>
          </div>
        </form>
      </div>
    </div>
  )
}
