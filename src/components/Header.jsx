import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/components/Header.css'

const Header = () => {
  const { state } = useContext(AppContext)
  const { cart } = state
  return (
    <div className='Header'>
      <h2 className='Header-title' />
      <Link to='/'>Store</Link>
      <div className='Header-checkout'>
        <Link to='/checkout'>
          <i className='fas fa-shopping-basket fa-2x' />
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header
