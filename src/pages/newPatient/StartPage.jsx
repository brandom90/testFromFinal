import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Form = () => {

  
  return (
    <Box>
      <Typography variant='h1' sx={{textAlign:'center'}}>New Patient</Typography>
      
      <Button variant='contained' sx={{
        width:'200px',
        height:'50px',
        marginLeft:'40%',
        marginTop:'40px'
      }}>
      <Link to='/Medicals'>
        <Typography sx={{color:'white', fontSize:'36px',}}>Sign In</Typography>
        </Link>
      </Button>
      
    </Box>
  )
}

export default Form