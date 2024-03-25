import React from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'
import informationLists from './utils/variables'

const patient_information = informationLists[0]
const employer_information = informationLists[1]
const emergency_release = informationLists[2]
const insurance_info = informationLists[3]
const guarantor_information = informationLists[4]
const primary_care = informationLists[5]

const styles = StyleSheet.create({
  heading: {
    fontSize: '36px',
    fontStyle:'center',
    fontWeight:'bold',
    textDecoration:'underline',
    marginBottom:'30px',
    marginTop:'30px'
  },
  div: {
    textAlign:'center',
    fontSize:'24px',
    },
  text: {
    margin:'10px'
  }
})

const PDFfile = () => {
  return (
    <Document sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
      <Page style={styles.div}>
          <Text style={styles.heading}>Patient Information</Text>
          
            
          <Text style={styles.text}>Last Name: {patient_information.last_name}</Text>
            
            
            <Text style={styles.text}>First Name: {patient_information.first_name}</Text>
            
            <Text style={styles.text}>Middle Initial: {patient_information.middle_init}</Text>
           
            <Text style={styles.text}>Address: {patient_information.address}</Text>
            
            <Text style={styles.text}>City: {patient_information.city}</Text>
            
            <Text style={styles.text}>State: {patient_information.state}</Text>
            
            <Text style={styles.text}>Zip: {patient_information.zip}</Text>
            
            <Text style={styles.text}>Cell Phone: {patient_information.cell_phone}</Text>
            
            <Text style={styles.text}>Home Phone: {patient_information.home_phone}</Text>
            
            <Text style={styles.text}>Marital State: {patient_information.marital_status}</Text>
           
            <Text style={styles.text}>Date of Birth: {patient_information.dob}</Text>
            
            <Text style={styles.text}>Age: {patient_information.age}</Text>
            
            <Text style={styles.text}>Social Security Number: {patient_information.ssn}</Text>
            
            <Text style={styles.text}>Gender: {patient_information.gender}</Text>
            
            <Text style={styles.text}>Drivers Lisense Number: {patient_information.dl_num}</Text>
            
            <Text style={styles.text}>Email: {patient_information.email}</Text>
          
        </Page>
        <Page style={styles.div}>
          <Text style={styles.heading}>Employer Information</Text>
          
          
            <Text style={styles.text}>Employer Name: {employer_information.employer_name}</Text>
           
            <Text style={styles.text}>Work Phone: {employer_information.work_phone}</Text>
     
            <Text style={styles.text}>Address: {employer_information.address}</Text>
         
            <Text style={styles.text}>City: {employer_information.city}</Text>
          
            <Text style={styles.text}>State: {employer_information.state}</Text>
        
            <Text style={styles.text}>Zip: {employer_information.zip}</Text>
     
            <Text style={styles.text}>Retired or Self Employed: {employer_information.employment}</Text>
            
          
        </Page>
     
        <Page style={styles.div}>
          <Text style={styles.heading}>Emergency Contact Information</Text>
          

            <Text style={styles.text}>Emergency Contact: {emergency_release.emergency_contact}</Text>
      
            <Text style={styles.text}>Relationship: {emergency_release.relationship}</Text>
       
            <Text style={styles.text}>Phone: {emergency_release.phone}</Text>
           
        
            <Text style={styles.heading}>Release of Information</Text>
          
          
            <Text style={styles.text}>Name: {emergency_release.release_name_one}</Text>
         
            <Text style={styles.text}>Relationship To Patient: {emergency_release.release_relationship_one}</Text>
           
            <Text style={styles.text}>Name: {emergency_release.release_name_two}</Text>
           
            <Text style={styles.text}>Relationship To Patient: {emergency_release.release_relationship_two}</Text>
          
        </Page>
        
        <Page style={styles.div}>
          <Text style={styles.heading}>Insurance Information</Text>

            
            <Text style={styles.text}>Primary Insurance: {insurance_info.primary_insurance}</Text>
            
            <Text style={styles.text}>ID#: {insurance_info.prim_id}</Text>
            
            <Text style={styles.text}>GROUP#: {insurance_info.prim_group}</Text>
            
            <Text style={styles.text}>Secondary Insurance: {insurance_info.secondary_insurance}</Text>
          
            <Text style={styles.text}>ID#: {insurance_info.sec_id}</Text>
            
            <Text style={styles.text}>GROUP#: {insurance_info.sec_group}</Text>

        </Page>
      
        <Page style={styles.div}>
          <Text style={styles.heading}>Guarantor Information</Text>
          
           
          <Text style={styles.text}>Relationship To Patient: {guarantor_information.relationship}</Text>
           
          <Text style={styles.text}>Last Name: {guarantor_information.last_name}</Text>
           
          <Text style={styles.text}>Firsts Name: {guarantor_information.first_name}</Text>
          
          <Text style={styles.text}>Middle Initial: {guarantor_information.middle_init}</Text>
         
          <Text style={styles.text}>Address: {guarantor_information.address}</Text>
        
          <Text style={styles.text}>State: {guarantor_information.state}</Text>
          
          <Text style={styles.text}>Zip: {guarantor_information.zip} </Text>
         
          <Text style={styles.text}>Cell Phone: {guarantor_information.cell_phone}</Text>
        
          <Text style={styles.text}>Home Phone: {guarantor_information.home_phone}</Text>
           
          <Text style={styles.text}>Acceptance of Guarantor Responsibility Sign: {guarantor_information.acceptance}</Text>
            
          <Text style={styles.text}>Date: {guarantor_information.date}</Text>
 
        </Page>
   
        <Page style={styles.div}>
          <Text style={styles.heading}>Primary Care Team</Text>

  
          <Text style={styles.text}>Name: {primary_care.name}</Text>
  
          <Text style={styles.text}>Phone Number: {primary_care.phone_number}</Text>
      
          <Text style={styles.text}>Previous Orthopaedic Surgeon: {primary_care.prev_surgeon}</Text>
  
          <Text style={styles.text}>Phone Number: {primary_care.surg_phone_num}</Text>

          <Text style={styles.text}>Who may we thank for your referral to our practice?: {primary_care.referrel}</Text>
 
        </Page>


    </Document>
  )
}

export default PDFfile