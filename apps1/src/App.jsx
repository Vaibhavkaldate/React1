import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

 
function App() {
    const [arr,setArr]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        const p=axios.get("https://jsonplaceholder.typicode.com/todos")
        p.then((data)=>{
            console.log(data.data)
            setIsLoading(false)
            setArr(data.data)
        },(er)=>{
            console.log(er)
        })
    }, [])
    return(
        <>
        <div>
            {
                isLoading? "Loading data from server....": <table border={1}>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((obj)=>{
                                return(
                                    <tr key={obj.id}>
                                        <td>{obj.userId}</td>
                                        <td>{obj.id}</td>
                                        <td>{obj.title}</td>
                                        <td>{obj.completed?"true":"false"}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
        </>
    )
}

export default App