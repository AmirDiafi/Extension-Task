import { useCallback } from 'react'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { encrypt, generateSecret } from '../utils'
import { secretKey } from '../contants'

export type TGlobalValues = {
  isLoggedIn: boolean
}

export type TGlobalActions = {
  setLogin: (isLoggedIn: boolean) => void
}

export type TGlobalStore = TGlobalValues & TGlobalActions

export type TEncryptionValues = {
  cipherSecret: string | undefined
  secret: string | undefined
}

export type TEncryptionActions = {
  setEncryption: (cipherSecret: string | undefined) => void
  setSecret: (secret: string | undefined) => void
}

export type TEncryptionStore = TEncryptionValues & TEncryptionActions

const initialValue: TGlobalValues = {
  isLoggedIn: false,
}

const initialEncryptValue: TEncryptionValues = {
  cipherSecret: undefined,
  secret: undefined,
}

export const useGlobalStore = create<TGlobalStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialValue,
        setLogin: (isLoggedIn) =>
          set(() => ({
            isLoggedIn,
          })),
      }),
      {
        name: 'auth-storage',
      }
    )
  )
)

export const useEncryptStore = create<TEncryptionStore>()(
  devtools(
    persist(
      (set) => ({
        ...initialEncryptValue,
        setEncryption: (cipherSecret) => set(() => ({ cipherSecret })),
        setSecret: (secret) => set(() => ({ secret })),
      }),
      {
        name: 'main-storage',
      }
    )
  )
)

export const globalPresenter = () => {
  const { setLogin } = useGlobalStore()
  const { setSecret, setEncryption } = useEncryptStore()

  const logout = useCallback((logout?: boolean) => {
    setLogin(false)
    setEncryption(undefined)

    logout && setSecret(undefined)
  }, [])

  const regenerate = useCallback(async () => {
    const secretValue = await generateSecret(30)
    setSecret(secretValue)
    const cipherSecret = encrypt(secretValue, secretKey)

    setEncryption(cipherSecret)
  }, [])

  return { logout, regenerate }
}
