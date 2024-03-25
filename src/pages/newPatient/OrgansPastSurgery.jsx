import { Box, Checkbox, FormControlLabel, FormGroup, MenuItem, Select, Stack, Typography } from '@mui/material'
import React, {useState, useEffect} from 'react'
import variables from './variables'
import Navigate from '../../components/Navigate'
import styles from './styles'
import { ProgressBar } from '../../components'


const OrgansPastSurgery = () => {

  

  const organsPastSurgery = variables[5]
  const [fillerText, setFillerText] = useState('Choose Side')
  

  return (
    <Stack direction={styles.stack} sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)',}}>
      <Box sx={styles.textBox}>
      <ProgressBar selected={5}/>

        <Typography textAlign={'center'} variant='h2'>Surgical History cont.</Typography> 
        <Typography textAlign={'center'}>Have you had surgery on any of the following organs?</Typography>
      </Box>
      <Box sx={styles.inputBox}>
          <FormGroup>
            { organsPastSurgery.map((item) => (
                  <span>
                  <FormControlLabel control={<Checkbox />} onChange={() => {item.status = !item.status}} label={item.name}/> 
                  
                  {  item.directionStatus &&
                    <Box>

                      <Select defaultValue={fillerText} style={{width:'200px'}} onChange={(e)=>{item.directionStatus = e.target.value}}>
                        <MenuItem value={fillerText} disabled>Choose Side</MenuItem>
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
          <Navigate backLink={'/newPatientFour'} forwardLink={'/newPatientSix'}/>
        </Box>
      </Stack>
  )
}

export default OrgansPastSurgery