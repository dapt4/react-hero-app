import { useContext, useEffect, useState } from 'react'
import { HeroContext } from '../contexts/hero'
import { useParams } from 'react-router-dom'
import { ComicTypes } from '../types/ComicTypes'
import { getCommics } from '../services/comics'
import HeroDescription from '../components/HeroDescription'
import Comics from '../components/Comics'

export default function Detail () {
  const { hero } = useContext(HeroContext)
  const [comics, setCommics] = useState<ComicTypes[]>([])
  const { id } = useParams()
  const dHero = id && hero.heroes.find(hro => hro.id === parseInt(id))
  useEffect(() => {
    dHero && getCommics(dHero)
      .then((data) => setCommics(data))
  }, [])
  return (
    <>
      <main>
        <section>
          {dHero && <HeroDescription dHero={dHero} />}
        </section>
        <section>
          {comics?.length > 0 && <Comics comics={comics} />}
        </section>
      </main>
    </>
  )
}
