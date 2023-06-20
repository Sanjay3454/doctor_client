import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "./Userlogin.css"
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function UserLogins() {
  localStorage.removeItem("email");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/user-login", {
        email,
        password,
      });
      const { message } = response.data;
      toast.success(message);
      localStorage.setItem("email", email);
      setTimeout(() => {
        navigate("/user-home");
      }, 1500);
    } catch (error) {
      const { message } = error.response.data;
      toast.error(message);
    }
  };

  return (
    <div className="login-container x1" style={{height:"100vh"}}>
      <ToastContainer />

      <MDBContainer  className="my-5 d-flex align-items-center justify-content-center">
        <MDBCard className="card1">
          <MDBRow style={{backgroundColor:"aliceblue"}} className="g-0 d-flex align-items-center justify-content-center">
       

            <MDBCol md="12">
              <label htmlFor="">LOGIN</label>

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
                <label htmlFor="">Password</label>
                <MDBInput
                className="mb-5"
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <MDBBtn onClick={handleLogin} className="mb-4 w-100">
                  Sign in
                </MDBBtn>

                <p className='text-center mt-3'>
                  Don't have an account? <a href='/user-register'>Sign up</a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default UserLogins;
