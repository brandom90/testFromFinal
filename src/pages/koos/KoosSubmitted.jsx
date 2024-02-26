import React from 'react'
import HKoosPDF from '../../components/HKoosPDF'
import { Box } from '@mui/material'
import { PDFViewer } from '@react-pdf/renderer'
import koosVariables from './koosVariables'
import {EmailSubmit, Navigate} from '../../components'

const KoosSubmitted = ({backlink}) => {
  return (
    <Box>
    <PDFViewer width={'800px'} height={'800px'}>
      <HKoosPDF lists={koosVariables}/>
    </PDFViewer>

      <EmailSubmit PDF={<HKoosPDF lists={koosVariables} />} firstName={koosVariables[5].first} lastName={koosVariables[5].last} title={`${koosVariables[5].first}_${koosVariables[5].last}_koos.pdf`}/>
      <Navigate backLink={backlink} last={true}/>
    </Box>
  )
}

export default KoosSubmitted