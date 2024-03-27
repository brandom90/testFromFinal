import React from 'react'
import { EmailSubmit, Navigate } from '../../components'
import { Box, Typography } from '@mui/material'
import { PDFViewer } from '@react-pdf/renderer'
import FaAPDF from './FaAPDF'

const FootAndAnkleSubmitted = ({data,backwardLink}) => {
  return (
    <Box sx={{textAlign:'center', backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
    <Typography variant='h2'>
      Submission
    </Typography>
    <Typography sx={{marginBottom:'20px',fontStyle:'italic', textAlign:'center', fontSize:'20px'}}>
      If all the information is accurate. Please press submit.
    </Typography>

      <PDFViewer height={'600px'} width={'80%'}>
        <FaAPDF data={data}/>
      </PDFViewer>

      <EmailSubmit PDF={ <FaAPDF data={data}/>} firstName={data[0].value} lastName={data[1].value} title={`${data[0].value}_${data[1].value}_foot_and_ankle.pdf`}/>
      <Box>
      <Navigate last={true} backLink={backwardLink}/>
      </Box>
    </Box>
  )
}

export default FootAndAnkleSubmitted