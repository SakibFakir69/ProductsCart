import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { route } from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const quryclient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>


    <QueryClientProvider client={quryclient}>
      
    <RouterProvider router={route}/>

    </QueryClientProvider>
    


  


  </StrictMode>,
)
