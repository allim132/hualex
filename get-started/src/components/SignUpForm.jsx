export default function SignUpForm() {
  return (
    <div class="container">
      <div class="col-xs-1 col-md-3 col-lg"></div>
      <div class="col-xs-10 col-md-6 col-lg center-align">
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
        </form>
      </div>
    </div>
  )
}
