import { useState, useEffect } from 'react'
import React from 'react'
import {Box, Checkbox, Button , Typography, FormGroup, FormControlLabel, Stack, TextField} from '@mui/material'
import variables from './variables'
import userData from './variables'
import {Navigate, ProgressBar} from '../../components'
import styles from './styles'

const Medicals = () => {

  
  const currentProblems = variables[0]
  const names = userData

  return (
    <Stack sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>

    <Stack direction={styles.stack}>
      <Box sx={styles.textBox}>
        <ProgressBar selected={1}/>
        <Typography variant='h2' textAlign={'center'}>Current Medical Information</Typography>
        <Typography textAlign={'center'}>Select Any of the following medical conditions you currently have</Typography>
        <Stack sx={{width:'300px', margin:'0 auto'}}>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} label='Name' variant='standard' onChange={(e)=>{names.name = e.target.value}}/>
        
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} label='Last Name' variant='standard' onChange={(e)=>{names.last = e.target.value}} />
        </Stack>
      </Box>
      <Box style={styles.inputBox}>
        
        <FormGroup>
        { currentProblems.map((item) => (
            <FormControlLabel control={<Checkbox defaultChecked={item.status} />} onChange={() => item.status = !item.status} label={item.name}/>  
        ))}

        </FormGroup>
      </Box>
      
      
    </Stack>
    <Box>
         <Navigate backLink={'/newPatient'} forwardLink={'/newPatientTwo'} /> 
    </Box>
      
    </Stack>
  )
}

export default Medicals