import { json, Link,NavLink } from 'react-router-dom'
import './Header.css'

import Logo from '../assets/google-play-games.webp'
import { useCart } from '../context/CartContext'
import { useState } from 'react'


import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Provider } from '../firebase/config'

export const Header = () => {
  const {cartList} = useCart()
  const [isAuth, setIsAuth] = useState (JSON.parse(localStorage.getItem("isAuth") || false ))

  function handleLogin(){
    signInWithPopup(auth, Provider).then((result) => {
      console.log(result)
      setIsAuth(true)
      localStorage.setItem("isAuth", true)
    })
  }
  function handleLogout(){
     signOut(auth)
     setIsAuth(false)
     localStorage.setItem("isAuth", false)
  }
  return (
    <header>
      <Link to='/' className='logo'>
        <img src={Logo} alt='logo' />
        <span>Shopping Cart</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className='link'>Home</NavLink>
        { isAuth ? (
             <>
              <NavLink to='/cart' className='link'>Cart</NavLink>
              <NavLink to='/create'> CreateCard</NavLink>
              <button onClick={handleLogout}  className='link'>  Logout</button>
             </>
        ) : (
           <NavLink to='/'><button onClick={handleLogin}  className='link'> Login</button></NavLink>
        ) } 
      </nav>
      <Link to='/cart'>
        <span>Cart: {cartList.length} </span>
      </Link>
    </header>
  )
}
