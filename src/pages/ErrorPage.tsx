import '../styles/ErrorPage.scss'
import { Link } from 'react-router-dom'

export default function ErrorPage () {
  return (
    <div className='error'>
      <div className='error__message'>
        <h1>404</h1>
        <h2>Page not found</h2>
        <Link to='/'>Go home</Link>
      </div>
    </div>
  )
}
