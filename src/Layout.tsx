import { useContext } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import './styles/Layout.scss'
import logo from './assets/logo.png'
import heart from './assets/heartFull.svg'
import { HeroContext } from './contexts/hero'

export default function Layout () {
  const { hero, dispatch } = useContext(HeroContext)
  const count = Object.entries(hero.favorites).length
  const navigate = useNavigate()
  const noFavHandler = () => dispatch({ type: 'favMode', value: false })
  const favHandler = () => {
    dispatch({ type: 'favMode', value: !hero.favMode })
    navigate('/')
  }
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
