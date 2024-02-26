import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button } from '@mui/material';



const Navigate = ({backLink, forwardLink, first, last}) => {
  const navigate = useNavigate()
  return (
    <Box>
      { 
      !first && <Button sx={{  position:'fixed', left:0, bottom:0, color:'black'}} onClick={() => {navigate(backLink)}}>
            <ArrowBackIcon  sx={{fontSize: 80,}}/>
          </Button>
      }
          
      { !last &&
      <Button sx={{ position:'fixed', right:0, bottom:0, color:'black'}} onClick={() => {navigate(forwardLink)}}>
          <ArrowForwardIcon sx={{ fontSize: 80}}/>
      </Button>
      }
    </Box>
  )
}

export default Navigate