import { Box, Button, Stack, Typography, Card, CardActionArea } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './form.css'
//formats each page's card in the main page.
const FormCard = ({ name,description,link}) => {
  const navigate = useNavigate()
  //sx={{border:'1px solid black', width:'80%', height:'100px', margin:'5px'}}
  return (
    <Card >
      <CardActionArea sx={{width:'100%', height:'100%'}} onClick={()=>{navigate(link)}}>
      <Stack className='grid-item'>
      <Typography textAlign={'center'} sx={{fontWeight:'bold', marginRight:'10px', marginLeft:'15px'}}>{name}: </Typography>

      <Typography textAlign={'center'}>{description}</Typography>

      </Stack>
      </CardActionArea>
    </Card>  
  )
}

export default FormCard