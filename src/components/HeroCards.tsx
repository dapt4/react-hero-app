import cardImage from '../assets/card.png'
import heartEmpty from '../assets/heartEmpty.svg'
import heartFull from '../assets/heartFull.svg'
import '../styles/HeroCards.scss'
import { Link } from 'react-router-dom'
import useFavorite from '../hooks/useFavorite'
import cut from '../assets/cut.png'

export default function HeroCards () {
  const { hero, setFavorite } = useFavorite()
  const data = hero.favMode ? Object.values(hero.favorites) : hero.heroes
  return (
    <>
      {
        data.length > 0 && data.map(hro => (
          <div className='heroCard' key={hro.id}>
            <Link className='heroCard__content' to={`/detail/${hro.id}`}>
              <img className='image' src={hro.image} alt='hero image' />
              <div className='redCard' />
              <img className='imgfooter' src={cardImage} alt='hero card' />
              <img className='imgCut' src={cut} alt='img cut' />
              <span className='name'>{hro.name}</span>
            </Link>
            <button onClick={() => setFavorite(hro)} className='heroCard__fav'>
              <img src={hero.favorites[hro.id] ? heartFull : heartEmpty} alt='favorite button' />
            </button>
          </div>
        ))
      }
    </>
  )
}
