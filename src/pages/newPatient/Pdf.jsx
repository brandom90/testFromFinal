import React, { useEffect } from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'
import variables from './variables'
import userData from './variables'

import other from './variables'
import { Box } from '@mui/material'

const styles = StyleSheet.create({
  redText: {color:'red'},
  plainText: {color:'black'}
})


const pdf = () => {
  
  
  return (
    <Document>
      
      {variables.map((list)=>(
        <Page>
          {list[0].name === 'Anemia' &&
          <>
            <Text syle={styles.plainText}>First Name:{userData.name}</Text>
            <Text syle={styles.plainText}>Last Name: {userData.last}</Text>
          </>
          }
          {list.map((item)=>(
            <Text style={item.status ? styles.redText : styles.plainText}>{item.name} - {typeof item.status === 'boolean' && item.status ? 'true' : ''} {typeof item.status === 'string' ? item.status : ''} {item.directionStatus && item.directionStatus !== 'Choose Side' && `${item.directionStatus}`}</Text>
          ))}
        </Page>
      ))}
      <Page>
          <Text style={other.injections ? styles.redText : styles.plainText}>Injections: {other.injections}</Text>
          <Text style={other.when ? styles.redText : styles.plainText}>When: {other.when}</Text>
          <Text style={other.where ? styles.redText : styles.plainText}>Where: {other.where}</Text>
          <Text style={other.type ? styles.redText : styles.plainText}>Type: {other.type}</Text>
          <Text style={other.awv ? styles.redText : styles.plainText}>AWV: {other.awv}</Text>
          <Text style={other.awvWhen ? styles.redText : styles.plainText}>When: {other.awvWhen}</Text>
          <Text style={other.chronicCareManagement ? styles.redText : styles.plainText}>Chronic Care Management: {other.chronicCareManagement}</Text>
          <Text style={other.managementWhere ? styles.redText : styles.plainText}>Where: {other.managementWhere}</Text>
          <Text style={other.preferredPharmacy ? styles.redText : styles.plainText}>Preferred Pharmacy: {other.preferredPharmacy}</Text>
          <Text style={other.prefferedPharmacyNumber ? styles.redText : styles.plainText}>Number: {other.prefferedPharmacyNumber}</Text>
          <Text style={other.prefferedPharmacyCityOrZip ? styles.redText : styles.plainText}>City/Zip: {other.prefferedPharmacyCityOrZip}</Text>
          
          <Text style={other.secondaryPharmacy ? styles.redText : styles.plainText}>Secondary Pharmacy: {other.secondaryPharmacy}</Text>
          <Text style={other.secondaryPharmacyNumber ? styles.redText : styles.plainText}>Number: {other.secondaryPharmacyNumber}</Text>
          <Text style={other.secondaryPharmacyCityOrZip ? styles.redText : styles.plainText}>City/Zip: {other.secondaryPharmacyCityOrZip}</Text>
          <Text style={other.medication ? styles.redText : styles.plainText}>Medication: {other.medication}</Text>
          <Text style={other.supplements ? styles.redText : styles.plainText}>Supplements: {other.supplements}</Text>
      </Page>
    </Document>
  )
} 

/*
  injections:'',
  when:'',
  where:'',
  type:'',
  awv:'',
  awvWhen:'',
  chronicCareManagement:'',
  managementWhere:'',
  preferredPharmacy:'',
  prefferedPharmacyNumber:'',
  prefferedPharmacyCityOrZip:'',
  secondaryPharmacy:'',
  secondaryPharmacyNumber:'',
  secondaryPharmacyCityOrZip:'',
  medication:[],
  supplements:[]
*/

export default pdf