import { HeroTypes } from '../types/HeroTypes'
import heartFull from '../assets/heartFull.svg'
import heartEmpty from '../assets/heartEmpty.svg'
import '../styles/HeroDescription.scss'
import cut from '../assets/cut.png'
import useFavorite from '../hooks/useFavorite'

export default function HeroDescription ({ dHero }: {dHero: HeroTypes}) {
  const { hero, setFavorite } = useFavorite()
  return (
    <div className='description'>
      <div className='description__content'>
        <img className='image' src={dHero.image} alt='hero image' />
        <div className='info'>
          <span className='info-heading'>
            <span>{dHero.name}</span>
            <button onClick={() => setFavorite(dHero)}>
              <img
                src={hero.favorites[dHero.id] ? heartFull : heartEmpty}
                alt='favorite'
              />
            </button>
          </span>
          <span className='info-text'>{dHero.description}</span>
        </div>
      </div>
      <img className='description__cut' src={cut} alt='cut element' />
    </div>
  )
}
