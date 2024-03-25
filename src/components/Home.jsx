import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Button, Stack, Typography} from '@mui/material'


const Home = () => {
 
  const navigate = useNavigate()

  //when I finish making the forms I'm going to add a URL parameter to make it open to that form. I need to find why it's 'too many rerenders'
  //I should probably find a more secure hosting site than Netlify
  


  return (
    <Box>
         <Typography variant='h2' textAlign={'center'}>ROI Forms</Typography>
    
    </Box>
 
  )
}

export default Home