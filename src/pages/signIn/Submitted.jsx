import {React} from 'react'
import {  Box, Typography } from '@mui/material'
import PDFfile from './PDFfile'
import { PDFViewer } from '@react-pdf/renderer'
import Navigate from '../../components/Navigate'
import { EmailSubmit } from '../../components'
import informationLists from './utils/variables'

const Submitted = () => {
  
 

  return (
    <Box sx={{textAlign:'center'}}>
      <Typography variant='h1'>
        Submission!
      </Typography>
      <Typography sx={{marginBottom:'20px',fontStyle:'italic', textAlign:'center', fontSize:'20px'}}>
        If all the information is accurate. Please press submit.
      </Typography>
      
      <EmailSubmit PDF={<PDFfile/>} firstName={informationLists[0].first_name} lastName={informationLists[0].last_name} title={`${informationLists[0].first_name}_${informationLists[0].last_name}_sign_in.pdf`}/>


      <PDFViewer width={'800px'} height={'600px'}> 
        <PDFfile/>
      </PDFViewer>
    
      <Box>
        <Navigate backLink={'/signInSix'} last={false}/>
      </Box>
        
    </Box>
  )
}

export default Submitted

