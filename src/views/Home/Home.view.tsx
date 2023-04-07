import { useState } from 'react'
import '../../styles/home.css'
import { globalPresenter, useEncryptStore } from '../Content.presenter'

export const Home = () => {
  const { logout, regenerate } = globalPresenter()
  const { cipherSecret, secret } = useEncryptStore()
  const [checked, setChecked] = useState(false)

  return (
    <div className='container'>
      <h2 className='title'>Home</h2>
      <div className='home-content'>
        <div>
          <p className='label'>Secret</p>
          <p className='value'>{secret}</p>
        </div>
        <div>
          <p className='label'>cipherSecret</p>
          <p className='value'>{cipherSecret}</p>
        </div>
      </div>
      <button onClick={regenerate}>Regenerate</button>
      <button className='logout' onClick={() => logout(checked)}>
        Logout
      </button>
      <label>
        <input
          type='checkbox'
          defaultChecked={checked}
          onChange={() => setChecked((v) => !v)}
        />
        As new Application?
      </label>
    </div>
  )
}
