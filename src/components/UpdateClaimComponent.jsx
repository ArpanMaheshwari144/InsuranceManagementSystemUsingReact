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
    // Fetch claim details by ID
    ClaimService.getAllClaimsById(id).then((res) => {
      setClaim(res.data.claim);
    }).catch((error) => {
      console.error('Error fetching claim:', error);
    });
  }, [id]);

  const updateClaim = (e) => {
    e.preventDefault();
    const updatedClaim = { claim }; // Adjust the payload if necessary
    ClaimService.updateClaim(id, updatedClaim).then((res) => {
      navigate("/claim");
    }).catch((error) => {
      console.error('Error updating claim:', error);
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
                    type="text"
                    placeholder="Enter claim"
                    name="claim"
                    
                    className="form-control"
                    value={claim}
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
