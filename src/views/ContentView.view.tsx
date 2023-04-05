import { useGlobalStore } from './Content.presenter'
import { Home } from './Home/Home.view'
import { Intro } from './Intro/Intro.view'
import { Login } from './Login/Login.view'

const ContentView = () => {
  const { isIntro, isLoggedIn } = useGlobalStore()

  if (isIntro) {
    return <Intro />
  } else if (isLoggedIn) {
    return <Home />
  } else {
    return <Login />
  }
}

export default ContentView
