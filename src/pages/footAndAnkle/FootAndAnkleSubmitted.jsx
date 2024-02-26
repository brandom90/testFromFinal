import React from 'react'
import { EmailSubmit, Navigate } from '../../components'
import { Box } from '@mui/material'
import { PDFViewer } from '@react-pdf/renderer'
import FaAPDF from './FaAPDF'

const FootAndAnkleSubmitted = ({data,backwardLink}) => {
  return (
    <Box>
      <PDFViewer height={'800px'} width={'800px'}>
        <FaAPDF data={data}/>
      </PDFViewer>
      <EmailSubmit PDF={ <FaAPDF data={data}/>} firstName={data[0].value} lastName={data[1].value} title={`${data[0].value}_${data[1].value}_foot_and_ankle.pdf`}/>
      <Navigate last={true} backLink={backwardLink}/>
    </Box>
  )
}

export default FootAndAnkleSubmitted