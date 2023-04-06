import '../../styles/intro.css'
import { useIntroPresenter } from './intro.presenter'

export const Intro = () => {
  const { onEncrypt } = useIntroPresenter()

  return (
    <div className='intro-container'>
      <h2 className='intro-heading'>Secret Gen</h2>
      <p className='intro-text'>start now to get your server key.</p>
      <button className='intro-button' onClick={onEncrypt}>
        Start
      </button>
    </div>
  )
}
