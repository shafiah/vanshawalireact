import React, { useEffect, useState } from 'react'
import { createUser, singleUser, updateUser } from '../services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [address,setAddress] = useState('');
    const [mobile,setMobile] = useState('');
    const [photo, setPhoto] = useState(null);

    const {userId} = useParams();

    const navigator=useNavigate();

    useEffect(()=>{
        if(userId){
            singleUser(userId).then((response)=>{
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAddress(response.data.address);
            setMobile(response.data.mobile);
        }).catch(error=>{
            console.error(error);
        })
        }
    },[userId])

    function saveOrUpdateUser(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("address", address);
    formData.append("mobile", mobile);

    if (photo) {
        formData.append("photo", photo);
    }

    if (userId) {
        updateUser(userId, formData)
            .then((response) => {
                navigator('/userlist');
            })
            .catch(error => console.error(error));
    } else {
        createUser(formData)
            .then((response) => {
                navigator('/userlist');
            })
            .catch(error => console.error(error));
    }
}


    function pageTitle(){
        if(userId){
            return <h1 className='text-center'>Update User</h1>
        }
        else{
            return <h1 className='text-center'>Add User</h1>
        }
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
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
                                <label className='form-label'>Address</label>
                                <input type='text'
                                placeholder='Address'
                                name='address'
                                value={address}
                                className='form-control'
                                onChange={(e)=> setAddress(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Mobile.No</label>
                                <input type='text'
                                placeholder='Mobile.No'
                                name='mobile'
                                value={mobile}
                                className='form-control'
                                onChange={(e)=> setMobile(e.target.value)}></input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Photo</label>
                                <input type='file'
                                className='form-control'
                                onChange={(e) => setPhoto(e.target.files[0])} ></input>
                                 
                            </div>
                            <div>
                                <button className='btn btn-success' onClick={saveOrUpdateUser}>submit</button>
                            </div>
                            {/* BACK BUTTON */}
                            <div className="text-center">
                                <button className="btn btn-secondary" onClick={() => navigator('/userlist')}>
                                Back to List</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    </div>
  )
}

export default UserComponent