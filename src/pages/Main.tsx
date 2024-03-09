import { useContext, useEffect, useId } from 'react'
import searchIcon from '../assets/search.png'
import { HeroContext } from '../contexts/hero'
import '../styles/Main.scss'
import { HeroTypes } from '../types/HeroTypes'

export default function Main () {
  const inputId = useId()
  const { hero, dispatch } = useContext(HeroContext)
  const BASE_URL = 'https://gateway.marvel.com/v1/public/characters'
  const API_KEY = import.meta.env.VITE_API_PUBLIC_KEY
  const findHeroes = async (name: string) => {
    if (name === '') return
    const url = `${BASE_URL}?nameStartsWith=${name}&limit=50&ts=1&apikey=${API_KEY}`
    const res = await fetch(url, {
      headers: {
        'Content-type': 'application/json',
        Accept: '*/*'
      }
    })
    const data = await res.json()
    console.log(data)
  }
  const getAllHeroes = async () => {
    const url = `${BASE_URL}?limit=50&ts=1&apikey=${API_KEY}`
    const res = await fetch(url, {
      headers: {
        'Content-type': 'application/json',
        Accept: '*/*'
      }
    })
    const data = await res.json()
    const result: HeroTypes[] = data.data.results.map((hero: {[key:string]: {path: string}}) => ({
      id: hero.id,
      name: hero.name,
      description: hero.description,
      image: hero.thumbnail.path?.concat('.jpg')
    }))
    dispatch({ type: 'addHeroes', heroes: result })
  }
  useEffect(() => {
    getAllHeroes()
  }, [])
  return (
    <main className='main'>
      <section className='search'>
        <div className='search__box'>
          <label className='label' htmlFor={inputId}>
            <img src={searchIcon} alt='search icon' />
          </label>
          <input
            id={inputId}
            className='input'
            type='text'
            placeholder='SEARCH A CHARACTER...'
          />
        </div>
        <span className='search__count'>{hero.heroes.length} RESULTS</span>
      </section>
      <section className='heroes'>
        aqui van los heroes
      </section>
    </main>
  )
}
