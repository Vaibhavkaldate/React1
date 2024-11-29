import React, {useState} from "react";
import './LoginForm.css'
const LoginForm=()=>{
    const [email,setemail]=useState('');
    const [password, setPassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Email',email)
        console.log('Password', password);
    };
    return(
        <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} required />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setemail(e.target.value)} required />
            </div>
            <button type='submit'>Login</button>
        </form>
        </div>
    )
};
export default LoginForm;