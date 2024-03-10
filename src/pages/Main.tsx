import { useContext, useEffect } from 'react'
import { HeroContext } from '../contexts/hero'
import '../styles/Main.scss'
import HeroCards from '../components/HeroCards'
import Finder from '../components/Finder.tsx'
import useHeroes from '../hooks/useHeroes.ts'

export default function Main () {
  const { hero } = useContext(HeroContext)
  const { getAllHeroes } = useHeroes()
  useEffect(() => { getAllHeroes() }, [])
  return (
    <main className='main'>
      {hero.favMode && (
        <section className='favorites'>
          <span className='favorites__title'>FAVORITES</span>
        </section>
      )}
      <section className='search'>
        <div className='search__box'>
          <Finder />
        </div>
        <span className='search__count'>{hero.heroes.length} RESULTS</span>
      </section>
      <section className='heroes'>
        <div className='heroes__box'>
          <HeroCards />
        </div>
      </section>
    </main>
  )
}
