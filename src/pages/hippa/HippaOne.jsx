import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import {EmailSubmit} from '../../components'
import SignaturePad from 'react-signature-canvas'
import PDF from './PDF'
import { PDFViewer } from '@react-pdf/renderer'
import { useNavigate } from 'react-router-dom'

const HippaOne = () => {
  const navigate = useNavigate()

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
    <Box textAlign={'center'} sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
      <Typography variant='h3'>Robotic Orthopaedic Institute</Typography>
      <Typography variant='h3'>Gregory J Hicken MD PC</Typography>

      <Typography variant='h4'>Acknowledgement of receipt of notice of privacy practices</Typography>

      <Typography variant='h5'>This form is used to obtain acknowledgement of receipt of it's Notice of Privacy Practices or document its good faith effort to obtain that acknowledgement</Typography>
      
      <Typography variant='h5'>You May Refuse to Sign This Acknowledgment</Typography>

      <Typography variant='h5' sx={{marginBottom:'20px'}}>I have received a copy of this offices's Notice of Privacy Practices</Typography>

      <Stack direction={'column'} sx={{width:'400px', margin:'0 auto'}}>
        <Typography>First Name</Typography>
        <TextField onChange={(e)=>{setFname(e.target.value)}}/>
        <Typography>Last Name</Typography>
        <TextField onChange={(e)=>{setLname(e.target.value)}} />
      </Stack>
      <Typography variant='h5'sx={{marginTop:'40px'}}>
        Sign Here
      </Typography>
      <Box sx={{ margin: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid black', width: '80%', height: '200px', marginTop: '5px' }}>
        <SignaturePad 
          ref={sigCanvas}
          canvasProps={{
            width: '610px',
            height: '200px',
          }}
        /> 
      </Box>
      <Button onClick={clear} sx={{color:'black'}}>Clear</Button>
      <Button onClick={save} sx={{color:'black'}}>Save</Button>
      
      { saved &&
        <Box>
        <PDFViewer width={'80%'} height={'600px'}>
          <PDF sig={blob} fname={fname} lname={lname} />
        </PDFViewer>
        <Stack direction="row" spacing={2} justifyContent='center'>
          <Button sx={{ backgroundColor: 'rgb(143, 158, 179)', width:'150px',height:'60px',marginBottom:'20px'}} variant='contained' onClick={() => {navigate('/')}}>
              <Typography sx={{ textDecoration:'none', color:'white', fontSize:'24px'}}>Return</Typography>
          </Button>
          <EmailSubmit  PDF={<PDF sig={blob} fname={fname} lname={lname} />} firstName={fname} lastName={lname} title={`${fname}_${lname}_hippa.pdf`}/>
        </Stack>
        </Box>
      }

    </Box>
  )
} 

export default HippaOne