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

const initialValue = {
  isLoggedIn: true,
  isIntro: false,
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

export const globalPresenter = () => {}
