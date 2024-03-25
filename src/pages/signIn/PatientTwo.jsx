import {React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Box, Stack, TextField, Select, MenuItem, Typography } from '@mui/material'
import ProgressBar from '../../components/ProgressBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import states from './utils/states'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import informationLists from './utils/variables'
import Navigate from '../../components/Navigate';

const variables = informationLists[1]

const PatientTwo = () => {

  const [state, setState] = useState(variables.state)
  const [employment, setEmployment] = useState(variables.employment)

  const textFieldStyles = {
    margin:{xs:'10%', lg:'0'},
    marginLeft:{xs:'33%', lg:'10%'}, 
    marginBottom:{xs:'20px', lg:'10%'},
    width:'300px'

  }
  const selectStyles = {
    margin:{xs:'10%', lg:'0'},
    marginLeft:{xs:'33%', lg:'10%'}, 
    marginBottom:{xs:'20px', lg:'10%'}, 
    width:'300px',
    height:"75px",
    fontSize:'24px'
  }

  useEffect(() => {
    variables.state = state
    variables.employment = employment

  }, [state,employment])

  const updateState = (e) => {
    setState(e.target.value)
    variables.state = state
  }
  
  const updateEmployment = (e) => {
    setEmployment(e.target.value)
    variables.employment = state
  }


  return (
    <Stack sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
      <Box>
        <ProgressBar selected={2}/>
        <Typography variant='h2' sx={{textAlign:'center'}}>Employer Information</Typography>
      </Box>

      <Box>
        <Box>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='employer_name' label='Employer Name' variant='standard' defaultValue={variables.employer_name} onChange = {(e) => variables.employer_name = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='work_phone' label='Work Phone' variant='standard' defaultValue={variables.work_phone} onChange = {(e) => variables.work_phone = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='address' label='Address' variant='standard' defaultValue={variables.address} onChange = {(e) => variables.address = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='city' label='City' variant='standard' defaultValue={variables.city} onChange = {(e) => variables.city = `${e.target.value}`}/>

        </Box>
        <Box>
          <Select sx={selectStyles} id='stateId' value={state} onChange={updateState}>
            <MenuItem value={state} disabled>Select State</MenuItem>
              {states.map((item) => (
                <MenuItem key={item} value={item} sx={{fontSize:'24px'}}>
                  {item}
                </MenuItem>
              ))}
            </Select>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='city' label='City' variant='standard' defaultValue={variables.city} onChange = {(e) => variables.city = `${e.target.value}`}/>
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='zip' label='Zip' variant='standard' defaultValue={variables.zip} onChange = {(e) => variables.zip = `${e.target.value}`}/>

          <Select sx={selectStyles} id='employment' value={employment} onChange={updateEmployment}>
              <MenuItem value={employment} disabled>Employment</MenuItem>
              <MenuItem sx={{fontSize:'24px'}} value={'self employed'}>Self Employed</MenuItem>
              <MenuItem sx={{fontSize:'24px'}} value={'retired'}>Retired</MenuItem>
              <MenuItem sx={{fontSize:'24px'}} value={'neither'}>Neither</MenuItem>
          </Select>

          
        </Box>
      </Box>

      <Box>
          <Navigate backLink={'/signInOne'} forwardLink={'/signInThree'}/>
      </Box>
    </Stack>
  )
}

export default PatientTwo