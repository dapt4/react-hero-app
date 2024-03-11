import { useParams } from 'react-router-dom'
import HeroDescription from '../components/HeroDescription'
import Comics from '../components/Comics'
import useDetail from '../hooks/useDetail'
import '../styles/Detail.scss'

export default function Detail () {
  const { id } = useParams()
  const { comics, hero } = useDetail(id || '')
  return (
    <>
      <main className='detailview'>
        <section>
          {hero && <HeroDescription dHero={hero} />}
        </section>
        <section>
          {comics?.length > 0 && <Comics comics={comics} />}
        </section>
      </main>
    </>
  )
}
