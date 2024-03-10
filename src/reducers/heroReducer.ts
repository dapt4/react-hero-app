import { HeroFav } from '../types/HeroTypes'
import { ActionTypes, StateTypes } from '../types/ReducerTypes'

export function heroReducer (state: StateTypes, action: ActionTypes):StateTypes {
  switch (action.type) {
    case 'addFavorite':
      return {
        ...state,
        favorites: {
          ...state.favorites,
          [action.favorite.id]: {
            id: action.favorite.id,
            name: action.favorite.name,
            image: action.favorite.image,
            description: action.favorite.description
          }
        }
      }
    case 'delFavorite':{
      const result: HeroFav = {}
      for (const key in state.favorites) {
        if (parseInt(key) !== action.id) {
          result[key] = state.favorites[key]
        }
      }
      return {
        ...state,
        favorites: result
      }
    }
    case 'addHeroes':
      return {
        ...state,
        heroes: [
          ...action.heroes
        ]
      }
    case 'favMode':
      return {
        ...state,
        favMode: action.value
      }
    default:
      return state
  }
}
