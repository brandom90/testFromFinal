import { useNavigate } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Stack, Typography, Card, CardActionArea } from '@mui/material'

// THIS IS A BACKUP FOR THE NAVIGATE PAGE

const Navigate = ({backLink, forwardLink, first, last}) => {
  const navigate = useNavigate()
  return (
       
    <Card sx={{ display: 'flex', justifyContent: 'space-between'}}>

    <CardActionArea sx={{ width: '15%', height: '100vh',  }} onClick={() => { navigate(backLink) }}>
      <Stack>
        {!first && <Button sx={{ color: 'black' }} onClick={() => { navigate(backLink) }}>
          <ArrowBackIcon sx={{ fontSize: 80, color: 'rgb(143, 158, 179)' }} />
        </Button>}
      </Stack>
    </CardActionArea>
    
    <CardActionArea sx={{ width: '15%', height: '100vh',  }} onClick={() => { navigate(forwardLink) }}>
      <Stack>
        {!last && <Button sx={{ color: 'black' }} onClick={() => { navigate(forwardLink) }}>
          <ArrowForwardIcon sx={{ fontSize: 80, color: 'rgb(143, 158, 179)' }} />
        </Button>}
      </Stack>
    </CardActionArea>
    
    </Card>  

  )
}

export default Navigate