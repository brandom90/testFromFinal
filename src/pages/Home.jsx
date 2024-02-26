import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FormCard from '../components/FormCard'

const Home = ({forms}) => {
  const myStyles = {
    display: 'grid',
    gap: '50px',
    gridTemplateColumns: 'auto auto auto',
    backgroundColor: 'blue',
    padding: '10px',
  }
  
  return (
    <Box>
      <Typography variant='h2' textAlign={'center'}>ROI Forms Portal</Typography>
      <Stack style={myStyles}>
      { 
        forms.map((form)=>(
          
            <FormCard key={form.name} name={form.name} description={form.description} link={form.link}/>
          
        ))
      } 
      </Stack>
    
      

    </Box> 
  )
}

export default Home