import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Booking from './pages/Booking.tsx'
import AdminLogIn from './pages/AdminLogIn.tsx'
import AdminDash from './pages/AdminDash.tsx'
import Response from './pages/Response.tsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Home/>} />
      <Route path='/appointment/:tab' element={<Booking/>}/>
      <Route path='/appointment' element={<Booking/>}/>
      <Route path='/login' element={<AdminLogIn/>}/>
      <Route path='/dashboard' element={<AdminDash/>}/>
      <Route path='/success' element={<Response/>}/>
    </Route>
  )
)



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
