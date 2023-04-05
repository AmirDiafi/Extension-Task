import { useGlobalStore } from '../Content.presenter'

export const Intro = () => {
  const { setIntro } = useGlobalStore()
  return (
    <div>
      <h2>Intro</h2>
      <button onClick={() => setIntro(false)}>Start</button>
    </div>
  )
}
