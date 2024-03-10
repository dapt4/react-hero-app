import { useContext } from 'react'
import { HeroContext } from '../contexts/hero'
import cardImage from '../assets/card.png'
import heartEmpty from '../assets/heartEmpty.svg'
import heartFull from '../assets/heartFull.svg'
import { HeroTypes } from '../types/HeroTypes'
import '../styles/HeroCard.scss'
import { ActionTypes } from '../types/ReducerTypes'
import { Link } from 'react-router-dom'

export default function HeroCards () {
  const { hero, dispatch } = useContext(HeroContext)
  const data = hero.favMode ? Object.values(hero.favorites) : hero.heroes
  const favoriteHandler = (hro: HeroTypes) => {
    const message: ActionTypes = hero.favorites[hro.id]
      ? { type: 'delFavorite', id: hro.id }
      : { type: 'addFavorite', favorite: hro }
    dispatch(message)
  }
  return (
    <>
      {
        data.length > 0 && data.map(hro => (
          <div className='heroCard' key={hro.id}>
            <Link className='heroCard__content' to={`/detail/${hro.id}`}>
              <img className='image' src={hro.image} alt='hero image' />
              <img className='imgfooter' src={cardImage} alt='hero card' />
              <span className='name'>{hro.name}</span>
            </Link>
            <button onClick={() => favoriteHandler(hro)} className='heroCard__fav'>
              <img src={hero.favorites[hro.id] ? heartFull : heartEmpty} alt='favorite button' />
            </button>
          </div>
        ))
      }
    </>
  )
}
