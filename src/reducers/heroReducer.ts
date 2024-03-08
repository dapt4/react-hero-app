import { ActionTypes, StateTypes } from '../types/ReducerTypes'

// const obj: HeroFav = { 1: { id: 1, name: 'diego', image: '', description: '' } }

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
    case 'delFavorite':
      return {
        ...state,
        favorites: Object.entries(state.favorites).filter((fav) => fav[0] !== action.id)
      }
    case 'addHeroes':
      return {
        ...state,
        heroes: [
          ...action.heroes
        ]
      }
    default:
      return state
  }
}
