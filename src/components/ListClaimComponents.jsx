import React, { useEffect, useState } from "react";
import ClaimService from "../services/ClaimService";
import { Link, useNavigate } from "react-router-dom";

const ListClaimComponents = () => {
    const navigate = useNavigate();
    const [claims, setClaims] = useState([]); // Initialize with an empty array

    useEffect(() => {
        ClaimService.getAllClaims()
            .then((res) => {
                setClaims(res.data); // Update state with fetched claims
            })
    }, []);

    const editClaim = (id) => {
        navigate(`/update-claim/${id}`);
    };

    return (
        <div>
            <h2 className="text-center">Claims</h2>
            <div className="text-right mb-3">
                <Link to="/create-claim" className="btn btn-primary">Add Claim</Link>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Claim</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {claims.map((claim) => (
                            <tr key={claim.id}>
                                <td>{claim.id}</td>
                                <td>{claim.claims}</td>
                                <td>
                                    <button 
                                        onClick={() => editClaim(claim.id)}
                                        className="btn btn-info"
                                    >
                                        Update
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListClaimComponents;
