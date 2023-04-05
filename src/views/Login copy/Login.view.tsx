import { useGlobalStore } from '../Content.presenter'

export const Intro = () => {
  const { setLogin } = useGlobalStore()
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => setLogin(true)}>Start</button>
    </div>
  )
}
