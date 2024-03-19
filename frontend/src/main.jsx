import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/home/HomePage'
import RecipesPage from './pages/RecipesPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import ItemPage from './pages/ItemPage'


import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/recipes',
    element: <RecipesPage />,
  },
  {
    path: '/recipes/:recipeId',
    element:  <ItemPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
