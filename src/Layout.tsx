import { Outlet, Link } from 'react-router-dom'
import './styles/Layout.scss'

export default function Layout () {
  return (
    <>
      <header className='navbar'>
        <Link to='/'>hero</Link>
      </header>
      <Outlet />
    </>
  )
}
