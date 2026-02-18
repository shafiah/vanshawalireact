import React, { useEffect, useState } from 'react'
import { deleteUser, userList } from '../services/UserService';
import { useNavigate } from 'react-router-dom';

const UserListComponent = () => {
    const [userDetail,setUserDetail]=useState([]);
    const [loading, setLoading] = useState(true);

    const isLoggedIn = !!localStorage.getItem("token");

    const navigator = useNavigate();

    useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
        navigator("/loginuser");
    } else {
        getAllUser();
    }
}, []);

    function getAllUser() {
    setLoading(true);
    userList().then(res => setUserDetail(res.data))
      .catch(error => {
    if (error.response?.status === 401 || error.response?.status === 403) {
        localStorage.removeItem("token");
        navigator("/loginuser");
    } else {
        console.error(error);
    }
})
      .finally(() => setLoading(false));
}

    function AddNewUser(){
        navigator('/adduser');
    }

    function SignUpUser(){
        navigator('/signupuser')
    }

    function updateUser(userId){
        navigator(`/edituser/${userId}`);
    }

    function removeUser(userId){
         console.log(userId);
        deleteUser(userId).then((response)=>{
           getAllUser();
            
        }).catch(error=>{
            console.error(error);
        })
    }

    function ViewUser(userId){
        navigator(`/viewuser/${userId}`);
    }

    function LoginUser(){
    navigator('/loginuser');
}

    
  return (
    <div className='container'>
        <br></br>
      {!isLoggedIn && (
  <>
    <button className='btn btn-info' onClick={SignUpUser}>SignUp</button>
    <button className='btn btn-info' onClick={LoginUser}>Login</button>
  </>
)}

{isLoggedIn && (
  <button className='btn btn-success' onClick={AddNewUser}>AddUser</button>
)}
        <div className="card-header text-center bg-primary text-white">
                    <h3>Family Memebers</h3>
        </div>
        {loading && <h4>Loading family members...</h4>}

{!loading && userDetail.length === 0 && (
  <h4>No family members added yet</h4>
)}
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Address</th>
                    <th>Mobile</th>
                    <th>Photo</th>
                    <th>Actions</th>
                    <th>Actions</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    userDetail.map(userDetail=>
                        <tr key={userDetail.userId}>
                            
                            <td>{userDetail.firstName}</td>
                            <td>{userDetail.lastName}</td>
                            <td>{userDetail.address}</td>
                            <td>{userDetail.mobile}</td>
                            <td>{userDetail.photo ? (
                                    <img src={userDetail.photo}
                                    alt="user"
                                    width="60"
                                    height="60"
                                    style={{ borderRadius: "50%" }}/>
                                    ) : (<span>No Photo</span>)
                                }
                            </td>
                            <td>
                                <button className='btn btn-info' onClick={()=> ViewUser(userDetail.userId)}>View/Check</button>
                            </td>
                            <td>
                                <button className='btn btn-info' onClick={()=> updateUser(userDetail.userId)}>Edit/Update</button>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=> removeUser(userDetail.userId)}>Delete</button>
                            </td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default UserListComponent