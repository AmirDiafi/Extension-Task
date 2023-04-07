import '../../styles/login.css'
import { useLoginPresenter } from './login.presenter'

export const Login = () => {
  const {
    handleConfirmPasswordChange,
    handleSubmit,
    handlePasswordChange,
    confirmPassword,
    error,
    password,
  } = useLoginPresenter()

  const isButtonDisabled =
    !password || !confirmPassword || password !== confirmPassword

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
        <h2 className='title'>Login</h2>
        <div className='input-group'>
          <label className='label'>Password:</label>
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
            className='input'
          />
        </div>
        <div className='input-group'>
          <label className='label'>Confirm Password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className='input'
          />
        </div>
        <button type='submit' className='button' disabled={isButtonDisabled}>
          Go
        </button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}
