import { ChangeEvent, useContext, useState } from 'react'
import { HeroContext } from '../contexts/hero'
import { findHeroes } from '../services/heroes'

export default function useFind () {
  const { dispatch } = useContext(HeroContext)
  const [value, setValue] = useState('')
  const findHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setValue(text)
    const heroes = await findHeroes(text)
    dispatch({ type: 'addHeroes', heroes })
  }
  return { value, findHandler }
}
