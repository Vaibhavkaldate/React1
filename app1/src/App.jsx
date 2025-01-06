
import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes, Link, useNavigate, useParams } from 'react-router-dom';

const arr=[{id:1, name:'abc', phone:987},
  {id:2, name:'xyz', phone:754},
  {id:3, name:'pqr', phone:876}
]
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
  
  const ob1=arr.find((r)=>r.id==obj.id)
  return (
    <div>
      <h3>This is Post Details</h3>
      <br />
     <table border={1}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ob1.id}</td>
          <td>{ob1.name}</td>
          <td>{ob1.phone}</td>
        </tr>
      </tbody>
     </table>
    </div>
  )
}

function Posts() {
  return (
    <div>
      <h3>This is Post Page !!!</h3>
      <ul>
        {arr.map((obj)=>{
          return(
            <li key={obj.id}> <Link to={`/post/${obj.id}`}>{obj.name}</Link></li>
          )
        })}

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


