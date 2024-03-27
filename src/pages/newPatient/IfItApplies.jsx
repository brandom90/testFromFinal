import { Box, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

import variables from './variables'
import Navigate from '../../components/Navigate'
import styles from './styles'
import { ProgressBar } from '../../components'

const IfItApplies = () => {

  const ifItApplies = variables[2]
  const ifItAppliesInput = variables[3]

  return (
    <Stack direction={styles.stack} sx={{ height: '100vh', backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
      <Box sx={styles.textBox}>
      {/*<ProgressBar selected={3} amount={[1,2,3,4,5,6]}/> */}
      <ProgressBar selected={3} amount={[{num:1, link:'/newPatientOne'},{num:2, link:'/newPatientTwo'},{num:3, link:'/newPatientThree'},{num:4, link:'/newPatientFour'},{num:5, link:'/newPatientFive'},{num:6, link:'/newPatientSix'}]}/>
        <Typography textAlign={'center'} variant='h2'>Lifestyle</Typography>
        <Typography textAlign={'center'}>Check any of these things that apply</Typography>
      </Box>
      <Box sx={styles.inputBox}>
      <FormGroup>
      { ifItApplies.map((item) => (
          <FormControlLabel control={<Checkbox defaultChecked={item.status} />} onChange={() => item.status = !item.status}  label={item.name}/>  
      ))}
      </FormGroup>
      <Stack direction={'column'}>
      {ifItAppliesInput.map((item) => (
        <TextField defaultValue={item.status} label={item.name} onChange={(e) => {item.status = e.target.value}} multiline style={{marginTop:'20px', marginRight:'10%'}}/>
      ))}
      </Stack>
    </Box>
    <Navigate backLink={'/newPatientTwo'} forwardLink={'/newPatientFour'}/>
  </Stack>
  )
}

export default IfItApplies