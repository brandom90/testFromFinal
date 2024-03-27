import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Stack, Typography, Card, CardActionArea } from '@mui/material'



const Navigate = ({backLink, forwardLink, first, last}) => {
  const navigate = useNavigate()

  const handleLeftClick = () => {
    navigate(backLink)
  }

  const handleRightClick = () => {
    navigate(forwardLink)
  }
  return (
    <Box>
      <Box sx={{width: '12%', // Adjust width as needed
          backgroundColor: 'grey',
          position: 'fixed',
          top: '180px',
          left: 0,
          height: '100vh',
          zIndex: 1, // Ensure the clickable area is above other content
          cursor: 'pointer',}}
    
    onClick={first ? undefined : handleLeftClick}  
    />
    
   
    <Box sx={{
          width: '12%', // Adjust width as needed
          backgroundColor: 'grey',
          position: 'fixed',
          top: '180px',
          right: 0,
          height: '100vh',
          zIndex: 1, // Ensure the clickable area is above other content
          cursor: 'pointer',
        }}
    onClick={last ? undefined : handleRightClick}  
    />
  </Box>

  )
}

export default Navigate


