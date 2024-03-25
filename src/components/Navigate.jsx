import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Stack, Typography, Card, CardActionArea } from '@mui/material'



const Navigate = ({backLink, forwardLink, first, last}) => {
  const navigate = useNavigate()
  return (
       
    <Card >
      <CardActionArea sx={{width:'100%', height:'100%'}} onClick={() => {navigate(backLink)}}>
      <Stack >
      { 
      !first && <Button sx={{  position:'fixed', left:0, bottom:0, color:'black'}} onClick={() => {navigate(backLink)}}>
            <ArrowBackIcon  sx={{fontSize: 80,  color: 'rgb(143, 158, 179)'}}/>
          </Button>
      }
          
    

      </Stack>
      </CardActionArea>
      <Stack>
        <CardActionArea>
        { !last &&
      <Button sx={{ position:'fixed', right:0, bottom:0, color:'black'}} onClick={() => {navigate(forwardLink)}}>
          <ArrowForwardIcon sx={{ fontSize: 80, color: 'rgb(143, 158, 179)'}}/>
      </Button>
      }
        </CardActionArea>
      </Stack>
    </Card>  

  )
}

export default Navigate