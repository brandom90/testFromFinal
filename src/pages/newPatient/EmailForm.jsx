import { React,useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Button, Typography,Box } from '@mui/material'
import {pdf} from '@react-pdf/renderer'
import Pdf from './Pdf'




const EmailForm = () => {
  
  const navigate = useNavigate()
  const [base64, setBase64] = useState('')

  useEffect(() => {
    ConvertToBase64()
  }, [])

  useEffect(() => {
    console.log(base64)
  }, [base64])
  

  const ConvertToBase64 = () =>{
    let obj = pdf(<Pdf/>).toBlob().then((blob) => {
      var reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function () {
         setBase64(reader.result)
      }
    })
    console.log(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    const publicKey =  process.env.REACT_APP_EMAILJS_USER_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
   


    const file_name = 'testing_email.pdf'

    const params = {
      content: base64,
      form_name:file_name,
      to_name:'Ryan',
      message:'This is a PDF for',
      patient_first_name:'Colton',
      patient_last_name:'Sam Fong'
    }

    emailjs.send(serviceID, templateID, params, publicKey).then(() => {
      navigate('/')
    })

    }

    return (
      <Box sx={{}}>
        <Button sx={{width:'150px',height:'60px',marginBottom:'20px'}} variant='contained' onClick={handleSubmit}>
            <Typography sx={{textDecoration:'none', color:'white', fontSize:'24px'}}>Submit</Typography>
        </Button>
        
    </Box>
    
  )

}

export default EmailForm