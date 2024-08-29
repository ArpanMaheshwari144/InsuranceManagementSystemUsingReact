import axios from "axios";
const CUSTOMER_GET_ALL_URL="http://localhost:8081/api/customers"
class CustomerService{
    getAllCustomers(){
        return axios.get(CUSTOMER_GET_ALL_URL)
    }
    



}
export default new CustomerService()