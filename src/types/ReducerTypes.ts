import { HeroTypes, HeroFav } from './HeroTypes'

export interface StateTypes{
  heroes: HeroTypes[]
  favorites: HeroFav
  favMode: boolean
}

export type ActionTypes =
    {type: 'addFavorite', favorite: HeroTypes}
  | {type: 'delFavorite', id: number}
  | {type: 'addHeroes', heroes: HeroTypes[]}
  | {type: 'favMode', value: boolean}
