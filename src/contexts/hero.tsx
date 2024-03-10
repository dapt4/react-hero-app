import { ReactNode, createContext, useReducer } from 'react'
import { StateTypes } from '../types/ReducerTypes.ts'
import { heroReducer } from '../reducers/heroReducer.ts'
import { ContextTypes } from '../types/ContextTypes.ts'

export const HeroContext = createContext({} as ContextTypes)

interface PropsType {
  children: ReactNode
}

const INITIAL_STATE: StateTypes = { heroes: [], favorites: { }, favMode: false }

export function HeroProvider ({ children }: PropsType) {
  const [hero, dispatch] = useReducer(heroReducer, INITIAL_STATE)

  return (
    <HeroContext.Provider value={{ hero, dispatch }}>
      {children}
    </HeroContext.Provider>
  )
}
