import React, { Component, useState,useEffect } from "react";
import PolicyService from "../services/PolicyService";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UpdatePolicyComponent = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 
  const [policies, setPolicies] = useState({
    policy:''
  });
  const changePolicyHandler = (event) => {
    setPolicies(event.target.value);
  };


  useEffect(() => {
      PolicyService.getPolicyById(id).then((res) => {
          const obj = res.data;
          setPolicies({
              policy: obj.policy,
             
          });
      });
  }, [id]); 
  const updatePolicy = (e) => {
    e.preventDefault();
    let obj = { policies: policies };
    PolicyService.updatePolicy(id,obj).then((res) => {
      navigate("/policy");
    });
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label> Policy: </label>
                  <input
                    placeholder="policy"
                    name="policies"
                    className="form-control"
                    // value={this.policy}
                    onChange={changePolicyHandler}
                  />
                </div>

                <button
                  className="btn btn-success"
                  onClick={updatePolicy}
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

export default UpdatePolicyComponent;