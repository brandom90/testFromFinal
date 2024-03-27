import React from 'react'
import { Box, Button, Stack, Typography, Card, CardActionArea } from '@mui/material'
import { useNavigate } from 'react-router-dom'



const Sidebar = ({ selected, amount }) => {
  const navigate = useNavigate()

    // use link to send the user to a page in that form, but I dont know how yet.
    return (
    <Stack marginTop ='10px' direction="row" spacing={2} justifyContent='center'>
      {
        amount.map((item) => (
          <Box sx={{borderRadius:'20px', textAlign:'center', backgroundColor:'black', height:'80px', width:'80px'}}>
            {console.log(item.num)}
            <Button onClick={()=>{navigate(item.link)}}>
              <Typography sx={{fontSize:'50px',  color: item.num === selected ? "lightblue" : "white"}}>{item.num}</Typography>
            </Button>
          </Box>
        ))
      }
    </Stack>
  )
  }

export default Sidebar

