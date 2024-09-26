import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClaimService from '../services/ClaimService';

const UpdateClaimComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [claim, setClaim] = useState('');

  const changeClaimHandler = (event) => {
    setClaim(event.target.value);
  };

  useEffect(() => {
    ClaimService.getAllClaimsById1(id).then((res)  => {
        const obj = res.data;
        setClaim({
            claim: obj.claim,   
        });
    });
}, [id]); 

  const updateClaim = (e) => {
    e.preventDefault();
    let obj = { claims: claim };
    console.log(obj)
    ClaimService.updateClaim(id,obj).then((res) => {
      navigate("/claim");
    });
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h3 className="text-center">Update Claim</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Claim:</label>
                  <input
                    placeholder="claim"
                    name="claim"
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
  );
};

export default UpdateClaimComponent;
