import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { singleUser } from '../services/UserService';

const UserVIewComponent = () => {

    const { userId } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        singleUser(userId)
            .then(response => setUser(response.data))
            .catch(error => console.error(error));
    }, [userId]);

    if (!user) {
        return <h3 className="text-center">Loading...</h3>;
    }

  return (
    <div className="container mt-4">
            <div className="card shadow-lg">
                <div className="card-header text-center bg-primary text-white">
                    <h3>User Details</h3>
                </div>

                <div className="card-body">

                    {/* PHOTO */}
                    <div className="text-center mb-4">
                        {
                            user.photo ? (
                                <img
                                    src={user.photo}
                                    alt="User"
                                    style={{
                                        width: "220px",
                                        height: "220px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                        border: "4px solid #0d6efd"
                                    }}
                                />
                            ) : (
                                <img
                                    src="https://via.placeholder.com/220"
                                    alt="No Photo"
                                    style={{ borderRadius: "50%" }}
                                />
                            )
                        }
                    </div>

                    {/* DETAILS */}
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th>User ID</th>
                                <td>{user.userId}</td>
                            </tr>
                            <tr>
                                <th>First Name</th>
                                <td>{user.firstName}</td>
                            </tr>
                            <tr>
                                <th>Last Name</th>
                                <td>{user.lastName}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{user.address}</td>
                            </tr>
                            <tr>
                                <th>Mobile</th>
                                <td>{user.mobile}</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* BACK BUTTON */}
                    <div className="text-center">
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate('/userlist')}
                        >
                            Back to List
                        </button>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default UserVIewComponent
