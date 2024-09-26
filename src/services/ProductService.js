import axios from "axios"


const PRODUCT_GET_ALL_URL="http://localhost:8081/product"
    const getAllProduct=()=>{
        return axios.get(PRODUCT_GET_ALL_URL)
    }
export default  {
    getAllProduct
  
  };

 