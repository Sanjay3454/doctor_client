import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Doctor.css"
function DoctorLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const doctorLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/doctor-login', { email, password });
      const { message, doctorId } = response.data;

      toast.success(message);
      localStorage.setItem('doctorId', doctorId);
      setTimeout(() => {
        navigate('/home-doctor');
      }, 1500);
      
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className='b1' style={{height:"100vh"}}>
      <ToastContainer />

      <MDBContainer>
        <MDBRow className='justify-content-center align-items-center h-100'>
          <MDBCol md='6'>
            <MDBCard  className='my-5 mx-auto' style={{ borderRadius: '1rem'}}>
              <MDBCardBody  style={{backgroundColor:"antiquewhite",width:"25rem",marginLeft:"-10rem" }}>
                <form>
                  <p className='h5 text-center mb-4'>Doctor Login</p>
            

                  <div className='mb-3'>
                    <label htmlFor="">Email ID</label>
                    <MDBInput
                   
                      type='email'
                      name='email'
                      id='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className='mb-3'>
                    <label htmlFor="">Password</label>
                    <MDBInput
                    
                      type='password'
                      name='password'
                      id='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className='text-center'>
                    <MDBBtn onClick={(e) => doctorLogin(e)}>Sign in</MDBBtn>
                  </div>
                </form>

                <p className='text-center mt-3'>
                  Don't have an account? <a href='/register-doctor'>Sign up</a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default DoctorLogin;
