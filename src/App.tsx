import './App.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { router } from './routes'

function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | manage.shop" />
      <Toaster />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

export default App
