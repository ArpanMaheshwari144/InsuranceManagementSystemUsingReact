import React, { Component } from "react";
import PolicyService from "../services/PolicyService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  { useState, useEffect } from 'react';
const ListPolicyComponents=()=>{
    const navigate = useNavigate();
    const [policies, setPolicies] = useState([]);

    useEffect(() => {
        PolicyService.getAllPolices().then((res) => {
            setPolicies(res.data);
        });
    }, []);
    const editPolicy=(id)=>{
        navigate(`/update-policy/${id}`);

        
    }
    const deletePolicy=(id)=>{
        // preventDefault();
        // let obj = { policies: policies };
        PolicyService.deletePolicy(id).then((res) => {
            setPolicies(policies.filter((policy)=>policy.id!==id))
        // navigate("/policy");
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
                                <td><button onClick={()=>editPolicy(policy.id) } className="btn btn-info" >Update</button>
                                <button onClick={()=>deletePolicy(policy.id) } className="btn btn-danger" >Delete</button></td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
          )
        
      
}
export default ListPolicyComponents