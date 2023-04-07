import { useCallback } from 'react'
import { useEncryptStore } from '../Content.presenter'
import { generateSecret } from '../../utils'

export const useIntroPresenter = () => {
  const { setSecret, secret } = useEncryptStore()
  const onEncrypt = useCallback(async () => {
    if (!secret) {
      const secretValue = await generateSecret(30)
      setSecret(secretValue)
    }
  }, [])

  return { onEncrypt }
}
