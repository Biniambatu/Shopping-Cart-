import { Link,NavLink } from 'react-router-dom'
import './Header.css'
import Logo from '../assets/google-play-games.png'
export const Header = () => {
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt='logo' />
        <span>Shopping Crt</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className='link'>Home</NavLink>
        <NavLink to='/cart' className='link'>Cart</NavLink>
      </nav>
      <Link to='/cart'>
        <span>Cart: 2</span>
      </Link>
    </header>
  )
}
