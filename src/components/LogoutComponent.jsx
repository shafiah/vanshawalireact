import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutComponent = () => {
    const navigator=useNavigate();
    useEffect(()=>{
        // Remove JWT token
    localStorage.removeItem("token");

    // Optional: remove user info
    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    // Redirect to login
    navigator("/loginuser");

    },[navigator])
  return (
    <div>
      
    </div>
  )
}

export default LogoutComponent
