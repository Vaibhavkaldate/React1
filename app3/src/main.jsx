import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Profile from'./components/Profile.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/profile",
    element:<Profile/>,
    children:[
      { path:"about", element:<About/>},
      { path:"contact", element:<Contact/>},
    ],

  },
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
    

)


