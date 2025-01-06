import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCountStore from './store/CountStore'
import Show from './components/Show'

function App() {
  const countvalue=useCountStore((state)=>state.count)
  const dcr=useCountStore((obj)=>obj.decreaseCount)
  function handleClick(){
    dcr({value:10})
  }
 

  return (
    <>
     <div>
      <input type="button" value="Decrement" onClick={handleClick} />
      <br />
      Count is {countvalue}
      <br />
      Count show from show : <Show></Show>
     </div>
    </>
  )
}

export default App
