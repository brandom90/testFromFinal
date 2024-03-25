import React, { useEffect } from 'react'
import Navigate from '../../components/Navigate'
import { Box, Stack } from '@mui/material'
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
    <Stack sx={{ height:'100vh',backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:'50px' }}>  
        <PDFViewer marginTop={'10px'} width={'80%'} height={'600px'}>
          <Pdf/>
        </PDFViewer>
      </Box>
      <EmailSubmit PDF={<Pdf/>} firstName={userData.name} lastName={userData.last} title={`${userData.name}_${userData.last}_new_patient.pdf`}  />
      <Box >
        <Navigate backLink={'/newPatientSix'} last={true}/>
      </Box>
    </Stack>
  )
}

export default NewPatientSubmitted