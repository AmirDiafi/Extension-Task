import { useGlobalStore } from '../Content.presenter'

export const Home = () => {
  const { setLogin } = useGlobalStore()
  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => setLogin(false)}>Logout</button>
    </div>
  )
}
