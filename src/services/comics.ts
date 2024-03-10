import { API_KEY, BASE_URL } from '../constants/constants'
import { ComicTypes } from '../types/ComicTypes'
import { HeroTypes } from '../types/HeroTypes'
import { ComicResponse } from '../types/ServicesTypes'

export const getCommics = async (hro:HeroTypes) => {
  const url = `${BASE_URL}/${hro.id}/comics?limit=20&apikey=${API_KEY}`
  const res = await fetch(url)
  const { data: { results } } = await res.json()
  const unSorted: ComicTypes[] = results.map((comic: ComicResponse) => ({
    id: comic.id,
    title: comic.title,
    date: new Date(comic.dates[0].date).getTime(),
    image: comic.thumbnail.path?.concat('.' + comic.thumbnail.extension)
  }))
  const sorted = unSorted.sort((a, b) => {
    if (a.date > b.date) { return 1 }
    if (a.date < b.date) { return -1 }
    return 0
  })
  return sorted
}
