import React from 'react'
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer'


const HKoosPDF = ({lists}) => {

  const subscale = (list) =>{
    var totalScore = 0
    var scoreToDivide = 0
    for(let i = 0; i<list.length; i++){
      if('question' in list[i]){
        totalScore += Number(list[i].value)
        scoreToDivide += 4
      }
    }
    
    totalScore = totalScore*100
    totalScore = totalScore/scoreToDivide
    return 100 - totalScore

  }

  return (
    <Document>
      {lists.map((list,idx)=>(
        <Page key={`page${idx}`}>
          <Text>{idx === 0 && `${lists[5].first} ${lists[5].last}`}</Text>
          {Array.isArray(list) && list.map((item,idx)=>(
              <Text key={`${item.question}${idx}`}>{'question' in item && `${item.question}: ${item.value}`}</Text>
          ))}
          <Text>{Array.isArray(list) && subscale(list)}</Text>
        </Page>
      ))}
    </Document>
  )
}

export default HKoosPDF