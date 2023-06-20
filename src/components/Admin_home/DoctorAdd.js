import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {v4 as uuid} from 'uuid';
import "./DcortorAdd.css"

function DoctorAdd() {
    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [specialization,setSpecialization]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [time,setStime]=useState('')
 


    useEffect(() => {
        setId(uuid().slice(0,3));
      }, [])

    const addDoctor = async (e) => {
        e.preventDefault();
        setId(uuid().slice(0,3));
        const body = {
          id,
          name,
          specialization,
          email,
          phone,
          time,
        
        };
      
        console.log(id);
        console.log(name);
        try {
          localStorage.setItem("IID",id)
          const result = await axios.post('http://localhost:8000/addDoctor', body);
          alert(result.data.message);
          console.log(result);
          console.log("client user",result.data.users);
        } catch (error) {
          alert(error.response.data.message);
          console.error(error);
        }
      };
      

  return (
    <div>
   









<div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Add Doctor</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                               <input onChange={(e)=>setName(e.target.value)} class="form-control" type="text" name="name" placeholder="Doctor Name" required/>
                               
                            </div>

                            <div class="col-md-12">
                                <input onChange={(e)=>setSpecialization(e.target.value)} class="form-control" type="text" name="Specialization" placeholder="Specialization" required/>
                              
                            </div>

                      


                           <div class="col-md-12">
                              <input onChange={(e)=>setEmail(e.target.value)} class="form-control" type="email" name="Email" placeholder="Email" required/>
                              
                           </div>

                           <div class="col-md-12 mt-3">
                              <input onChange={(e)=>setPhone(e.target.value)}   class="form-control" type="number" name="Phone" placeholder="Phone" required/>
                             
                           </div>
                           <div class="col-md-12">
                           
                           <select  onChange={(e)=>setStime(e.target.value)}  name="" id="">
                           <option disabled selected value="">Select Appointment Time</option>
                           <option   value="9:00 - 4:00">9:00 am - 4:00 pm</option>
                           </select>
                           </div>
                           


                         

          
                  

                            <div class="form-button mt-3">
                                <button onClick={(e)=>addDoctor(e)}  id="submit" type="submit" class="btn btn-primary">Add Doctor</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>












    </div>
  )
}

export default DoctorAdd
