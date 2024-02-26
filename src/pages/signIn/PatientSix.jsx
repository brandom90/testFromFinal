import React from 'react'
import { Link } from 'react-router-dom'
import {Box, Stack, TextField, Typography} from '@mui/material'
import ProgressBar from '../../components/ProgressBar'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import informationLists from './utils/variables';
import Navigate from '../../components/Navigate';


const variables = informationLists[5]

const PatientSix = () => {
  
  const textFieldStyles = {
    margin:{xs:'10%', lg:'0'},
    marginLeft:{xs:'33%', lg:'10%'}, 
    marginBottom:{xs:'20px', lg:'10%'},
    width:'300px'
  }

  return (
    <Stack>
      <Box>
        <ProgressBar selected={6}/>
        <Typography variant='h2' sx={{textAlign:'center'}}>Who is Your Primary Care Team</Typography>

      </Box>

      <Box>
        <Box sx={{marginLeft:{lg:'28%'}}}>
          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='name' label='Name' variant='standard' defaultValue={variables.name} onChange = {(e) => variables.name = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='phone_number' label='Phone Number' variant='standard' defaultValue={variables.phone_number} onChange = {(e) => variables.phone_number = `${e.target.value}`}/>
        </Box>
        <Box sx={{marginLeft:{lg:'28%'}}}>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles}id='prev_surgeon' label='Previous Orthopaedic Surgeon' variant='standard' defaultValue={variables.prev_surgeon} onChange = {(e) => variables.prev_surgeon = `${e.target.value}`}/>

          <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={textFieldStyles} id='surg_phone_num' label='Phone Number' variant='standard' defaultValue={variables.surg_phone_num} onChange = {(e) => variables.surg_phone_num = `${e.target.value}`}/>
        </Box>
        
        <TextField InputLabelProps={{style: {fontSize:24}}} inputProps={{style: {fontSize: 24}}} sx={{margin:{xs:'10%', lg:'0'},marginLeft:{xs:'33%', lg:'10%'}, marginBottom:{xs:'20px', lg:'10%'}, width:'300px'}} 
        multiline 
        id='referrel' 
        label='who referred you?' 
        variant='standard' 
        defaultValue={variables.referrel} 
        onChange = {(e) => variables.referrel = `${e.target.value}`}/>
     
      </Box>
      <Box>
        <Navigate backLink={'/signInFive'} forwardLink={'/signInSubmitted'}/>
      </Box>
    </Stack>
  )
}
export default PatientSix