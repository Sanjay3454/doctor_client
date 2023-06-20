import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import "./UserRegister.css"

function UserRegister() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const register = async (e) => {
      e.preventDefault();
      const body = {
        email,
        username,
        password
      };
  
      console.log(body);
      try {
        const result = await axios.post("http://localhost:8000/register-user", body);
        console.log(result.data);
        alert(result.data.message);
        navigate('/user-logins');
      } catch (error) {
        alert(error.response.data.message);
      }
    };


  return (
    <div className='y1' style={{height:"100vh"}}>






      <ToastContainer />

<MDBContainer  className="my-5 d-flex align-items-center justify-content-center">
  <MDBCard className="card1">
    <MDBRow style={{backgroundColor:"aliceblue"}} className="g-0 d-flex align-items-center justify-content-center">
 

      <MDBCol md="12">
        <label htmlFor="">REGISTER</label>

        <MDBCardBody>



          <label htmlFor="">Email adress</label>

          <MDBInput
          className="mb-5"
            type="email"
            name="email"
            id="Email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


<label htmlFor="">UserName</label>

<MDBInput
className="mb-5"
onChange={(e) => setUsername(e.target.value)}
type="text"
name="username"
id="username"
placeholder=""
/>





          <label htmlFor="">Password</label>
          <MDBInput
          className="mb-5"
          onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              placeholder=""
          />

          <MDBBtn  onClick={register} className="mb-4 w-100">
            Sign in
          </MDBBtn>

          <p className="signup">
           already have an account
          <a rel="noopener noreferrer" href="/user-logins" className="">
            Sign in
          </a>
        </p>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>
</MDBContainer>
      
    </div>
  )
}

export default UserRegister
