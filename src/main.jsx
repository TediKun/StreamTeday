import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './layout/About'
import Contact from './layout/Contact'
import ErrorPages from './pages/ErrorPages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const pages = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPages />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={pages} />
    <Footer />
  </StrictMode>
)
