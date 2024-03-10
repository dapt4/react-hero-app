import { useEffect, useState, useContext } from 'react'
import { ComicTypes } from '../types/ComicTypes'
import { getCommics } from '../services/comics'
import { HeroContext } from '../contexts/hero'

export default function useDetail (id: string) {
  const { hero } = useContext(HeroContext)
  const [comics, setCommics] = useState<ComicTypes[]>([])
  const dHero = id && hero.heroes.find(hro => hro.id === parseInt(id))
  useEffect(() => {
    dHero && getCommics(dHero)
      .then((data) => setCommics(data))
  }, [])
  return { comics, hero: dHero }
}
