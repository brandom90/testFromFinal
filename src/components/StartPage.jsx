import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'



// confirmation for when patient enters a page
const StartPage = ({title,link}) => {  
  return (
    <Box>
      <Typography variant='h1' sx={{textAlign:'center'}}>{title}</Typography>
      
      <Button variant='contained' sx={{
        width:'200px',
        height:'50px',
        marginLeft:'40%',
        marginTop:'40px'
      }}>
      <Link to={link}>
        <Typography sx={{color:'white', fontSize:'36px',}}>Begin</Typography>
      </Link>
      
      </Button>

      <Button variant='contained' sx={{
        width:'200px',
        height:'50px',
        marginLeft:'40%',
        marginTop:'40px'
      }}>
      <Link to={'/'}>
        <Typography sx={{color:'white', fontSize:'36px',}}>Back</Typography>
      </Link>
      
      </Button>
      
    </Box>
  )
}

export default StartPage