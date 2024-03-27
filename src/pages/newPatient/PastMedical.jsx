import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import variables from './variables'
import styles from './styles'
import {Navigate, ProgressBar} from '../../components'

const PastMedical = () => {
  const pastMedical = variables[1]

  return (
    
    
    <Stack direction={styles.stack} sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
      
      <Box sx={styles.textBox}>
      {/*<ProgressBar selected={2} amount={[1,2,3,4,5,6]}/> */}
      <ProgressBar selected={2} amount={[{num:1, link:'/newPatientOne'},{num:2, link:'/newPatientTwo'},{num:3, link:'/newPatientThree'},{num:4, link:'/newPatientFour'},{num:5, link:'/newPatientFive'},{num:6, link:'/newPatientSix'}]}/>
        <Typography variant="h2" textAlign={'center'}>Past Medical History</Typography>
        <Typography textAlign={'center'}>Have you ever had any of the following</Typography>
      </Box>
      <Box sx={styles.inputBox}>
      <FormGroup>
      { pastMedical.map((item) => (
          <FormControlLabel control={<Checkbox defaultChecked={item.status} />} onChange={() => item.status = !item.status} label={item.name}/>  
      ))}
      </FormGroup>
    </Box>
    <Box>
      <Navigate backLink={'/newPatientOne'} forwardLink={'/newPatientThree'} />
    </Box>
  </Stack>
  )
}

export default PastMedical