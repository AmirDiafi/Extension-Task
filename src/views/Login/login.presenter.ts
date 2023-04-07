import { useState, useCallback } from 'react'
import { secretKey } from '../../contants'
import { encrypt } from '../../utils'
import { useGlobalStore, useEncryptStore } from '../Content.presenter'

export const useLoginPresenter = () => {
  const { setLogin } = useGlobalStore()
  const { setEncryption, secret } = useEncryptStore()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handlePasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const password = event.target.value
      setPassword(password)
      const isError =
        password.length && confirm.length && confirmPassword !== password
      setError(isError ? 'Passwords do not match' : '')
    },
    [confirmPassword]
  )

  const handleConfirmPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const confirm = event.target.value
      setConfirmPassword(confirm)
      const isError = password.length && confirm.length && confirm !== password
      setError(isError ? 'Passwords do not match' : '')
    },
    [password]
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

  return {
    handleConfirmPasswordChange,
    handleSubmit,
    handlePasswordChange,
    confirmPassword,
    error,
    password,
  }
}
