import React, {useEffect, useState} from 'react'
import {Stack, Box, Typography, createTheme, ThemeProvider} from '@mui/material'
import FormCard from '../components/FormCard'

const MainPage = ({forms}) => {
   const myStyles = {
          margin: '80px',
          display: 'grid',
          gridTemplateColumns: 'auto auto', 
          gap: '4.3rem',
      
   }

   const myStyles2 = {
    margin: '80px auto',
    width: '32%',

}
   // for fonts
   const theme = createTheme({
    typography: {
      fontFamily: ["Lalezar", "system-ui"].join(","),
    },
  })
//for visibility with the list and title 
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
    <Box sx={{height: '100vh', backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
       <ThemeProvider theme={theme}>
        <Typography sx={{  marginRight: '10px', textAlign: 'center', alignItems: 'center', transform: showTitle ? 'translateY(0)' : 'translateY(-100vh)',  transition: 'transform 0.5s ease'}}variant='h2'> ROI Forms Portal</Typography>
        <Stack sx={myStyles2}>
           <Box sx={{opacity: visList.includes(1) ? 1 : 0, transition: 'opacity 0.5s ease'}}>
          <FormCard idx={'Sign In'} name={'Sign In'} description={'Sign in at the beginning of your visit'} link={'/signInForm'} />
          </Box>
        </Stack>
          <Stack sx={ myStyles}>
            {
              forms.map((form, idx) => (
                <Box key={form.name} sx={{ marginTop: '-10px', opacity: visList.includes(idx+1) ? 1 : 0, transition: 'opacity 0.5s ease' }}>
                  <FormCard idx={idx} name={form.name} description={form.description} link={form.link} />
                </Box>
              ))
            }
          </Stack>
         </ThemeProvider>
      </Box>
  )
}

export default MainPage


