import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';

const App = () => {
 
  return (
    <>
      <div>
       <h1>Hello from main page</h1>
       <p>Some example of other pages</p>
       <nav>
        <ul>
          <li>
            <Link to="profile">Profile Page</Link>
          </li>
        </ul>
       </nav>

      </div>

    </>
  );
};

export default App;
