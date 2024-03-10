import { useContext } from 'react'
import { API_KEY, BASE_URL } from '../constants/constants'
import { HeroTypes } from '../types/HeroTypes'
import { HeroResponse } from '../types/ServicesTypes'
import { HeroContext } from '../contexts/hero'

export default function useHeroes () {
  const { dispatch } = useContext(HeroContext)
  const getAllHeroes = async () => {
    const url = `${BASE_URL}?limit=50&ts=1&apikey=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    const allHeroes: HeroTypes[] = data.data.results.map((hero: HeroResponse) => ({
      id: hero.id,
      name: hero.name,
      description: hero.description,
      image: hero.thumbnail.path?.concat('.' + hero.thumbnail.extension)
    }))
    dispatch({ type: 'addHeroes', heroes: allHeroes })
  }
  return { getAllHeroes }
}
