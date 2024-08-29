import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PolicyService from "../services/PolicyService";

const CreateCustomerComponents = () => {
  const [policies, setPolicies] = useState("");
  const navigate = useNavigate();

  const changePoliciesHandler = (event) => {
    setPolicies(event.target.value);
  };

  const saveOrUpdatePolicy = (e) => {
    e.preventDefault();
    let obj = { policies: policies };
    console.log("obj => " + JSON.stringify(obj));
    PolicyService.createPolicy(obj).then(res => {
      navigate("/policy");
    });
  };

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <div className="card-body">
            <form onSubmit={saveOrUpdatePolicy}>
              <div className="form-group">
                <label> Policies: </label>
                <input
                  placeholder="Policies"
                  name="policies"
                  className="form-control"
                  value={policies}
                  onChange={changePoliciesHandler}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-success"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomerComponents;
