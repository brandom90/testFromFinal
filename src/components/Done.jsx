import React from 'react'
import { Typography, Box, Button } from '@mui/material'

const Done = () => {
  
  const handleSubmit = () => {
    console.log('i dont know what to do with this yet')
  }

  return (
    <Box>
      <Typography>Thank You. Everything's been submitted</Typography>

      {/* 
        This is going to explain things based on what forms they didn't fill out. Especially if I'm going to add ALL the forms
      */}

      <Button onClick={handleSubmit}>Okay</Button>      
    </Box>
  )
}

export default Done