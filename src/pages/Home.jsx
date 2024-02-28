import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import FormCard from '../components/FormCard'

const Home = ({forms}) => {
  const myStyles = {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'auto auto auto',
    backgroundColor: '#1F456E',
    padding: '20px',
    marginTop: '50px',
    borderRadius: '25px'
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