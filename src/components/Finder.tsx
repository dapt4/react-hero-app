import { ChangeEvent, useContext, useId, useState } from 'react'
import searchIcon from '../assets/search.png'
import { HeroContext } from '../contexts/hero'
import { findHeroes } from '../services/heroes'

export default function Finder () {
  const { dispatch } = useContext(HeroContext)
  const inputId = useId()
  const [value, setValue] = useState('')
  const changeHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setValue(text)
    const heroes = await findHeroes(text)
    dispatch({ type: 'addHeroes', heroes })
  }
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
        onChange={changeHandler}
        value={value}
      />
    </>
  )
}
