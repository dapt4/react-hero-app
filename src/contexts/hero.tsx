import { ReactNode, createContext, useReducer } from 'react'
import { StateTypes } from '../types/ReducerTypes.ts'
import { heroReducer } from '../reducers/heroReducer.ts'

export const HeroContext = createContext({})

interface PropsType {
  children: ReactNode
}

const STATE: StateTypes = { heroes: [], favorites: {} }

export function HeroProvider ({ children }: PropsType) {
  const [hero, dispatch] = useReducer(heroReducer, STATE)

  return (
    <HeroContext.Provider value={{ hero, dispatch }}>
      {children}
    </HeroContext.Provider>
  )
}
