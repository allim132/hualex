export const emptyFieldsErrorMessage = () => {
  return <p className="error">Please fill in all fields before submitting</p>
}

export const invalidEmailErrorMessage = () => {
  return <p className="error">Please enter a valid email address</p>
}

export const passwordsDoNotMatchErrorMessage = () => {
  return <p className="error">Passwords do not match</p>
}

export const emailUsedErrorMessage = () => {
  return <p className="error">Email already in use</p>
}

export const passwordLengthErrorMessage = () => {
  return <p className="error">Password must be at least 6 characters</p>
}
