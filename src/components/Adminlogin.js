import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Adminlogin.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Adminlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  let navigate = useNavigate();

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    // Email validation
    if (!email) {
      formIsValid = false;
      errors["email"] = "Email is required.";
    }

    // Password validation
    if (!password) {
      formIsValid = false;
      errors["password"] = "Password is required.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const login = async (e) => {
    e.preventDefault();

    if (!handleValidation()) {
      return;
    }

    const body = {
      email,
      password
    };

    try {
      const result = await axios.post("http://localhost:8000/login", body);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate('/adminhome');
      }, 1500);
      localStorage.setItem("email", email);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='a1' style={{ height: "100vh" }}>
      <ToastContainer />

      <MDBContainer>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>

                <label htmlFor="uname">User name</label>
                <MDBInput
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  name="uname"
                  id="uname"
                  placeholder=""
                  className={`input-box ${errors["email"] ? "is-invalid" : ""}`}
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-white'
                  label=''
                  size="lg"
                  required
                />
                {errors["email"] && <div className="invalid-feedback">{errors["email"]}</div>}

                <label htmlFor="password">Password</label>
                <MDBInput
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
                  className={`input-box ${errors["password"] ? "is-invalid" : ""}`}
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-white'
                  label=''
                  size="lg"
                  required
                />
                {errors["password"] && <div className="invalid-feedback">{errors["password"]}</div>}

                <button className="login-button" size="lg" onClick={(e) => login(e)}>
                  Login
                </button>

                <div>
                  <p className="mb-0">Login <a href="/verify" className="text-white-50 fw-bold">Doctor Login</a></p>
                  <p className="mb-0">Login <a href="/user-logins" className="text-white-50 fw-bold">User Login</a></p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Adminlogin;
