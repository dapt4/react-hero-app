import { API_KEY, BASE_URL } from '../constants/constants'
import { HeroResponse } from '../types/ServicesTypes'

export const findHeroes = async (name: string) => {
  try {
    const url =
      name === ''
        ? `${BASE_URL}?limit=50&ts=1&apikey=${API_KEY}`
        : `${BASE_URL}?nameStartsWith=${name}&limit=50&ts=1&apikey=${API_KEY}`
    const res = await fetch(url)
    const data = await res.json()
    return data.data.results.map((hero: HeroResponse) => ({
      id: hero.id,
      name: hero.name,
      description: hero.description,
      image: hero.thumbnail.path?.concat('.' + hero.thumbnail.extension)
    }))
  } catch (error) {
    console.error('Hubo un error de solicitud')
  }
}
