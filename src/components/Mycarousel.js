import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Mycarousel() {
  return (
    <div>
   <Carousel >
      <Carousel.Item interval={1000} style={{height:"30rem"}}>
        <img style={{height:"45rem"}}
          className="d-block w-100"
          src="14206925-woman-in-doctor-s-appointment-transformed (1).webp"
          alt="First slide"
        />
     
      </Carousel.Item  >
      <Carousel.Item interval={500} style={{height:"30rem"}}>
        <img  style={{height:"45rem"}}
          className="d-block w-100"
          src="94316978-woman-at-doctor-appointment-transformed.webp"
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item style={{height:"30rem"}}>
        <img  style={{height:"45rem"}}
          className="d-block w-100"
          src="patient_with_doc_712_6-oVdHo0XKz-transformed.png"
          alt="Third slide"
        />
     
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default Mycarousel
