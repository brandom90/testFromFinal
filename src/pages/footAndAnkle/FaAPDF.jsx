import React from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'


const FaAPDF = ({data}) => {
  return (
    <Document>
      <Page>
        {
          data.map((item)=>(
            <Text key={item.id}>{`${item.id} ${item.value}`}</Text>
          ))
        }
      </Page>
    </Document>
  )
}

export default FaAPDF