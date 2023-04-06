import { useCallback } from 'react'
import { useEncryptStore, useGlobalStore } from '../Content.presenter'
import { generateSecret } from '../../utils'

export const useIntroPresenter = () => {
  const { setIntro } = useGlobalStore()
  const { setSecret, secret } = useEncryptStore()
  const onEncrypt = useCallback(async () => {
    if (!secret) {
      const secretValue = await generateSecret(30)
      setSecret(secretValue)
    }
    setIntro(true)
  }, [])

  return { onEncrypt }
}
