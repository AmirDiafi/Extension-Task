import { useState, useCallback } from 'react'
import { useEncryptStore, useGlobalStore } from '../Content.presenter'
import '../../styles/login.css'
import { encrypt } from '../../utils'
import { secretKey } from '../../contants'

export const Login = () => {
  const { setLogin } = useGlobalStore()
  const { setEncryption, secret } = useEncryptStore()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
      setError('')
    },
    []
  )

  const handleConfirmPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(event.target.value)
      setError('')
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      // MARK This is wont happen, because we're not
      // displaying the login page if there is no secret
      if (password === confirmPassword && secret) {
        const cipherSecret = encrypt(secret, secretKey)

        setEncryption(cipherSecret)
        setLogin(true)
      } else {
        setError(secret ? 'Passwords do not match' : 'no secret')
      }
    },
    [password, confirmPassword, setLogin]
  )

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
