import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import {EmailSubmit} from '../../components'
import SignaturePad from 'react-signature-canvas'
import PDF from './PDF'
import { PDFViewer } from '@react-pdf/renderer'

const HippaOne = () => {

  const sigCanvas = useRef({})

  const clear = () => sigCanvas.current.clear()
  
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [blob, setBlob] = useState('')
  const [saved, setSaved] = useState(false)

  const save = () =>{
    console.log(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))
    setBlob(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))
    setSaved(true)
  }


  return (
    <Box>
      <Typography>Robotic Orthopaedic Institute</Typography>
      <Typography>Gregory J Hicken MD PC</Typography>

      <Typography>Acknowledgement of receipt of notice of privacy practices</Typography>

      <Typography>This form is used to obtain acknowledgement of receipt of it's Notice of Privacy Practices or document its good faith or to otain that acknowledgement</Typography>
      
      <Typography>You May Refuse to Sign This Acknowledgment</Typography>

      <Typography>I have received a copy of this offices's Notice of Privacy Practices</Typography>

      <Stack direction={'row'}>
        <Typography>First Name</Typography>
        <TextField onChange={(e)=>{setFname(e.target.value)}}/>
        <Typography>Last Name</Typography>
        <TextField onChange={(e)=>{setLname(e.target.value)}} />
      </Stack>
      <Stack direction={'row'}>
        <Typography>Date</Typography>
        <TextField />
      </Stack>
      <Box sx={{border:'1px solid black', width:'800px', height:'200px'}}>
      <SignaturePad 
        ref={sigCanvas}
        canvasProps={{
          width:'800px',
          height:'200px',

        }}
      /> 
      </Box>
      <Button onClick={clear}>Clear</Button>
      <Button onClick={save}>Save</Button>
      
      { saved &&
        <>
        <PDFViewer height={'800px'} width={'800px'}>
          <PDF sig={blob} fname={fname} lname={lname} />
        
        </PDFViewer>
        <EmailSubmit  PDF={<PDF sig={blob} fname={fname} lname={lname} />} firstName={fname} lastName={lname} title={`${fname}_${lname}_hippa.pdf`}/>
        </>
      }

    </Box>
  )
} 

export default HippaOne