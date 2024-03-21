import { Box, Button, Stack, Typography, Card, CardActionArea } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


import './form.css'
//formats each page's card in the main page.
const FormCard = ({ name,description,link}) => {
  const navigate = useNavigate()
  //sx={{border:'1px solid black', width:'80%', height:'100px', margin:'5px'}}
  return (
    <Card className='grid-item'>
      <CardActionArea sx={{width:'100%', height:'100%'}} onClick={()=>{navigate(link)}}>
      <Stack >
      <Typography  sx={{fontWeight:'bold',  fontSize: '24px' }}>{name}: </Typography>

      <Typography >{description}</Typography>

      </Stack>
      </CardActionArea>
    </Card>  
  )
}

export default FormCard