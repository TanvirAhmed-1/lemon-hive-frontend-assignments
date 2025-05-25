import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Routes/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-[1400px] mx-auto'>
      <RouterProvider router={Route}></RouterProvider>
    </div>
  </StrictMode>,
)
