import { Outlet, Link } from 'react-router-dom'
import './styles/Layout.scss'
import logo from './assets/logo.png'
import heart from './assets/heartFull.svg'
import useLayout from './hooks/useLayout'

export default function Layout () {
  const { count, favHandler, noFavHandler } = useLayout()
  return (
    <>
      <header className='navbar'>
        <Link to='/' className='navbar__logo'>
          <img src={logo} alt='brand logo image' onClick={noFavHandler} />
        </Link>
        <button onClick={favHandler} className='navbar__favorite'>
          <img src={heart} alt='favorites icon' />
          <span className='navbar__count'>{count}</span>
        </button>
      </header>
      <Outlet />
    </>
  )
}
