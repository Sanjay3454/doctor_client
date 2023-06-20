import axios from 'axios'
import { useEffect, useState } from 'react'
import React from 'react';

import Table from 'react-bootstrap/esm/Table';
function DoctorHome() {
  const [users, setUsers] = useState([]); // Changed SetUser to setUsers

  const getUsers = async () => {
    try {
      const result = await axios.get('http://localhost:8000/getUsers');
      const iid = localStorage.getItem("doctorId");
      
      if (result.data.message && Array.isArray(result.data.message)) {
        const filteredUsers = result.data.message.filter(user => user.doctorId === iid);
        setUsers(filteredUsers); // Use setUsers to update the state
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
   
    <div class="row gx-4 gx-lg-5 align-items-center my-5">
                <div class="col-lg-5"><img class="img-fluid rounded mb-4 mb-lg-0" src="https://i.postimg.cc/g28Zgt58/depositphotos-345817250-stock-illustration-the-doctor-in-the-office.webp" alt="..." /></div>
                <div class="col-lg-5">
                    <h1 class="font-weight-light">DR Dashboard</h1>
                    <p>doctor-patient appointment system streamlines the scheduling process, enhances communication between doctors and patients, and improves overall efficiency in managing appointments, ultimately leading to better healthcare experiences for both parties.</p>

                </div>
            </div>
         
            <div class="card text-white bg-secondary my-5 py-4 text-center">
                <div class="card-body"><p class="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p></div>
            </div>
      
           






  
<section>



<Table striped bordered hover size='sm'>
          <thead>
            <tr>
             
              <th>Patient name</th>
              <th>Patient Age</th>
             <th>Booked Date</th>
              <th>Booked Time</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Place</th>
        
            

            </tr>
          </thead>
          <tbody>

            {
             users?.map(user=>(
                <tr>
             
                <td>{user.uname}</td>
                <td>{user.age}</td>
                <td>{user.availability}</td>
                <td>{user.time}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.place}</td>
              
              </tr>

              ))
            }

         
          
          </tbody>
        </Table>



        </section>

    </>
  )
}

export default DoctorHome;
