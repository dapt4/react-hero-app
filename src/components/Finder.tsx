import { useId } from 'react'
import searchIcon from '../assets/search.png'
import useFind from '../hooks/useFind'

export default function Finder () {
  const { value, findHandler } = useFind()
  const inputId = useId()
  return (
    <>
      <label className='label' htmlFor={inputId}>
        <img src={searchIcon} alt='search icon' />
      </label>
      <input
        id={inputId}
        className='input'
        type='text'
        placeholder='SEARCH A CHARACTER...'
        onChange={findHandler}
        value={value}
      />
    </>
  )
}
