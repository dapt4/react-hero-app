import { useContext } from 'react'
import { HeroContext } from '../contexts/hero'
import { HeroTypes } from '../types/HeroTypes'
import { ActionTypes } from '../types/ReducerTypes'

export default function useFavorite () {
  const { hero, dispatch } = useContext(HeroContext)
  const setFavorite = (hro: HeroTypes) => {
    const message: ActionTypes = hero.favorites[hro.id]
      ? { type: 'delFavorite', id: hro.id }
      : { type: 'addFavorite', favorite: hro }
    dispatch(message)
  }
  return { hero, setFavorite }
}
