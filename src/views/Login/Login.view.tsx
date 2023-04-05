import { useGlobalStore } from '../Content.presenter'

export const Login = () => {
  const { setLogin } = useGlobalStore()
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => setLogin(true)}>Go</button>
    </div>
  )
}
