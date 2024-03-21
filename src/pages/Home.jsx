import { Box, Button, Stack, Typography, createTheme, ThemeProvider } from '@mui/material'
import React, {useEffect, useState} from 'react'
import FormCard from '../components/FormCard'
import whispyback from '../assets/whispyback.jpg'
import { useNavigate } from 'react-router-dom'

const Home = ({forms}) => {
  const [buttonVis, setbuttonVis] = useState(false)
  const navigate = useNavigate()
  // to change the font family
  const theme = createTheme({
    typography: {
      fontFamily: ["Lalezar", "system-ui"].join(","),
    },
  })
  //delay component

  useEffect(() => {
    const timer = setTimeout(() => {
      setbuttonVis(true); 
    }, 1000);
    // Cleanup function to clear the timer in case the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Box sx={{ backgroundImage:`url(${whispyback})`,backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '100vh',width: '100vw'}}>
       <ThemeProvider theme={theme}>
      <Stack sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',minHeight: '80vh'}}>
      <Typography sx={{marginBottom: '70px'}}variant='h3' textAlign={'center'}>Welcome, are you a new user?</Typography>
        <FormCard key={'New Patient'} name={'New Patient'} description={'Fill out this form if you have never been a patient here before.'} link={'/newPatient'}/>
         <Button onClick={()=>{navigate('/MainPage')}} variant="contained" size='small' sx={{ backgroundColor: 'black',marginTop: '20px',  opacity: buttonVis ? 1 : 0, transition: 'opacity 0.5s ease', pointerEvents: buttonVis ? 'auto' : 'none',}}>
            No, I am not a new patient.
        </Button> 
      </Stack>
      </ThemeProvider>
      

    </Box> 
  )
}

export default Home