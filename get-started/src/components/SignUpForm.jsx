export default function SignUpForm({ onShowLogIn }) {
  const handleShowLogIn = () => {
    onShowLogIn()
  }

  return (
    <div class="container">
      <div class="col-xs-1 col-md-3 col-lg"></div>
      <div class="col-xs-10 col-md-6 col-lg center-align">
        <h2>Sign Up</h2>
        <form>
          <div class="form-group">
            <label>
              Email
              <input type="text" id="username" />
            </label>
          </div>
          <div class="form-group">
            <label>
              Password
              <input type="password" id="password" />
            </label>
          </div>
          <div class="form-group">
            <label>
              Verify Password
              <input type="password" id="passwordVerify" />
            </label>
          </div>
          <button type="submit">Sign Up</button>
          <button type="login" onClick={handleShowLogIn}>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}
