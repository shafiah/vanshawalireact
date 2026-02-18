import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService';

const LoginComponent = () => {
    const [username,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const navigator=useNavigate();

    function handleLogin(e){
        e.preventDefault();
        const loginData = {username,password};
        console.log(loginData);
        loginUser(loginData).then((response)=>{
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.username);
            localStorage.setItem("userId", response.data.userId);
            navigator('/userlist');
        }).catch(error=>{
            alert("Invalid username or password");
            console.error(error);
        })
    }

  return (
    <div className="container">
        <div className='row'>
            <h2 className="text-center">Login</h2>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <div className='card-body'>
                <form>
                <div className='form-group mb-2'>
                    <label className='form-label'> UserName</label>
                    <input
                    type="text"
                    placeholder="Username"
                    className="form-control mb-2"
                    value={username}
                    onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className='form-group mb-2'>
                    <label className='form-label'>Password</label>
                    <input
                    type="password"
                    placeholder="Password"
                    className="form-control mb-2"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>

                </div>
                <div>
                    <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
                </div> 
            </form>
                </div>
            </div>
        </div>
            

            
        </div>
  )
}

export default LoginComponent