import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'




const Form = () => {  
  return (
    <Box sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
      <Typography variant='h1' sx={{textAlign:'center'}}>Patient Sign In</Typography>
      
      <Button variant='contained' sx={{
        width:'200px',
        height:'50px',
        marginLeft:'40%',
        marginTop:'40px'
      }}>
      <Link to='/signInOne'>
        <Typography sx={{color:'white', fontSize:'36px',}}>Sign In</Typography>
        </Link>
      </Button>
      
    </Box>
  )
}

export default Form