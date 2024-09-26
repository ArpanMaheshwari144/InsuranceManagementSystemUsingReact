import axios from "axios"


const CLAIM_GET_ALL_URL="http://localhost:8081/api/claims"
const CLAIM_POST_URL="http://localhost:8081/api/create/claims"
const CLAIM_UPDATE_URL="http://localhost:8081/api/update/claim"
const CLAIM_GET_URL="http://localhost:8081/api/get/claim"
    const getAllClaims=()=>{
        return axios.get(CLAIM_GET_ALL_URL)
    }

    const createClaim = (claim) => {
        return axios.post(CLAIM_POST_URL,claim);
    }

    const getAllClaimsById1=(id)=>{
        return axios.get(CLAIM_GET_URL+'/'+id);
    }

    const updateClaim = (id, claim) => {
        console.log("obj",claim,id)
        return axios.put(CLAIM_UPDATE_URL + '/' + id, claim)
            .then(response => {
                console.log('Claim updated successfully:', response.data);
                return response.data;
            })
            .catch(error => {
                console.error('Error updating policy:', error);
                throw error;
            });
    }


export default  {
    getAllClaims,
    createClaim,
    getAllClaimsById1,
    updateClaim
  };