import React from 'react'
import HKoosPDF from '../../components/HKoosPDF'
import { Box } from '@mui/material'
import { PDFViewer } from '@react-pdf/renderer'
import hoosVariables from './hoosVariables'
import {EmailSubmit, Navigate} from '../../components'

const HoosSubmitted = ({backLink}) => {
  return (
    <Box>
      <PDFViewer width={'800px'} height={'800px'}>
        <HKoosPDF lists={hoosVariables}/>
      </PDFViewer>

      <EmailSubmit PDF={<HKoosPDF lists={hoosVariables} />} firstName={hoosVariables[5].first} lastName={hoosVariables[5].last} title={`${hoosVariables[5].first}_${hoosVariables[5].last}_hoos.pdf`}/>
      <Navigate backLink={backLink} last={true}/>
    </Box>
  )
}

export default HoosSubmitted