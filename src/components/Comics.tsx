import { ComicTypes } from '../types/ComicTypes'
import '../styles/Comics.scss'

export default function Comics ({ comics }: {comics: ComicTypes[]}) {
  return (
    <div className='container'>
      <div className='comics'>
        <span className='comics__title'>COMICS</span>
        <div className='comics__list'>
          {comics && comics.map(({ id, image, title, date }) => (
            <div className='comics__item' key={id}>
              <img src={image} alt='comic image' />
              <span>{title}</span>
              <p>{new Date(date).getFullYear()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
