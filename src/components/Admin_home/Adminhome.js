import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Adminhome() {
  const navigate = useNavigate();
  const [doctors,setDoctors]=useState([])
  const fetchDoctors=async()=>{
    const result=await axios.get('http://localhost:8000/getDoctors')
    setDoctors(result.data.message)
  }
  console.log(doctors);
  useEffect(() => {
    fetchDoctors()
    Logout()
  }, [])

  function Logout() {
    var email = localStorage.getItem("email");

    if (!email) {
   
      navigate('/');
      toast.error("please login first")

 
  
    // Email is present in local storage
   }
 
  
  }
    


  const deleteDoctor=async(id)=>{
    const result=await axios.delete("http://localhost:8000/deleteDoctor/"+id)
    alert(result.data.message)
    fetchDoctors()
  }


function logout() {
  localStorage.removeItem("email")
  navigate("/")

}
  
  return (


    
    <div className='b1'>

<header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">ADMIN DASHBOARD</h1>
                            <p class="lead text-white-50 mb-4">Add Doctor information and modify also from below the table</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">
<Link to={'/add'}>
        <button style={{borderRadius:"5px",backgroundColor:"GrayText"}}  className=''>
          
        <a class="btn btn-lg px-4 me-sm-3 " href="#features"> Add</a>
        </button>
  
   </Link>                        <button onClick={logout}>   <a class="btn btn-outline-light btn-lg px-4 text-dark">LOGOUT</a></button>
                             
                            </div>
                        </div>
                    </div>
     </div>
            </div>
        </header>
    
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Doctor Name</th>
              <th>Specialization</th>
              <th>email</th>
              <th>phone</th>
            <th>time</th>
            <th>Action</th>

            </tr>
          </thead>
          <tbody>

            {
             doctors?.map((doctors,index)=>(
                <tr>
                <td>{index}</td>
                <td>{doctors.id}</td>
                <td>{doctors.name}</td>
                <td>{doctors.specialization}</td>
                <td>{doctors.email}</td>
                <td>{doctors.phone}</td>
                <td>{doctors.time}</td>
              
                <td className='btn-1'>

                    <Link to={`/view/${doctors.id}`}>       
                    <button className=''><i class="fa-solid fa-eye"></i><a style={{textDecoration: "none"}} href="">view</a></button>
                    </Link>

                    <Link to={`edit/${doctors.id}`}>
                    <button  className=''><i class="fa-solid fa-pencil"></i><a style={{textDecoration: "none"}} href="">edit</a></button> 
  
                    </Link>  

                    <Link>
                  <button  onClick={() => deleteDoctor(doctors.id)}  className=''><i class="fa-solid fa-trash-can"></i><a   style={{textDecoration: "none"}} href="">delete</a></button>
  
                </Link>                </td>
              </tr>

              ))
            }

         
          
          </tbody>
        </Table>




    </div>
  )
}

export default Adminhome
