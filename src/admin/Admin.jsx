import React from 'react'
import "./admin.css"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Admin = () => {
  return (
    <div className='admin'>
        <section className='admin_main'>
        <h1 className='h1'>Admin DashBoard</h1>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                m: 1,
                width: 228,
                height: 228,
                 },
            }}
    >
      <Paper elevation={3} />
      <Paper />
      <Paper elevation={4} />
    </Box>
        </section>
    </div>
  )
}

export default Admin