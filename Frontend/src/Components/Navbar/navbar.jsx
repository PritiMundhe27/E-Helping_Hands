import { Link } from 'react-router-dom'
import './style.css'
function Navbar() {
  return (
    <nav>
      <Link to={'/'}>
        <div className='navbar-left'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/019/838/622/small/ngo-letter-logo-design-on-white-background-ngo-creative-circle-letter-logo-concept-ngo-letter-design-vector.jpg" alt="logo" className='navbar-logo' />
          <h2>NGO</h2>
        </div>
      </Link>
      <div className="navbar-right">
        {/* logout */}
      </div>
    </nav>
  )
}

export default Navbar