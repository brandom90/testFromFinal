import React,{useEffect, useState} from 'react'
import { Box, Button, Typography,createTheme, ThemeProvider } from '@mui/material'
import { Link } from 'react-router-dom'



// confirmation for when patient enters a page
const StartPage = ({title,link}) => {  
  const theme = createTheme({
    components: {
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'none',
            },
          },
        },
      },
    },
    typography: {
      fontFamily: ["Lalezar", "system-ui"].join(","),
    },
  })

  const [showTitle, setShowTitle] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(true); 
    }, 100);
    // Cleanup function to clear the timer in case the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box sx={{ backgroundImage: 'linear-gradient(to top, lightblue, white)', height: '100vh'}}>
       <ThemeProvider theme={theme}>
      <Typography variant='h1' sx={{textAlign:'center', transform: showTitle ? 'translateY(0)' : 'translateY(-50vh)', transition: 'transform 0.5s ease'}}>{title}</Typography>
      
      <Button variant='contained' sx={{
        opacity: showTitle ? 1 : 0, transition: 'opacity 0.5s ease',
        width:'200px',
        height:'50px',
        marginLeft:'37%',
        marginTop:'40px',
        backgroundColor: 'rgb(143, 158, 179)',
        '&:hover': { // Prevent color change on hover
          backgroundColor: 'rgb(143, 158, 179)', // Keep the same color
        },
        '&:focus': { // Prevent color change on focus (click)
          backgroundColor: 'rgb(143, 158, 179)', // Keep the same color
          
        }
        
      }}>
      <Link to={link}>
        <Typography sx={{color:'black', fontSize:'36px',}}>Begin</Typography>
      </Link>
      
      </Button>

      <Button variant='contained' sx={{
        opacity: showTitle ? 1 : 0, transition: 'opacity 0.5s ease',
        width:'200px',
        height:'50px',
        marginLeft:'37%',
        marginTop:'40px',
        backgroundColor: 'rgb(143, 158, 179)',
        textDecoration: 'none',
        '&:hover': { // Prevent color change on hover
          backgroundColor: 'rgb(143, 158, 179)', // Keep the same color
        },
        '&:focus': { // Prevent color change on focus (click)
          backgroundColor: 'rgb(143, 158, 179)', // Keep the same color
          
        }
      }}>
      <Link sx={{textDecoration: 'none'}} to={'/'}>
        <Typography sx={{color:'black', fontSize:'36px',}}>Back</Typography>
      </Link>
      </Button>
      </ThemeProvider>
    </Box>
  )
}

export default StartPage