import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage/index.jsx'
import Authentication from './pages/Authentication/index.jsx'
import Plaftorm from './pages/Platform/index.jsx'
import Dashboard from './pages/Platform/pages/Dashboard/index.jsx'
import LogsHistory from './pages/Platform/pages/LogsHistory/index.jsx'
import PageNotFound from './pages/PageNotFound/index.jsx'
import Leaderboard from './pages/Platform/pages/LeaderBoard/index.jsx'
import LogDetails from './pages/Platform/pages/LogDetails/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index: true, element: <LandingPage />},
      {path: 'auth', element: <Authentication/>},
      {
        path: 'service', 
        element: <Plaftorm/>,
        children: [
          {index: true, element: <Dashboard/>},
          {path: 'dashboard', element: <Dashboard/>},
          {path: 'leaderboard', element: <Leaderboard/>},
          {path: 'logs', element: <LogsHistory/>},
          {path: 'logs/:id', element: <LogDetails/>},
        ]
      },
      {path: '*', element: <PageNotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
