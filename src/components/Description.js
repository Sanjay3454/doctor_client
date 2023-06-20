import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
function Description() {
  return (
    <div style={{backgroundColor:"floralwhite"}}>
        <Container>
        <Row>
          <Col md={6} lg={6}>
            {/* First Column */}
            <div style={{ padding: '106px' }}>
              <h4 style={{overflowY:"hidden"}}>Find Your Doctor</h4>
              <p>The patient doctor appointment system is a user-friendly platform that simplifies the process of scheduling and managing medical appointments
              This system aims to provide patients with a convenient and efficient way to book and track their appointments, enhancing their overall healthcare experience.
              </p>
            </div>
          </Col>
          <Col md={6} lg={6}>
            {/* Second Column */}
            <div style={{ padding: '0 106px' }}>
              <img
                src="https://i.postimg.cc/sftxRfCS/desktop-wallpaper-aesthetic-doctor-anime-doctor-removebg-preview.png"
                alt="Your Image"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Description
