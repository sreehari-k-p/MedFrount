
import React from 'react'
import "./organ.css"
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Organ = () => {
  return (
    <div className='organ'>
        <section className='organ_main'>
          <h1 className='h1'>Register</h1>
                <div className="cards">
                <div className="card">
                   
                  <h3><a href="/request" target="_blank" rel="noopener noreferrer">Request Organ</a></h3>
                  <p>For more details about organ donation....</p>
                </div>
                  <div className="card">
                       
                      <h3><a href="/form" target="_blank" rel="noopener noreferrer">Donate Organ</a></h3>
                      <p>For more details about blood donation....</p>
                  </div>
                </div>

        </section>
    </div>
  )
}

export default Organ;