import React from 'react'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';
function Footer() {
  return (
    <div>
         <MDBFooter className='text-center text-white' style={{ backgroundColor: '#21081a', position: 'absolute', bottom: '0', width: '100%' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 MDBootstrap.com
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
