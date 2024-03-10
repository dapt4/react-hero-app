import { useContext } from 'react'
import { HeroTypes } from '../types/HeroTypes'
import { ActionTypes } from '../types/ReducerTypes'
import { HeroContext } from '../contexts/hero'
import heartFull from '../assets/heartFull.svg'
import heartEmpty from '../assets/heartEmpty.svg'
import '../styles/HeroDescription.scss'

export default function HeroDescription ({ dHero }: {dHero: HeroTypes}) {
  const { hero, dispatch } = useContext(HeroContext)
  const favoriteHandler = () => {
    if (dHero) {
      const message: ActionTypes = hero.favorites[dHero.id]
        ? { type: 'delFavorite', id: dHero.id }
        : { type: 'addFavorite', favorite: dHero }
      dispatch(message)
    }
  }
  return (
    <div className='description'>
      <div className='description__content'>
        <img className='image' src={dHero.image} alt='hero image' />
        <div className='info'>
          <span className='info-heading'>
            <span>{dHero.name}</span>
            <button onClick={favoriteHandler}>
              <img
                src={hero.favorites[dHero.id] ? heartFull : heartEmpty}
                alt='favorite'
              />
            </button>
          </span>
          <span className='info-text'>{dHero.description}</span>
        </div>
      </div>
    </div>
  )
}
