import React from 'react'
import HKoosPDF from '../../components/HKoosPDF'
import {  Box, Typography } from '@mui/material'
import { PDFViewer } from '@react-pdf/renderer'
import hoosVariables from './hoosVariables'
import {EmailSubmit, Navigate} from '../../components'

const HoosSubmitted = ({backLink}) => {
  return (
    <Box sx={{textAlign:'center', backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
    <Typography variant='h2'>
      Submission
    </Typography>
    <Typography sx={{marginBottom:'20px',fontStyle:'italic', textAlign:'center', fontSize:'20px'}}>
      If all the information is accurate. Please press submit.
    </Typography>
    
      <PDFViewer width={'80%'} height={'600px'}> 
        <HKoosPDF lists={hoosVariables}/>
      </PDFViewer>

      <EmailSubmit PDF={<HKoosPDF lists={hoosVariables} />} firstName={hoosVariables[5].first} lastName={hoosVariables[5].last} title={`${hoosVariables[5].first}_${hoosVariables[5].last}_hoos.pdf`}/>
      <Box>
        <Navigate backLink={backLink} last={true}/>
      </Box>
    </Box>
  )
}

export default HoosSubmitted