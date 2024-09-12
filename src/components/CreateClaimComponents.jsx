import React, { useState } from 'react';
import ClaimService from '../services/ClaimService';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const CreateClaimComponents = () => {
    const [claim, setClaim] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const changeClaimsHandler = (event) => {
        setClaim(event.target.value);
    }

    const saveOrUpdateClaim = (e) => {
        e.preventDefault();
        let obj = { claims: claim };
        console.log("obj => " + JSON.stringify(obj));
        ClaimService.createClaim(obj).then(res => {
            navigate("/claim"); 
        })
    };

    return (
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="card-body">
                        <form onSubmit={saveOrUpdateClaim}>
                            <div className="form-group">
                                <label>Claim:</label>
                                <input
                                    placeholder="Claims"
                                    name="claims"
                                    className="form-control"
                                    value={claim}
                                    onChange={changeClaimsHandler}
                                    required
                                />
                            </div>
                            <button
                                type="submit" // Change button type to submit
                                className="btn btn-success"
                            >
                                Save
                            </button>
                            {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>  */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateClaimComponents;
