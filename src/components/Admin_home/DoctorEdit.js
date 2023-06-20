import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DoctorEdit() {
   
    const [name,setName]=useState('')
    const [specialization,setSpecialization]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [time,setStime]=useState('')


const params=useParams()
const viewDoctor=async()=>{
    const result=await axios.get(`http://localhost:8000/viewDoctor/${params.id}`)
    setName(result.data.message.name)
    setSpecialization(result.data.message.specialization)
    setEmail(result.data.message.email)
    setPhone(result.data.message.phone)
    setStime(result.data.message.time)
  
}


const editDoctor =async (e)=>{
    e.preventDefault();
    const body={
      id:params.id,
      name,
      specialization,
      email,
      phone,
      time
    }
    const result=await axios.post("http://localhost:8000/editDoctor",body)
    alert(result.data.message)
   }
  
   useEffect(() => {
    viewDoctor()

  }, [])









  return (
    <div>




  

<div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Edit Doctor</h3>
                        <p>Fill in the data below.</p>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                               <input onChange={(e)=>setName(e.target.value)} class="form-control" value={name}   type="text" name="name" placeholder="Doctor Name" required/>
                               
                            </div>

                            <div class="col-md-12">
                                <input onChange={(e)=>setSpecialization(e.target.value)} class="form-control" value={specialization} type="text" name="Specialization" placeholder="Specialization" required/>
                              
                            </div>

                      


                           <div class="col-md-12">
                              <input onChange={(e)=>setEmail(e.target.value)} class="form-control" type="email"value={email}  name="Email" placeholder="Email" required/>
                              
                           </div>

                           <div class="col-md-12 mt-3">
                              <input onChange={(e)=>setPhone(e.target.value)}   class="form-control" type="number" value={phone}  name="Phone" placeholder="Phone" required/>
                             
                           </div>
                           <div class="col-md-12">
                           
                           <select  onChange={(e)=>setStime(e.target.value)}  name="" id="">
                           <option disabled selected value="">Select Appointment Time</option>
                           <option   value="9:00 - 4:00">9:00 am - 4:00 pm</option>
                           </select>
                           </div>
                           <div class="form-button mt-3">
                                <button onClick={(e)=>editDoctor(e)} id="submit" type="submit" class="btn btn-primary">Update Doctor</button>
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

export default DoctorEdit
