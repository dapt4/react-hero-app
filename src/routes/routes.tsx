import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/Main.tsx'
import Detail from '../pages/Detail'
import ErrorPage from '../pages/ErrorPage.tsx'
import Layout from '../Layout.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> }
    ]
  },
  {
    path: '/detail/:id',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Detail /> }
    ]
  }
])
