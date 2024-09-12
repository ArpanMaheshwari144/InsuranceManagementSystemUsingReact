

import ListCustomerComponents from './components/ListCustomerComponents';
import ListPolicyComponents from './components/ListPolicyComponents';
import ListClaimComponents from './components/ListClaimComponents';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateCustomerComponents from './components/CreateCustomerComponents';
import CreateClaimComponents from './components/CreateClaimComponents';
import UpdatePolicyComponent from './components/UpdatePolicyComponent';
import UpdateClaimComponent from './components/UpdateClaimComponent';
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from './components/LoginComponent';




function App() {
  return(
    <div className="container">
      <Router>
      <Routes>
        <Route path='/customer' element={<ListCustomerComponents/>}></Route>
        <Route path='/policy' element={<ListPolicyComponents/>}></Route>
        <Route path='/claim' element={<ListClaimComponents/>}></Route>
        <Route path='/create-policy' element={<CreateCustomerComponents/>}></Route>
        <Route path='/create-claim' element={<CreateClaimComponents/>}></Route>
        <Route path='/update-policy/:id' element={<UpdatePolicyComponent/>}></Route>
        <Route path='/update-claim/:id' element={<UpdateClaimComponent/>}></Route>
        <Route path='/' element={<RegisterComponent/>}></Route>
        <Route path='/login' element={<LoginComponent/>}></Route>
        

      </Routes>
      {/* <ListClaimComponents/> */}
      </Router>

    </div>
  
  );
}

export default App;
