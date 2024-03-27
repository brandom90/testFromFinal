import React from 'react'
import HKoosPDF from '../../components/HKoosPDF'
import { Box, Stack } from '@mui/material'
import { PDFViewer } from '@react-pdf/renderer'
import koosVariables from './koosVariables'
import {EmailSubmit, Navigate} from '../../components'

const KoosSubmitted = ({backLink}) => {
  return (
    <Stack sx={{ height:'100vh',backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop:'50px' }}>  
        <PDFViewer  marginTop={'10px'} width={'80%'} height={'600px'}>
          <HKoosPDF lists={koosVariables}/>
        </PDFViewer>
      </Box>
      <EmailSubmit PDF={<HKoosPDF lists={koosVariables} />} firstName={koosVariables[5].first} lastName={koosVariables[5].last} title={`${koosVariables[5].first}_${koosVariables[5].last}_koos.pdf`}/>
      <Box>
      <Navigate backLink={backLink} last={true}/>
      </Box>
    </Stack>
  )
}

export default KoosSubmitted