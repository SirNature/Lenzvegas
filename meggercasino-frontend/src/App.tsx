import './App.css'
import logo from './Assets/lenzvegas_logo_no_bg.png'

function App() {

  return (
    <div className='topBar' >
      <img src={logo} alt='LenzVegas logo' className='logo' />
      <h1 className='sorry'>Sorry! You will have to wait a little bit before using our totally not profit-based website!</h1>
    </div>
  )
}

export default App
