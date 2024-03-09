import React from 'react'
import { ActionTypes, StateTypes } from './ReducerTypes'

export interface ContextTypes {
  hero: StateTypes
  dispatch: React.Dispatch<ActionTypes>
}
