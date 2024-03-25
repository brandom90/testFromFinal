import { Box, Button, Stack, Typography, Card, CardActionArea } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


import './form.css'
//formats each page's card in the main page.
const FormCard = ({ name,description,link}) => {
  const navigate = useNavigate()
 
  return (
   
    <Card className={ name==='New Patient' ? 'home-item' : 'grid-item'}>
      <CardActionArea sx={{width:'100%', height:'100%'}} onClick={()=>{navigate(link)}}>
      <Stack >
      <Typography  sx={{fontWeight:'bold',  fontSize:'48px' }}>{name}: </Typography>

      <Typography sx={{fontSize:'20px', color:'white'}} >{description}</Typography>

      </Stack>
      </CardActionArea>
    </Card>  

  )
}

export default FormCard