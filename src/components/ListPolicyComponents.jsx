// import React, { Component } from "react";
import PolicyService from "../services/PolicyService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
const ListPolicyComponents = () => {
    const navigate = useNavigate();
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        PolicyService.getAllPolices().then((res) => {
            setPolicies(res.data);
        });
    }, []);
    const editPolicy = (id) => {
        navigate(`/update-policy/${id}`);
    }
    const handleLogout = () => {
        const token = localStorage.getItem('authToken');
        console.log('Token before removal:', token);

        // Remove the token
        localStorage.removeItem('authToken');

        // Check and log the token after removal
        const removedToken = localStorage.getItem('authToken');
        console.log('Token after removal:', removedToken);
        navigate('/login');
    };
    const deletePolicy = (id) => {
        PolicyService.deletePolicy(id).then((res) => {
            setPolicies(policies.filter((policy) => policy.id !== id))
        });
    }
    return (
        <div>
            <h2 className="text-center">Policies List</h2>
            <div className='text-right mb-3'>
                <Link to='/create-policy' className='btn btn-primary'>Add Policy</Link>

            </div>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Policy</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            policies.map(policy =>
                                <tr key={policy.id}>
                                    <td>{policy.id}</td>
                                    <td>{policy.policies}</td>
                                    <td><button onClick={() => editPolicy(policy.id)} className="btn btn-info mx-2" >Update</button>
                                        <button onClick={() => deletePolicy(policy.id)} className="btn btn-danger" >Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <button onClick={handleLogout} className="btn btn-warning" >Logout</button>
            </div>
        </div>
    )
}
export default ListPolicyComponents