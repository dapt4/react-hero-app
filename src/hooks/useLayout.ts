import { useContext } from 'react'
import { HeroContext } from '../contexts/hero'
import { useNavigate } from 'react-router-dom'

export default function useLayout () {
  const { hero, dispatch } = useContext(HeroContext)
  const count = Object.entries(hero.favorites).length
  const navigate = useNavigate()
  const noFavHandler = () => dispatch({ type: 'favMode', value: false })
  const favHandler = () => {
    dispatch({ type: 'favMode', value: !hero.favMode })
    navigate('/')
  }
  return { favHandler, noFavHandler, count }
}
