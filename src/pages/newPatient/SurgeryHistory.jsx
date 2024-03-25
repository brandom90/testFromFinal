import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import variables from './variables'
import Navigate from '../../components/Navigate'
import styles from './styles'
import { ProgressBar } from '../../components'


const SurgeryHistory = () => {
  

  const surgeryHistory = variables[4]
  return (
    <Stack direction={styles.stack} sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
    <Box sx={styles.textBox}>
      <ProgressBar selected={4}/>
      <Typography textAlign={'center'} variant='h2'>Surgical History</Typography>
      <Typography textAlign={'center'}>Have you had any of the following?</Typography>
    </Box>
    <Box sx={styles.inputBox}>
      <FormGroup>
        { surgeryHistory.map((item) => (
            <span>
            <FormControlLabel control={<Checkbox defaultChecked={item.status} />} onChange={() => {item.status = !item.status}} label={item.name}/> 
            
            {  item.directionStatus &&
              <Box>

                <Select defaultValue={item.directionStatus} style={{width:'200px'}} onChange={(e)=>{item.directionStatus = e.target.value}}>
                  <MenuItem value={item.directionStatus} disabled>Choose Side</MenuItem>
                  <MenuItem value={'left'}>Left</MenuItem>
                  <MenuItem value={'right'}>Right</MenuItem>
                  <MenuItem value={'both'}>Both</MenuItem>
                </Select>
              </Box>
        
              }
            </span>
        ))}
        
        </FormGroup>
      </Box>
      <Box>
              <Navigate backLink={'/newPatientThree'} forwardLink={'/newPatientFive'}/>
      </Box>
      </Stack>
  )
}

export default SurgeryHistory