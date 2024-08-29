import axios from "axios"


const POLICY_GET_ALL_URL="http://localhost:8081/api/policies"
const POLICY_POST_URL="http://localhost:8081/api/create/policies"
const POLICY_GET_URL="http://localhost:8081/api/get/policy"
const POLICY_UPDATE_URL="http://localhost:8081/api/update/policy"
const POLICY_DELETE_URL="http://localhost:8081/api/delete/policy"

    const getAllPolices=()=>{
        return axios.get(POLICY_GET_ALL_URL)
    }

    const createPolicy = (policy) => {
        return axios.post(POLICY_POST_URL,policy);
    }

    const getPolicyById = (id) => {
        return axios.get(POLICY_GET_URL+'/'+id);
    }

    const updatePolicy = (id, policy) => {
        // console.log("obj",policy,id)
        return axios.put(POLICY_UPDATE_URL + '/' + id, policy)
            .then(response => {
                console.log('Policy updated successfully:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error updating policy:', error);
                throw error;
            });
    }
    const deletePolicy = (id) => {
        // console.log("obj",policy,id)
        return axios.delete(POLICY_DELETE_URL + '/' + id )
            .then(response => {
                console.log('Policy updated successfully:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error updating policy:', error);
                throw error;
            });
    }



export default  {
    getAllPolices,
    createPolicy,
    getPolicyById,
    updatePolicy,
    deletePolicy
  };