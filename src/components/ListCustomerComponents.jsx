import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';


class ListCustomerComponents extends Component {
    constructor(props) { 
        super(props)
        this.state={
            customers:[]
        }
       
        this.addClaim=this.addClaim.bind(this);
    }
    componentDidMount(){
        CustomerService.getAllCustomers().then((res)=>{
            this.setState({customers:res.data});
        });
    }
   
    addClaim(){
        this.props.history.push('/api/create/claims')

    }


  render() {
    return (
        <div>
            <h2 className="text-center">Customer List</h2>
            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Policy</th>
                            <th>Claimed</th>
    
                        </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.customers.map(
                            customer=>
                                <tr>
                                    <td>
                                        {customer.id}
                                    </td>
                                    <td>
                                        {customer.policies}
                                    </td>
                                    <td>
                                        {customer.claims}
                                    </td>
    
                                </tr>
                                
                                
                            
                                
                            )
                            }
    
                        </tbody>
    
                </table>
    
            </div>
          
        </div>
      )
    
  }
}
export default ListCustomerComponents

