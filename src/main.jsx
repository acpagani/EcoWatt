import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage/index.jsx'
import Authentication from './pages/Authentication/index.jsx'
import Plaftorm from './pages/Platform/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <LandingPage />},
      {path: '/auth', element: <Authentication/>},
      {path: '/home', element: <Plaftorm/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
