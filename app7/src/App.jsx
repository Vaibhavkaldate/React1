import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import StudentInfo from './components/StudentInfo'
import StudentMarks from './components/Studentmarks'
import Show from './components/Show'
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<StudentInfo></StudentInfo>}></Route>
          <Route path='marks' element={<StudentMarks></StudentMarks>}></Route>
          <Route path='/show' element={<Show></Show>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
