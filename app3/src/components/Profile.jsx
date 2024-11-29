import { Link, Outlet } from "react-router-dom"

 const Profile=()=>{
    return(
        <div>
            <h1>Hello from profile page</h1>
            <p>So, how are you</p>
            <br />
            <Link to='about'>About</Link>
            <br />
            <Link to='contact'>Contact</Link>
            <Outlet></Outlet>
        </div>
    )
 }
 export default Profile;


 