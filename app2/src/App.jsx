import { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import { useReducer } from 'react'
import axios from 'axios';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MyContext } from './components/context';

const App = () => {
  const [fname, setFname] = useState("")
  const c3 = useContext(MyContext)
  c3.msg = "App Message"
  const ref1 = useRef(null)

  function handleClick() {
    setFname(ref1.current.value)
  }
  return (
    <>
      <div>
        <MyContext.Provider value={c3}>
          <Header />
          <p>
            <input type="text" ref={ref1} />
            <br />
            <input type="button" value="Click Here" onClick={handleClick} />
            <br />
            This is main body content

          </p>
          <Footer />
        </MyContext.Provider>
      </div>


    </>
  );
};

export default App;


