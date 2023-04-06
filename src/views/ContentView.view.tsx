import { useEncryptStore, useGlobalStore } from './Content.presenter'
import { Home } from './Home/Home.view'
import { Intro } from './Intro/Intro.view'
import { Login } from './Login/Login.view'

const ContentView = () => {
  const { isLoggedIn } = useGlobalStore()
  const { secret, cipherSecret } = useEncryptStore()

  if (!secret) {
    return <Intro />
  }
  if (isLoggedIn && cipherSecret) {
    return <Home />
  }

  return <Login />
}

export default ContentView
