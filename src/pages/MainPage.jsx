import React, {useEffect, useState} from 'react'
import {Stack, Box, Typography, createTheme, ThemeProvider} from '@mui/material'
import FormCard from '../components/FormCard'
import HospitalHero from '../assets/backgroundtestpng.png'

const MainPage = ({forms}) => {
   const myStyles = {
        margin: '80px',
        display: 'grid',
        gridTemplateColumns: 'auto auto', 
        gap: '2rem',
      
   }

   const theme = createTheme({
    typography: {
      fontFamily: ["Lalezar", "system-ui"].join(","),
    },
  })

  const [visList, setVisList] = useState([]);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
// note that the current element being process is not used, and instead replaced with an index that will gradually move up
      setVisList(Array.from({ length: forms.length }, (unused, index) => index + 1)); // Update visList with index values via getting length from form arry, then add
      setShowTitle(true);
    }, 500);
    // Cleanup function to clear the timer in case the component unmounts before the timeout
    return () => clearTimeout(timer);

  }, [forms.length]); 

  return (
    <Box sx={{backgroundImage:`url(${HospitalHero})`, backgroundRepeat: 'no-repeat',  backgroundSize: 'cover',  backgroundPosition: 'center'}}>
       <ThemeProvider theme={theme}>
        <Typography sx={{  marginRight: '30px', textAlign: 'center', alignItems: 'center', transform: showTitle ? 'translateY(0)' : 'translateY(-100vh)',  transition: 'transform 0.5s ease'}}variant='h2'> ROI Forms Portal</Typography>
            <Stack sx={myStyles}>
            {
          forms.map((form, idx) => (
            // if visList contain 
            <Box key={form.name} sx={{ marginTop: '-10px', opacity: visList.includes(idx+1) ? 1 : 0, transition: 'opacity 0.5s ease' }}>
              <FormCard name={form.name} description={form.description} link={form.link} />
            </Box>
          ))
        }
            </Stack>
            </ThemeProvider>
      </Box>
  )
}

export default MainPage