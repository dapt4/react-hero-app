import { HeroTypes, HeroFav } from './HeroTypes'

export interface StateTypes{
  heroes: HeroTypes[]
  favorites: HeroFav
}

export type ActionTypes =
    {type: 'addFavorite', favorite: HeroTypes}
  | {type: 'delFavorite', id: number}
  | {type: 'addHeroes', heroes: HeroTypes[]}
