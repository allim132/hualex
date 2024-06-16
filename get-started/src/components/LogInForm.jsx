export default function LogInForm({ onShowSignUp }) {
  const handleShowSignUp = () => {
    onShowSignUp()
  }

  return (
    <div class="container">
      <div class="col-xs-1 col-md-3 col-lg"></div>
      <div class="col-xs-10 col-md-6 col-lg center-align">
        <h2>Log In</h2>
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
          <div class="form-group"></div>
          <button type="submit">Log In</button>
          <button type="signup" onClick={handleShowSignUp}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
