import {React, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {Box, Stack, TextField, Select, MenuItem, Typography} from '@mui/material'
import ProgressBar from '../../components/ProgressBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import states from './utils/states'
import informationLists from './utils/variables'
import Navigate from '../../components/Navigate';


const variables = informationLists[4]

const PatientFive = () => {

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

  const [state, setState] = useState(variables.state)
  const [relationship, setRelationship] = useState(variables.relationship)

  useEffect(() => {
    variables.state = state
    variables.relationship = relationship

  }, [state,relationship])

  const updateState = (e) => {
    setState(e.target.value)
    variables.state = state
  }

  const updateRelationship = (e) => {
    setRelationship(e.target.value)
    variables.relationship = state
  }

  return (
    <Stack sx={{backgroundImage: 'linear-gradient(to top, lightblue, white)'}}>
      <Box>
        <ProgressBar selected={5}/>
        <Typography variant="h2" sx={{textAlign:'center'}}>Guarantor Information</Typography>
        <Typography sx={{textAlign:'center', fontStyle:'italic', fontSize:'20px'}}>Financial Responsibility for your care</Typography>
      </Box>

      <Box>
        <Box>
          <Select sx={selectStyles} id='relationship' value={relationship} onChange={updateRelationship}>
            <MenuItem value={relationship} disabled>Relationship to you</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'self'}>Self</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'spouse'}>Spouse</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'parent'}>Parent</MenuItem>
            <MenuItem sx={{fontSize:'24px'}} value={'other'}>Other</MenuItem>
          </Select>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}id='last_name' label='Last Name' variant='standard' defaultValue={variables.last_name} onChange = {(e) => variables.last_name = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}id='first_name' label='First Name' variant='standard' defaultValue={variables.first_name} onChange = {(e) => variables.first_name = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='middle_init' label='Middle Initial' variant='standard' defaultValue={variables.middle_init} onChange = {(e) => variables.middle_init = `${e.target.value}`}/>
        </Box>
        <Box>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='address' label='Address' variant='standard' defaultValue={variables.address} onChange = {(e) => variables.address = `${e.target.value}`}/>

          <Select sx={selectStyles} id='stateId' value={state} onChange={updateState}>
              <MenuItem value={state} disabled>Select State</MenuItem>
              {states.map((item) => (
                <MenuItem key={item} value={item}  sx={{fontSize:'24px'}}>
                  {item}
                </MenuItem>
              ))}
            </Select>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='zip' label='Zip' variant='standard' defaultValue={variables.zip} onChange = {(e) => variables.zip = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='cell_phone' label='Cell Phone' variant='standard' defaultValue={variables.cell_phone} onChange = {(e) => variables.cell_phone = `${e.target.value}`}/>
        </Box>

        <Box sx={{marginLeft:{lg:'15%'}}}>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='home_phone' label='Home Phone' variant='standard' defaultValue={variables.home_phone} onChange = {(e) => variables.home_phone = `${e.target.value}`}/>
          
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}id='acceptance' label='Acceptance' variant='standard' defaultValue={variables.acceptance} onChange = {(e) => variables.acceptance = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='date' label='Date' variant='standard' defaultValue={variables.date} onChange = {(e) => variables.date = `${e.target.value}`}/>
        </Box>
      </Box>

      <Box>
        <Navigate backLink={'/signInFour'} forwardLink={'/signInSix'}/>
      </Box>
    </Stack>
  )
}
export default PatientFive