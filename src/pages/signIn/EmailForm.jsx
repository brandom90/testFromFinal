import { React,useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { Button, Typography } from '@mui/material'
import {pdf} from '@react-pdf/renderer'
import PDFfile from './PDFfile'
import informationLists from './utils/variables'




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
    let obj = pdf(<PDFfile/>).toBlob().then((blob) => {
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
   


    const file_name = `${informationLists[0].first_name}_${informationLists[0].last_name}.pdf`

    const params = {
      content: base64,
      form_name:file_name,
      to_name:'Ryan',
      message:'This is a PDF for',
      patient_first_name:informationLists[0].first_name,
      patient_last_name:informationLists[0].last_name
    }

    emailjs.send(serviceID, templateID, params, publicKey).then(() => {
      navigate('/')
    })

    }

    return (
      <div>
        <Button sx={{width:'150px',height:'60px',marginBottom:'20px'}} variant='contained' onClick={handleSubmit}>
            <Typography sx={{textDecoration:'none', color:'white', fontSize:'24px'}}>Submit</Typography>
        </Button>
        
    </div>
    
  )

}

export default EmailForm