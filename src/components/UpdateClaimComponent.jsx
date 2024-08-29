import React, { useEffect } from 'react'
import { useState } from 'react'
import ClaimService from '../services/ClaimService';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UpdateClaimComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const[claims,setClaims]=useState({
    policy:''
  });

  const changeClaimHandler=(event)=>{
    setClaims(event.target.value);
  };

  useEffect(()=>{
    ClaimService.getAllClaimsById(id).then((res)=>{
      const obj=res.data;
      setClaims({
        claim:obj.claim,
      })
    })
  },[id]);
  const updateClaim = (e) => {
    e.preventDefault();
    let obj = { claims: claims };
    ClaimService.updateClaim(id,obj).then((res) => {
      navigate("/claim");
    });
  };
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Claim</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Claim: </label>
                  <input
                    placeholder="claims"
                    name="claims"
                    className="form-control"
                    // value={this.policy}
                    onChange={changeClaimHandler}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={updateClaim}
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateClaimComponent
