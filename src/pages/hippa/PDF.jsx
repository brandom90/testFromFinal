import React, { useEffect } from 'react'
import { Page, Text, Document, StyleSheet, Image } from '@react-pdf/renderer'


const PDF = ({fname, lname, sig}) => {
  
  //<Image src={sig}/>
  return (
    <Document>
      <Page>
      <Text>Robotic Orthopaedic Institute</Text>
      <Text>Gregory J Hicken MD PC</Text>

      <Text>Acknowledgement of receipt of notice of privacy practices</Text>

      <Text>This form is used to obtain acknowledgement of receipt of it's Notice of Privacy Practices or document its good faith effor to btain that acknowledgement</Text>
      
      <Text>You May Refuse to Sign This Acknowledgment</Text>

      <Text>I have received a copy of this offices's Notice of Privacy Practices</Text>

      <Text>HIPPA Acknowledgement</Text>
      <Text>First Name: {fname}</Text>
      <Text>Last Name: {lname}</Text>
      <Text>Signature:</Text>
      <Image src={sig} style={{width:'400px', height:'100px'}}/>
      </Page>
     
      
    </Document>
  )
} 


export default PDF