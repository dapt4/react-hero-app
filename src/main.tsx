import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { HeroProvider } from './contexts/hero.tsx'
import { router } from './routes/routes.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeroProvider>
      <RouterProvider router={router} />
    </HeroProvider>
  </React.StrictMode>
)
