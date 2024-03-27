import React, { useEffect } from 'react'
import Navigate from '../../components/Navigate'
import { Box, Stack,Typography } from '@mui/material'
import variables from './variables'
import userData from './variables'
import Pdf from './Pdf'
import { PDFViewer } from '@react-pdf/renderer'
import { EmailSubmit } from '../../components'

const NewPatientSubmitted = () => {
  
  useEffect(() => {
    console.log(variables)

  }, [])
  
  
  return (
    <Box sx={{ height:'100vh',textAlign:'center',backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
       <Typography variant='h3'>
        Submission
      </Typography>
      <Typography sx={{marginBottom:'20px',fontStyle:'italic', textAlign:'center', fontSize:'20px'}}>
        If all the information is accurate. Please press submit.
      </Typography>
      
        <PDFViewer  width={'80%'} height={'600px'}>
          <Pdf/>
        </PDFViewer>
   
      <EmailSubmit PDF={<Pdf/>} firstName={userData.name} lastName={userData.last} title={`${userData.name}_${userData.last}_new_patient.pdf`}  />
      <Box >
        <Navigate backLink={'/newPatientSix'} last={true}/>
      </Box>
    </Box>
  )
}

export default NewPatientSubmitted