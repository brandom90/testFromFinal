import { Box, Button, Stack, Typography } from '@mui/material'
import React, {useEffect, useState} from 'react'
import FormCard from '../components/FormCard'
import whispyback from '../assets/whispyback.jpg'

const Home = ({forms}) => {
  const [buttonVis, setbuttonVis] = useState(false)


  //ROI Forms Portal

  useEffect(() => {
    const timer = setTimeout(() => {
      setbuttonVis(true); 
    }, 2000);
    // Cleanup function to clear the timer in case the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Box sx={{ backgroundImage:`url(${whispyback})`,backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '100vh',width: '100vw'}}>
      
      <Stack sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',minHeight: '80vh'}}>
      <Typography sx={{marginBottom: '70px'}}variant='h2' textAlign={'center'}>Welcome, are you a new user?</Typography>
        <FormCard key={'New Patient'} name={'New Patient'} description={'Fill out this form if you have never been a patient here before.'} link={'/newPatient'}/>
         <Button variant="contained" size='small' sx={{marginTop: '20px',  opacity: buttonVis ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: buttonVis ? 'auto' : 'none',}}>
            No, I am not a new patient.
        </Button> 
      </Stack>
    
      

    </Box> 
  )
}

export default Home