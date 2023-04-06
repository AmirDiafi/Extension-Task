import { globalPresenter, useEncryptStore } from '../Content.presenter'

export const Home = () => {
  const { logout } = globalPresenter()
  const { cipherSecret, secret } = useEncryptStore()
  return (
    <div>
      <h2>Home</h2>
      <p>secret: {secret}</p>
      <p>cipherSecret: {cipherSecret}</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
