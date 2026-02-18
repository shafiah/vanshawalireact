import React, { useState } from 'react'
import { createNewAccount } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const SignUpUserComponent = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    const navigator=useNavigate();

    function saveUser(e){
        e.preventDefault();
        const user ={firstName,lastName,email,username,password};
        console.log(user);
        createNewAccount(user).then((response)=>{
            navigator('/userlist')
        }).catch(error=>{
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <div className='row'>
            <h1 className='text-center'>Create New Account</h1>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                                <label className='form-label'>FirstName</label>
                                <input type='text'
                                placeholder='FirstName'
                                name='firstName'
                                value={firstName}
                                className='form-control'
                                onChange={(e)=> setFirstName(e.target.value)}></input>
                            </div>
                        <div className='form-group mb-2'>
                                <label className='form-label'>LastName</label>
                                <input type='text'
                                placeholder='LastName'
                                name='lastName'
                                value={lastName}
                                className='form-control'
                                onChange={(e)=> setLastName(e.target.value)}></input>
                            </div>
                        <div className='form-group mb-2'>
                                <label className='form-label'>Email</label>
                                <input type='text'
                                placeholder='Email'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={(e)=> setEmail(e.target.value)}></input>
                            </div>
                        <div className='form-group mb-2'>
                                <label className='form-label'>UserName</label>
                                <input type='text'
                                placeholder='UserName'
                                name='username'
                                value={username}
                                className='form-control'
                                onChange={(e)=> setUserName(e.target.value)}></input>
                            </div>
                        <div className='form-group mb-2'>
                                <label className='form-label'>Password</label>
                                <input type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                className='form-control'
                                onChange={(e)=> setPassword(e.target.value)}></input>
                        </div>
                        <div>
                                <button className='btn btn-success' onClick={saveUser}>signup</button>
                        </div>

                    </form>
                </div>
        </div>
        </div>

        

    </div>
  )
}

export default SignUpUserComponent