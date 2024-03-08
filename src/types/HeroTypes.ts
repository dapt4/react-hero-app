export type HeroTypes = {
  id: number
  name: string
  image: string
  description: string
}

export interface HeroFav {
  [key: number]: HeroTypes
}
