import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/about")
  }
  return (
    <div>
      <h1>This is Home Page</h1>
      <br />
      <Link to='/posts'>Posts</Link>
    </div>
  )
}
function Post() {
  const obj = useParams()
  return (
    <div>
      <h3>This is Post Details</h3>
      <br />
      Post id is {obj.id}
    </div>
  )
}

function Posts() {
  return (
    <div>
      <h3>This is Post Page</h3>
      <ul>
        <li> <Link to='/post/1'>Post1</Link></li>
        <li> <Link to='/post/2'>Post2</Link></li>
        <li> <Link to='/post/3'>Post3</Link></li>
      </ul>
    </div>
  )
}





const App = () => {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/post/:id' element={<Post />}></Route>
        </Routes>

      </div>

    </>
  );
};

export default App;


