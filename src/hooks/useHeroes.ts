import { useContext, useEffect } from 'react'
import { API_KEY, BASE_URL } from '../constants/constants'
import { HeroTypes } from '../types/HeroTypes'
import { HeroResponse } from '../types/ServicesTypes'
import { HeroContext } from '../contexts/hero'

export default function useHeroes () {
  const { hero, dispatch } = useContext(HeroContext)
  const getAllHeroes = async () => {
    const url = `${BASE_URL}?limit=50&ts=1&apikey=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    const allHeroes: HeroTypes[] = data.data.results.map((hro: HeroResponse) => ({
      id: hro.id,
      name: hro.name,
      description: hro.description,
      image: hro.thumbnail.path?.concat('.' + hro.thumbnail.extension)
    }))
    dispatch({ type: 'addHeroes', heroes: allHeroes })
  }
  useEffect(() => { getAllHeroes() }, [])
  const count = hero.favMode
    ? Object.values(hero.favorites).length
    : hero.heroes.length
  return { hero, count }
}
