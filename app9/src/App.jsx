import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
function App() {


  return (
    <>
     <div>
     <Routes>
          <Route path='/' element={<Home></Home>}></Route>
         
        </Routes>

     </div>
    </>
  )
}

export default App
