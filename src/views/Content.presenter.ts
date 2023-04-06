import { useCallback } from 'react'
import { create } from 'zustand'

export type TGlobalValues = {
  isLoggedIn: boolean
  isIntro: boolean
}

export type TGlobalActions = {
  setLogin: (isLoggedIn: boolean) => void
  setIntro: (isIntro: boolean) => void
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
  isIntro: true,
}

const initialEncryptValue: TEncryptionValues = {
  cipherSecret: undefined,
  secret: undefined,
}

export const useGlobalStore = create<TGlobalStore>((set) => ({
  ...initialValue,
  setLogin: (isLoggedIn) =>
    set(() => ({
      isLoggedIn,
    })),
  setIntro: (isIntro) =>
    set(() => ({
      isIntro,
    })),
}))

export const useEncryptStore = create<TEncryptionStore>((set) => ({
  ...initialEncryptValue,
  setEncryption: (cipherSecret) => set(() => ({ cipherSecret })),
  setSecret: (secret) => set(() => ({ secret })),
}))

export const globalPresenter = () => {
  const { setLogin } = useGlobalStore()

  const logout = useCallback(() => {
    setLogin(false)
  }, [])

  return { logout }
}
