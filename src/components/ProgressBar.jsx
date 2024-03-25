import React from 'react'
import { Stack } from "@mui/material"

import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';
import Looks6Icon from '@mui/icons-material/Looks6';


const Sidebar = ({ selected }) => {
    

    
    return (
    <Stack 
      direction='row' 
      sx = {{
        
      }}
      
      >
      <LooksOneIcon 
      sx={{
        color: selected === 1 ? "lightblue" : "black",
        fontSize:'80px',
        marginLeft:'auto'
        }}/>
      
      <LooksTwoIcon 
      fontSize="large" 
      sx={{
        color: selected === 2 ? "lightblue" : "black",
        fontSize:'80px'
        }}/>
      
      <Looks3Icon
      fontSize="large" 
      sx={{
        color: selected === 3 ? "lightblue" : "black",
        fontSize:'80px'
        }}/> 
      
      <Looks4Icon
      fontSize="large" 
      sx={{
        color: selected === 4 ? "lightblue" : "black",
        fontSize:'80px'
        }}/>
      
      <Looks5Icon
      fontSize="large" 
      sx={{
        color: selected === 5 ? "lightblue" : "black",
        fontSize:'80px'
        }}/>
      
      <Looks6Icon
      fontSize="large" 
      sx={{
        color: selected === 6 ? "lightblue" : "black",
        fontSize:'80px',
        marginRight:'auto'
        }}/>
    
    </Stack>
  )
  }

export default Sidebar