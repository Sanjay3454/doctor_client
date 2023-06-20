import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DoctorRegister() {
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

    try {
      const result = await axios.post("http://localhost:8000/register-doctor", body);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate('/login-doctor');
      }, 1500);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='b1' style={{height:"100vh"}}>
      <ToastContainer />

      <MDBContainer>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-dark my-5 mx-auto' style={{ borderRadius: '1rem', }}>
              <MDBCardBody style={{backgroundColor:"antiquewhite"}}  className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
<label htmlFor="">Email ID</label>
                <MDBInput
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
             
                  className="input-box"
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-white'
                  size="lg"
                />
                <label htmlFor="">Username</label>

                <MDBInput
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  placeholder=""
              
                  className="input-box"
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-white'
                  size="lg"
                />
           <label htmlFor="">Password</label>
                <MDBInput
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder=""
               
                  className="input-box"
                  wrapperClass='mb-4 mx-5 w-100'
                  labelClass='text-white'
                  size="lg"
                />

                <MDBBtn onClick={register} className="sign" size="lg">
                  Register
                </MDBBtn>
                <p className='text-center mt-3'>
                  Already have an account? <a href='/login-doctor'>Sign up</a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default DoctorRegister;
