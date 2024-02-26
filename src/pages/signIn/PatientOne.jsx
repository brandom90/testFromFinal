import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Box, Stack, TextField, Select, MenuItem, Typography } from '@mui/material'
import ProgressBar from '../../components/ProgressBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import informationLists from './utils/variables'
import states from './utils/states'
import Navigate from '../../components/Navigate';

//take variables, add to them, and pass them to the next form

const variables = informationLists[0]


const PatientOne = () => {

  const [state, setState] = useState(variables.state)
  const [gender, setGender] = useState(variables.gender)
  const [status, setStatus] = useState(variables.marital_status)

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
    variables.gender = gender
    variables.marital_status = status

  }, [gender,state, status])
  
  const updateState = (e) => {
    setState(e.target.value)
    variables.state = state

  }
  
  const updateGender = (e) => {
    setGender(e.target.value)
    variables.gender = gender

  }

  const updateStatus = (e) => {
    setStatus(e.target.value)
    variables.marital_status = status
  }


  return (
    <Stack>
      <Box>
        <ProgressBar selected={1}/>
        <Typography variant="h2" sx={{textAlign:'center'}}>Patient Information</Typography>
      </Box>

      <Box >
        <Box >
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='last_name' label='Last Name' variant='standard' defaultValue={variables.last_name} onChange = {(e) => variables.last_name = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}  id='first_name' label='First Name' variant='standard' defaultValue={variables.first_name} onChange = {(e) => {variables.first_name= `${e.target.value}`}}/>  
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='middle_init' label='Middle Initial' variant='standard' defaultValue={variables.middle_init} onChange = {(e) => {variables.middle_init= `${e.target.value}`}}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='email' label='Email' variant='standard' defaultValue={variables.email} onChange = {(e) => {variables.email= `${e.target.value}`}}/>
          
        </Box>

        <Box>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='address' label='Address' variant='standard' defaultValue={variables.address} onChange = {(e) => {variables.address= `${e.target.value}`}}/>
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='city' label='City'  variant='standard' defaultValue={variables.city} onChange = {(e) => {variables.city= `${e.target.value}`}}/>
          
          <Select sx={selectStyles} id='stateId' value={state} onChange={updateState}>
            <MenuItem value={state} disabled>Select State</MenuItem>
            {states.map((item) => (
              <MenuItem key={item} value={item} sx={{fontSize:'24px'}}>
                {item}
              </MenuItem>
            ))}
          </Select>
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='zip' label='Zip' variant='standard' defaultValue={variables.zip} onChange = {(e) => {variables.zip= `${e.target.value}`}}/>

        </Box>
        <Box>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='cell_phone' label='Cell Phone' variant='standard' defaultValue={variables.cell_phone} onChange = {(e) => {variables.cell_phone= `${e.target.value}`}}/>
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='home_phone' label='Home Phone' variant='standard' defaultValue={variables.home_phone} onChange = {(e) => {variables.home_phone= `${e.target.value}`}}/>
          
          <Select sx={selectStyles} id='marital_status' value={status} onChange={updateStatus}>
            <MenuItem sx={{fontSize:'24px'}} value={status} disabled>Marital Status</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'single'}>Single</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'married'}>Married</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'widowed'}>Widowed</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'divorced'}>Divorced</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'life partner'}>Life Partner</MenuItem>
          </Select>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='dob' label='Date Of Birth' variant='standard' defaultValue={variables.dob} onChange = {(e) => {variables.dob= `${e.target.value}`}}/>`

        </Box>

        <Box>
        
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='age' label='Age' variant='standard' defaultValue={variables.age} onChange = {(e) => {variables.age= `${e.target.value}`}}/>
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='ssn' label='Social Security Number' variant='standard' defaultValue={variables.ssn} onChange = {(e) => {variables.ssn= `${e.target.value}`}}/>

          <Select sx={selectStyles} id='gender' value={gender} onChange={updateGender}>
            <MenuItem sx={{fontSize:'24px'}} value={gender} disabled>Gender</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'male'}>Male</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'female'}>Female</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'nonbinary'}>Non-Binary</MenuItem>
          </Select>
 
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='dl_num' label='Drivers License Number' variant='standard' defaultValue={variables.dl_num} onChange = {(e) => {variables.dl_num= `${e.target.value}`}}/>
        </Box>
        
      </Box>
      <Box>
          <Navigate backLink={'/signInForm'} forwardLink={'/signInTwo'}/>
        </Box>
    </Stack>
  )
}

export default PatientOne